// import { useUserContext } from "@/AuthContext";
import { Button } from "../ui/button";
import AuthLayout from "./AuthLayout";
// import { useNavigate } from "react-router-dom";
import { paths } from "@/paths";
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
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "Email ID cannot be empty!")
    .email("Invalid Email ID!"),
  password: z
    .string()
    .nonempty("Password cannot be empty!")
    .min(6, "Password is too short!")
    .max(25, "Password is too long!"),
});

export default function SignIn() {
  // const { setUser } = useUserContext();
  // const navigate = useNavigate();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof LoginSchema>) {
    console.log(data);
  }

  return (
    <AuthLayout>
      <div className="flex flex-col min-h-screen">
        <div className="p-5 flex justify-end">
          <ThemeToggleMenu />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Card className="md:w-4/6 w-10/12">
            <CardHeader className="text-center">
              <CardTitle>Sign In</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email ID</FormLabel>
                        <FormControl>
                          <Input {...field} autoComplete="off" autoSave="off" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-col gap-2">
                    <Button type="submit" className="w-full">
                      Login
                    </Button>
                    <a
                      className="hover:underline"
                      href={paths.auth.resetPassword}
                    >
                      Forget password?
                    </a>
                  </div>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="font-serif space-x-2 justify-center">
              <p>Don't have an account?</p>
              <a
                href={paths.auth.signUp}
                className="underline hover:text-blue-700"
              >
                Sign up
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </AuthLayout>
  );
}
