import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Textarea } from "../ui/textarea";

const FormSchema = z.object({
  datapublic: z.string().min(2, {
    message: "must be at least 2 characters.",
  }),
  title: z.string().min(2, {
    message: "must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "must be at least 2 characters.",
  }),
});

export function CreatePostForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      datapublic: "",
      title: "",
      description: "",
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
        <FormField
          control={form.control}
          name="datapublic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Дата</FormLabel>
              <FormControl>
                <Input placeholder="Дата публикации" type="date" {...field} />
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
              <FormLabel>Заголовок</FormLabel>
              <FormControl>
                <Input placeholder="Введите Название" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>

              <FormLabel>Текст</FormLabel>
              <FormControl>
                <Textarea placeholder="Введите Текст" />
              </FormControl>
              <FormMessage />

        </div>
        <Button type="submit">Опубликовать</Button>
      </form>
    </Form>
  );
}
