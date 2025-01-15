import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router";
import { login } from "@/lib/pocketbase";

const formSchema = z.object({
  username: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .email({ message: "Invalid email address" }),
  password: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(8, "You're password isn't long enough")
    .max(30, "You're password is to long"),
});

export function LoginForm() {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const {
        record: { id },
      } = await login(values.username, values.password);
      if (!id) {
        throw Error("Something went wrong.");
      }
      navigate("/movies");
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div className="grid h-screen place-items-center text-center">
      <h1 className="grid place-items-center text-center self-end mb-8">
        Login
      </h1>
      <div className="grid place-items-center text-center self-start">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
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
                    <Input placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-4">
              Submit
            </Button>
          </form>
          <Link className="mt-4" to="/signup">
            Don't have an account yet? Sign-up here!
          </Link>
        </Form>
      </div>
    </div>
  );
}
