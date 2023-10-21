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
import { useEffect, useState } from "react";

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

type ImageProps = {
  path: string;
  title: string;
};

export function EditPostForm({
  id,
  title,
  datapublic,
  description,
  imgpaths,
}: ItemNewProps) {
  const [file, setFile] = useState<File>();
  const [images, setImages] = useState(Array<ImageProps>);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      datapublic: datapublic,
      title: title,
      description: description,
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {}

  async function Upload(file: any) {
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      // handle the error
      if (!res.ok) throw new Error(await res.text());

      return res.json();
    } catch (e: any) {
      // Handle errors here
      console.error(e);
    }
  }

  useEffect(() => {
    const getPath = async () => {
      const path = await Upload(file);
      if (path) {
        let url = path.path.replace(
          "public",
          `${process.env.NEXT_PUBLIC_BASE_URL}`
        );
        let name = path.path.split("/")[2];
        let [domen, dosc] = path.path.split("/");

        setImages([...images, { path: `/${dosc}/${name}`, title: name }]);
      }
    };
    getPath();
  }, [file]);

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

        <div>
          <FormLabel>Загрузить фото</FormLabel>
          <FormControl>
            <Input
              type="file"
              onChange={(e) => {
                setFile(e.target.files?.[0]);
              }}
            />
          </FormControl>
          <FormMessage />
        </div>
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
        <Button type="submit" className="hover:bg-green-500">
          Опубликовать
        </Button>
      </form>
    </Form>
  );
}
