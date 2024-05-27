import { useForm } from "react-hook-form";
import ThemeToggleMenu from "../ThemeToggleBtn";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import AuthLayout from "./AuthLayout";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { paths } from "@/paths";
import { graphql } from "relay-runtime";
import { useMutation } from "react-relay";
import LoadingSpinner from "../Spinner";
import { SignUpMutation } from "./__generated__/SignUpMutation.graphql";
import { useUserContext } from "@/AuthContext";
import { useNavigate } from "react-router-dom";
import { setStorage } from "@/utils/sessionStorage";

const RegisterSchema = z
  .object({
    firstName: z.string().nonempty("First name cannot be empty"),
    lastName: z.string().nonempty("Last name cannot be empty"),
    email: z
      .string()
      .min(1, "Email ID cannot be empty!")
      .email("Invalid Email ID!"),
    tax_id: z
      .string({
        required_error: "Tax ID cannot be empty",
      })
      .min(10, "Invalid Tax ID!")
      .max(10, "Invalid Tax ID!"),
    password: z
      .string({
        required_error: "Password cannot be empty!",
      })
      .min(6, "Password is too Short!")
      .max(25, "Password is too Long!"),
    confirm_password: z.string({
      required_error: "Confirm password cannot be empty",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password do not match!",
    path: ["confirm_password"],
  });

export default function SignUp() {
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      tax_id: undefined,
      password: "",
      confirm_password: "",
    },
  });

  const registerMutation = graphql`
    mutation SignUpMutation($registerInput: RegisterInput) {
      register(registerInput: $registerInput) {
        id
        firstname
        lastname
        email
        tax_id
        createdAt
        token
      }
    }
  `;

  const [commitMutation, isMutationInFlight] =
    useMutation<SignUpMutation>(registerMutation);

  function onSubmit(data: z.infer<typeof RegisterSchema>) {
    commitMutation({
      variables: {
        registerInput: {
          firstname: data.firstName,
          lastname: data.lastName,
          password: data.password,
          tax_id: data.tax_id,
          email: data.email,
        },
      },
      onCompleted({ register }) {
        setUser({
          id: parseInt(register.id),
          firstName: register.firstname,
          tax_id: register.tax_id,
          isValid: true,
        });
        setStorage(
          "user",
          JSON.stringify({
            id: parseInt(register.id),
            firstName: register.firstname,
            tax_id: register.tax_id,
            isValid: true,
          })
        );
        setStorage("token", register.token);
        navigate(paths.dashboard.overview);
      },
      onError(error) {
        console.log(error);
      },
    });
    console.log(data);
  }

  return (
    <AuthLayout>
      <div className="flex flex-col min-h-screen">
        <div className="p-5 flex justify-end">
          <ThemeToggleMenu />
        </div>
        {isMutationInFlight ? (
          <LoadingSpinner />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Card className="md:w-4/6 w-10/12">
              <CardHeader className="text-center">
                <CardTitle>Sign Up</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <div className="flex space-x-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
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
                          <FormItem>
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
                          <FormLabel>Email ID</FormLabel>
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
                      name="tax_id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tax ID</FormLabel>
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
                    <div className="flex space-x-4">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input
                                type="password"
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
                        name="confirm_password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                              <Input
                                type="password"
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
                    <Button type="submit" className="w-full">
                      Sign up
                    </Button>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="font-serif space-x-2 justify-center">
                <p>Already have an account?</p>
                <a
                  href={paths.auth.signIn}
                  className="underline hover:text-blue-700"
                >
                  Sign in
                </a>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </AuthLayout>
  );
}
