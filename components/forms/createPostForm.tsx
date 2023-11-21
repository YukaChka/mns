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
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  CreateResourseProps,
  ResourseProps,
  UpdateResourseProps,
} from "@/app/api/upload/route";

import { Loader2 } from "lucide-react";

import { ScrollBar, ScrollArea } from "../ui/scroll-area";
import { ResourceDialogDelete } from "../toasts/DeleteOrderResource";

import { AddPost } from "../actions/Post";

const FormSchema = z.object({
  date_of_public: z.string(),
  title: z.string(),
  description: z.string(),
});

export function CreatePostForm({
  props,
}: {
  props: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  };
}) {
  const [file, setFile] = useState<File>();

  const [images, setImages] = useState<
    CreateResourseProps[] | UpdateResourseProps[]
  >([]);

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
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getPath = async () => {
      const path = await Upload(file);
      if (path) {
        let name = path.path.split("/")[2];
        let [domen, dosc] = path.path.split("/");

        setImages([
          ...images,
          {
            path: `/${dosc}/${name}`,
            title: name,
          },
        ]);
      }
    };
    getPath();
  }, [file]);

  const addPost = AddPost.bind(null, images);

  return (
    <Form {...form}>
      <form action={addPost} className=" space-y-6">
        <FormField
          control={form.control}
          name="date_of_public"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Дата</FormLabel>
              <FormControl>
                <Input
                  placeholder="Дата публикации"
                  type="date"
                  {...field}
                  required
                  name="date_of_public"
                />
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
                <Input
                  placeholder="Введите Название"
                  {...field}
                  required
                  name="title"
                />
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
                  required
                  name="description"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormLabel>Загрузить фотографии</FormLabel>
        <FormControl>
          <Input
            type="file"
            onChange={(e) => {
              setFile(e.target.files?.[0]);
              e.currentTarget.value = "";
            }}
          />
        </FormControl>

        <div className="max-w-6xl">
          {images && (
            <div className="flex justify-center ">
              <ScrollArea
                className="w-96 whitespace-nowrap rounded-md border"
                type="always"
              >
                <ScrollBar
                  orientation="horizontal"
                  className="cursor-pointer"
                />
                <div className="flex w-max space-x-4 p-4">
                  {images.map((res) => (
                    <div
                      key={res.path}
                      className="overflow-hidden group  rounded-md flex p-1 justify-end items-center relative"
                    >
                      <Image
                        src={res.path}
                        alt={res.title}
                        className="aspect-[3/4] h-fit w-fit object-cover"
                        width={100}
                        height={100}
                      />
                      <ResourceDialogDelete
                        res={res}
                        setResource={setImages}
                        resource={images}
                      />
                    </div>
                  ))}
                </div>
                <ScrollBar
                  orientation="horizontal"
                  className="cursor-pointer"
                />
              </ScrollArea>
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
          <Button
            type="submit"
            onClick={() => {
              props.setOpen(false);
            }}
          >
            Опубликовать
          </Button>
        )}
      </form>
    </Form>
  );
}
