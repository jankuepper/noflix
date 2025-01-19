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
  order: z.coerce
    .number({
      required_error: "Order is required.",
      invalid_type_error: "Order must be a number.",
    })
    .int(),
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(4, "You're name isn't long enough"),
  data: z
    .instanceof(File)
    .refine((file) => ["video/mp4"].includes(file.type), "File is required."),
});

export function AddEpisode() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      order: -1,
      name: "",
      data: undefined as unknown as File,
    },
  });

  async function onSubmit({ order, name, data }: z.infer<typeof formSchema>) {
    try {
      const { id } = await create("episode", {
        order,
        name,
        data,
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
            name="order"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Order</FormLabel>
                <FormControl>
                  <Input placeholder="order" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="data"
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>File upload</FormLabel>
                <FormControl>
                  <Input
                    placeholder="file"
                    type="file"
                    {...fieldProps}
                    onChange={(event) =>
                      onChange(event.target.files && event.target.files[0])
                    }
                  />
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
