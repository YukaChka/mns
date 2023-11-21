import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  CreateResourseProps,
  ResourseProps,
  UpdateResourseProps,
} from "@/app/api/upload/route";
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
import { PostProps } from "@/app/api/posts/posts";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { ResourceDialogDelete } from "../toasts/DeleteOrderResource";
import { UpPost } from "../actions/Post";

const FormSchema = z.object({
  date_of_public: z.string(),
  title: z.string(),
  description: z.string(),
});

export function EditPostForm({
  props: { setOpen, open },
  post: { resourses, title, date_of_public, description, post_id },
}: {
  props: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  };
  post: PostProps;
}) {
  const [file, setFile] = useState<File>();
  const [isEdit, setIsEdit] = useState(0);
  const [images, setImages] = useState<
    UpdateResourseProps[] | CreateResourseProps[]
  >(resourses);
  description = description.toString().replaceAll("\r,", "\n");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      date_of_public: date_of_public,
      title: title,
      description: description,
    },
  });
  let curPost: PostProps = {
    post_id,
    date_of_public,
    description,
    title,
    resourses,
  };
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
        if (resourses) {
          setImages([
            ...images,
            {
              path: `/${dosc}/${name}`,
              title: name,
            },
          ]);
        }
      }
    };

    getPath();
  }, [file, setFile]);

  const upPost = UpPost.bind(null, post_id, images, curPost);

  return (
    <Form {...form}>
      <form className=" space-y-6" action={upPost}>
        <FormField
          control={form.control}
          name="date_of_public"
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
                  className="min-h-[150px] max-h-[230px] "
                  {...field}
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

        <Button
          type="submit"
          className="hover:bg-green-500"
          onClick={() => {
            setOpen(false);
          }}
        >
          Опубликовать
        </Button>
      </form>
    </Form>
  );
}
