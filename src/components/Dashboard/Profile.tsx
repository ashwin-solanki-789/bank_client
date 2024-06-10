import { paths } from "@/paths";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import DashboardLayout from "./DashboardLayout";
import { Card, CardContent, CardFooter } from "../ui/card";
import { DollarSign, FilePen } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery, useMutation } from "react-relay";
import { ProfileQuery } from "./__generated__/ProfileQuery.graphql";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import moment from "moment";
import { ProfileEditMutation } from "./__generated__/ProfileEditMutation.graphql";

const EditSchema = z.object({
  firstName: z.string().nonempty("First name cannot be empty"),
  lastName: z.string().nonempty("Last name cannot be empty"),
  email: z
    .string()
    .min(1, "Email ID cannot be empty!")
    .email("Invalid Email ID!"),
});

export default function Profile() {
  const navigate = useNavigate();
  const getUserQuery = graphql`
    query ProfileQuery {
      getUser {
        ... on User {
          id
          email
          firstname
          lastname
          tax_id
          accounts {
            account_number
            balance
            createdAt
          }
          createdAt
        }

        ... on Error {
          status_code
          message
        }
      }
    }
  `;
  const editMutation = graphql`
    mutation ProfileEditMutation($UpdateInput: UpdateInput!) {
      updateUser(updateInput: $UpdateInput) {
        id
        email
        firstname
        lastname
      }
    }
  `;
  const form = useForm<z.infer<typeof EditSchema>>({
    resolver: zodResolver(EditSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });
  const [commitMutation] = useMutation<ProfileEditMutation>(editMutation);
  const data = useLazyLoadQuery<ProfileQuery>(getUserQuery, {});

  useEffect(() => {
    if (
      data.getUser.status_code === 601 ||
      (data.getUser.accounts && data.getUser.accounts.length <= 0)
    ) {
      localStorage.clear();
      navigate(paths.auth.signIn);
      return;
    }
    form.setValue("firstName", data.getUser.firstname as string);
    form.setValue("lastName", data.getUser.lastname as string);
    form.setValue("email", data.getUser.email as string);
  }, [data]);

  function onSubmit(data: z.infer<typeof EditSchema>) {
    commitMutation({
      variables: {
        UpdateInput: {
          firstname: data.firstName,
          lastname: data.lastName,
          email: data.email,
        },
      },
      onCompleted() {
        window.location.reload();
      },
      onError() {
        form.setError("email", { message: "Email ID already exist" });
      },
    });
  }

  return (
    <DashboardLayout>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={paths.dashboard.overview}>
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Profile</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div id="Profile" className="mt-5 flex gap-5 flex-col">
        <Card className="p-2 lg:w-6/12 mx-auto">
          <CardContent className="mt-5 lg:flex gap-5 items-center justify-between">
            <div className="flex gap-5 items-center">
              <Avatar className="lg:h-20 lg:w-20">
                <AvatarImage src="/profile.png" />
              </Avatar>
              <div className="font-sans lg:text-2xl text-lg">
                <h2>{`${data.getUser.firstname} ${data.getUser.lastname}`}</h2>
                <h3>{data.getUser.email}</h3>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant={"ghost"}>
                    <FilePen className="cursor-pointer" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-5/6 lg:w-full">
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                  </DialogHeader>
                  <div>
                    <Form {...form}>
                      <form
                        className="space-y-5 w-full"
                        onSubmit={form.handleSubmit(onSubmit)}
                      >
                        <div className="flex gap-5">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    autoComplete="off"
                                    autoSave="off"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    autoComplete="off"
                                    autoSave="off"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  autoComplete="off"
                                  autoSave="off"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button className="" variant={"outline"}>
                          Update
                        </Button>
                      </form>
                    </Form>
                  </div>
                </DialogContent>
              </Dialog>
              <Badge className="text-lg bg-green-500">ACTIVE</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start">
            <p className="font-sans lg:text-2xl">
              Tax ID - {data.getUser.tax_id}
            </p>
            {data.getUser.createdAt && (
              <p className="font-sans lg:text-2xl">
                Created Date -{" "}
                {moment(parseInt(data.getUser.createdAt)).format(
                  "DD-MM-YYYY HH:mm"
                )}
              </p>
            )}
          </CardFooter>
        </Card>
        {data.getUser.accounts &&
          data.getUser.accounts.map((account, index) => (
            <Card className="lg:w-6/12 mx-auto p-8" key={index}>
              <div className="flex justify-between">
                <h2>Account Number - {account?.account_number}</h2>
                <Badge className="bg-green-500 lg:text-lg">ACTIVE</Badge>
              </div>
              <div className="flex gap-5 flex-col">
                <p className="flex font-sans text-xl items-center">
                  <DollarSign /> {account?.balance}
                </p>
                {account?.createdAt && (
                  <p className="text-sm font-sans">
                    Created:{" "}
                    {moment(parseInt(account?.createdAt)).format(
                      "DD-MM-YYYY HH:mm"
                    )}
                  </p>
                )}
              </div>
            </Card>
          ))}
      </div>
    </DashboardLayout>
  );
}
