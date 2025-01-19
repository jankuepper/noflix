import { create } from "@/lib/pocketbase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  number: z
    .number({
      required_error: "Number is required.",
      invalid_type_error: "Number must be a number.",
    })
    .int(),
  title: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(4, "You're title isn't long enough"),
});

export function AddSeason() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      number: 0,
      title: "",
    },
  });

  async function onSubmit({ number, title }: z.infer<typeof formSchema>) {
    try {
      const { id } = await create("season", {
        number,
        title,
      });
      if (!id) {
        throw Error("Something went wrong.");
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number</FormLabel>
                <FormControl>
                  <Input placeholder="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title" {...field} />
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
    </>
  );
}
