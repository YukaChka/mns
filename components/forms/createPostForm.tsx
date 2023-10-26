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
import Image, { ImageProps } from "next/image";
import { FormEvent, use, useEffect, useState } from "react";
import Link from "next/link";
import { CreateResourseProps, ResourseProps } from "@/app/api/upload/route";
import { CreatePostProps, PostProps } from "@/app/api/posts/posts";
import { Loader2 } from "lucide-react";
import { ResourceScroll } from "../admin/resourceScroll";

const FormSchema = z.object({
  date_of_public: z.string(),
  title: z.string(),
  description: z.string(),
});

export function CreatePostForm() {
  const [file, setFile] = useState<File>();
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState(Array<CreateResourseProps>);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      date_of_public: "",
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

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return;
    const post: CreatePostProps = {
      date_of_public: data.date_of_public,
      description: data.description,
      title: data.title,
      resourses: images,
    };

    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(post),
    });
  }

  useEffect(() => {
    const getPath = async () => {
      const path = await Upload(file);
      if (path) {
        let name = path.path.split("/")[2];
        let [domen, dosc] = path.path.split("/");

        setImages([...images, { path: `/${dosc}/${name}`, title: name }]);
      }
    };
    getPath();
  }, [file]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
        <FormField
          control={form.control}
          name="date_of_public"
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
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Введите Текст"
                  {...field}
                  className="max-h-56"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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

        <div className="max-w-6xl">
          {images && (
            <div className="flex justify-center ">
              <ResourceScroll resource={images} />
            </div>
          )}
        </div>
        {isLoading ? (
          <Button disabled>
            <>
              <Loader2 className="h-4 w-4 animate-spin justify-center" />
            </>
          </Button>
        ) : (
          <Button type="submit">Опубликовать</Button>
        )}
      </form>
    </Form>
  );
}
