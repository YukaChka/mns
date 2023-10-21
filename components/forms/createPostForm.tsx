"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

const FormSchema = z.object({
  datapublic: z.string(),
  title: z.string(),
  description: z.string(),
});
type ImageProps = {
  path: string;
  title: string;
};

function removeItem<T>(arr: Array<T>, value: T): Array<T> {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export function CreatePostForm() {
  const [file, setFile] = useState<File>();
  const [images, setImages] = useState(Array<ImageProps>);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      datapublic: "",
      title: "",
      description: "",
    },
  });

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

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
      <form onSubmit={onSubmit} className=" space-y-6">
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
          <FormLabel>Описание</FormLabel>
          <FormControl>
            <Textarea placeholder="Введите Текст" className="max-h-96" />
          </FormControl>
          <FormMessage />
        </div>
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

        <div>
          {images && (
            <div className="flex justify-center ">
              {images.map((img) => {
                console.log(img.path);
                return (
                  <>
                    <Image
                      key={img.path}
                      src={img.path}
                      alt={img.title}
                      className="pointer-events-none p-1   text-white"
                      height={100}
                      width={100}
                    />
                  </>
                );
              })}
            </div>
          )}
        </div>

        <Button type="submit">Опубликовать</Button>
      </form>
    </Form>
  );
}
