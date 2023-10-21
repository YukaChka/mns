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
import { OrderProps } from "@/app/api/order/order";
import { useEffect, useState } from "react";

const FormSchema = z.object({
  data_delivery: z.string().min(1, {
    message: "Поле не должно быть пустым",
  }),
  quantity_ports: z.string().min(1, {
    message: "Поле не должно быть пустым",
  }),
  module: z.string().min(1, {
    message: "Поле не должно быть пустым",
  }),
  station: z.string().optional(),
  delivery_type: z.string().min(1, {
    message: "Поле не должно быть пустым",
  }),
});

type ImageProps = {
  path: string;
  title: string;
};

export function EditOrderForm({
  order: { data_delivery, quantity_ports, module, station, delivery_type },
}: {
  order: OrderProps;
}) {
  const [file, setFile] = useState<File>();
  const [images, setImages] = useState(Array<ImageProps>);
  const CurrentDate = new Date(data_delivery);
  const formatter = new Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      data_delivery: formatter.format(CurrentDate).split(" ")[0].toString(),
      quantity_ports: quantity_ports.toString(),
      module: module,
      station: station || undefined,
      delivery_type: delivery_type,
    },
  });

  useEffect(() => {
    const getPath = async () => {
      const path = await Upload(file);
      if (path) {
        let url = path.path.replace(
          "public",
          `${process.env.NEXT_PUBLIC_BASE_URL}`
        );
        let name = path.path.split("/")[2];

        setImages([...images, { path: url, title: name }]);
      }
    };
    getPath();
  }, [file]);

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

  async function onSubmit(data: z.infer<typeof FormSchema>) {}
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" grid grid-cols-2 gap-4"
      >
        <FormField
          control={form.control}
          name="data_delivery"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Дата Поставки</FormLabel>
              <FormControl>
                <Input placeholder="Дата Поставки" {...field} />
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
                <Input placeholder="Введите Количество" {...field} />
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
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="delivery_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Тип Поставки</FormLabel>
              <FormControl>
                <Input
                  placeholder="Введите Тип Поставки"
                  className="min-w-min max-h-24"
                  {...field}
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
              }}
            />
          </FormControl>
          <FormMessage />
        </div>
        <div className="col-span-2">
          {images && (
            <div className="flex justify-start ">
              {images.map((img) => (
                <div key={img.title}>
                  <Image
                    src={img.path}
                    alt={img.title}
                    className="p-1 hover:bg-no-repeat hover:brightness-200 hover:cursor-pointer"
                    height={100}
                    width={100}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-span-2">
          <Button type="submit" className="hover:bg-green-500">
            Редактировать
          </Button>
        </div>
      </form>
    </Form>
  );
}
