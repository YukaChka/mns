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
import { PostProps } from "@/app/api/posts/posts";
import { OrderProps } from "@/app/api/orders/orders";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ScrollBar, ScrollArea } from "../ui/scroll-area";
import { ResourceDialogDelete } from "../toasts/DeleteOrderResource";
import { AddOrder } from "../actions/Order";
import {
  CreateResourseProps,
  UpdateResourseProps,
} from "@/app/api/upload/route";

const FormSchema = z.object({
  date_of_delivery: z.string(),
  quantity_ports: z.string(),
  module: z.string(),
  station: z.string().optional(),
  type_delivery: z.string(),
});

export function CreateOrderForm({
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
  const [date, setDate] = useState("");
  const [ports, setPorts] = useState(0);
  const [module, setModule] = useState("");
  const [type, setType] = useState("");
  const [isButton, setIsButton] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      date_of_delivery: "",
      quantity_ports: "",
      module: "",
      station: "",
      type_delivery: "",
    },
  });

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

  useEffect(() => {
    if (date != "" && module != "" && type != "" && module.length <= 150) {
      setIsButton(true);
    } else {
      setIsButton(false);
    }
  }, [date, ports, module, type, setDate, setPorts, setModule, setType]);

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
  const addOrder = AddOrder.bind(null, images);
  return (
    <Form {...form}>
      <form action={addOrder} className=" grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="date_of_delivery"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Дата Поставки</FormLabel>
              <FormControl>
                <Input
                  placeholder="Дата публикации"
                  type="date"
                  {...field}
                  required
                  value={date}
                  onChange={(e) => {
                    setDate(e.currentTarget.value);
                  }}
                  name="date_of_delivery"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity_ports"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Количество Портов</FormLabel>
              <FormControl>
                <Input
                  placeholder="Введите Количество"
                  type="number"
                  required
                  {...field}
                  value={ports}
                  min={0}
                  onChange={(e) => {
                    setPorts(parseInt(e.currentTarget.value));
                  }}
                  name="quantity_ports"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-2">
          <FormField
            control={form.control}
            name="module"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Модули</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Введите Модули"
                    className="min-w-min max-h-40"
                    {...field}
                    name="module"
                    required
                    value={module}
                    onChange={(e) => {
                      setModule(e.currentTarget.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="station"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Станция</FormLabel>
              <FormControl>
                <Input
                  placeholder="Введите Станцию"
                  className="min-w-min max-h-96"
                  {...field}
                  name="station"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type_delivery"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Тип Поставки</FormLabel>
              <FormControl>
                <Input
                  placeholder="Введите Тип Поставки"
                  className="min-w-min max-h-24"
                  {...field}
                  name="type_delivery"
                  value={type}
                  onChange={(e) => {
                    setType(e.currentTarget.value);
                  }}
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="col-span-2">
          <FormLabel>Загрузить Документы</FormLabel>
          <FormControl>
            <Input
              className="hover:cursor-pointer"
              type="file"
              onChange={(e) => {
                setFile(e.target.files?.[0]);
                e.currentTarget.value = "";
              }}
            />
          </FormControl>
          <FormMessage />
        </div>
        <div className="max-w-6xl col-span-2">
          {images.length != 0 && (
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
        <div className="col-span-2">
          <Button
            type="submit"
            disabled={!isButton}
            onClick={() => props.setOpen(false)}
            className="hover:bg-green-500"
          >
            Добавить
          </Button>
        </div>
      </form>
    </Form>
  );
}
