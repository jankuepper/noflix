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
import { signUp } from "@/lib/pocketbase";
import { useNavigate } from "react-router";

const formSchema = z
  .object({
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
    confirm: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .min(8, "You're password isn't long enough")
      .max(30, "You're password is to long"),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"], // path of error
  });

export function SignUpForm() {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      confirm: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { id } = await signUp(
        values.username,
        values.password,
        values.confirm
      );
      if (!id) {
        throw Error("Something went wrong.");
      }
      navigate("/movies");
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <>
      <div className="grid h-screen place-items-center text-center">
        <h1 className="grid place-items-center text-center self-end mb-8">
          Sign up
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
              <FormField
                control={form.control}
                name="confirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input placeholder="confirm password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-4">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
