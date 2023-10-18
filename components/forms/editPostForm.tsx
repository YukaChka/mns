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
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import { ItemNewProps } from "@/app/api/posts/posts";

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

export function EditPostForm({
  id,
  title,
  datapublic,
  description,
  imgpaths,
}: ItemNewProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      datapublic: datapublic,
      title: title,
      description: description,
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/4` space-y-6">
        <FormField
          control={form.control}
          name="datapublic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Дата</FormLabel>
              <FormControl>
                <Input placeholder="Дата публикации" {...field} />
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
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Введите Текст"
                  className="min-w-min max-h-96"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {imgpaths && (
          <div className="flex justify-center p-5 ">
            {imgpaths[0] && (
              <Image
                src={imgpaths[0].path}
                alt=""
                className="pointer-events-none p-1 "
                height={100}
                width={100}
              />
            )}
            {imgpaths[1] && (
              <Image
                src={imgpaths[1].path}
                alt="qe"
                className="pointer-events-none p-1"
                height={100}
                width={100}
              />
            )}
          </div>
        )}
        <Button type="submit">Опубликовать</Button>
      </form>
    </Form>
  );
}
