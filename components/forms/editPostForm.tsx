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
import { UpPost } from "../../app/actions/Post";

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
  description = description.toString().replaceAll("\r,", "\n");
  const [file, setFile] = useState<File>();
  const [date, setDate] = useState(date_of_public);
  const [head, setHead] = useState(title);
  const [desc, setDesc] = useState(description);
  const [isButton, setIsButton] = useState(false);
  const [images, setImages] = useState<
    UpdateResourseProps[] | CreateResourseProps[]
  >(resourses);

  const submit = false;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
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

  useEffect(() => {
    if (head.trim() != "" && desc.trim() != "" && date.trim() != "") {
      setIsButton(true);
    } else {
      setIsButton(false);
    }
  }, [head, desc, date, setDate, setHead, setDesc]);

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
                <Input
                  placeholder="Дата публикации"
                  {...field}
                  required
                  value={date}
                  onChange={(e) => {
                    setDate(e.currentTarget.value);
                  }}
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
                  required
                  {...field}
                  value={head}
                  onChange={(e) => {
                    setHead(e.currentTarget.value);
                  }}
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
                  className="min-h-[150px] max-h-[230px] "
                  {...field}
                  required
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.currentTarget.value);
                  }}
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
          disabled={!isButton}
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
