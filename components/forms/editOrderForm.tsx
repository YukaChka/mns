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

import { OrderProps } from "@/app/api/orders/orders";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  CreateResourseProps,
  ResourseProps,
  UpdateResourseProps,
} from "@/app/api/upload/route";
import { ScrollBar, ScrollArea } from "../ui/scroll-area";
import { ResourceDialogDelete } from "../toasts/DeleteOrderResource";
import { UpdateOrder } from "../actions/Order";

import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UserData } from "@/app/api/user/user";

const FormSchema = z.object({
  date_of_delivery: z.string(),
  quantity_ports: z.number(),
  module: z.string(),
  station: z.string().optional(),
  type_delivery: z.string(),
  user: z.string(),
});

export function EditOrderForm({
  order: {
    date_of_delivery,
    quantity_ports,
    module,
    station,
    type_delivery,
    resourses,
    order_id,
    user_id,
  },
  props,
}: {
  order: OrderProps;
  props: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  };
}) {
  const [file, setFile] = useState<File>();

  const [images, setImages] = useState<
    CreateResourseProps[] | UpdateResourseProps[]
  >(resourses);
  const [date, setDate] = useState(date_of_delivery);
  const [ports, setPorts] = useState(quantity_ports);
  const [mod, setModule] = useState(module);
  const [st, setStation] = useState(station);
  const [type, setType] = useState(type_delivery);
  const [users, setUsers] = useState<UserData[]>([]);
  const [selectUser, setSelectUser] = useState<UserData | null>(null);
  const [isButton, setIsButton] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const curOrder: OrderProps = {
    order_id,
    date_of_delivery,
    quantity_ports,
    module,
    station,
    type_delivery,
    user_id: user_id,
    resourses,
  };

  curOrder.module = curOrder.module.toString();
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

  useEffect(() => {
    const getUsers = async () => {
      const res = await GetEmails();
      if (res) {
        setUsers(res);
        let user =
          res.find(({ user_id }) => user_id === curOrder.user_id) ?? null;

        setSelectUser(user);

        form.setValue("user", user?.email ?? "");
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    if (
      date.trim() != "" &&
      mod != "" &&
      type.trim() != "" &&
      mod.length <= 200 &&
      selectUser?.email
    ) {
      setIsButton(true);
    } else {
      setIsButton(false);
    }
  }, [
    date,
    ports,
    mod,
    st,
    type,
    selectUser,
    setDate,
    setPorts,
    setModule,
    setStation,
    setType,
    setSelectUser,
  ]);

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

  async function GetEmails() {
    let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`);
    return res.json() as Promise<UserData[]>;
  }
  const upOrder = UpdateOrder.bind(
    null,
    order_id,
    selectUser,
    images,
    curOrder
  );
  return (
    <Form {...form}>
      <form action={upOrder} className=" grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="date_of_delivery"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Дата Поставки</FormLabel>
              <FormControl>
                <Input
                  placeholder="Дата публикации"
                  {...field}
                  required
                  defaultValue={date}
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
                    value={mod}
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
          <FormField
            control={form.control}
            name="user"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Выберите Пользователя</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        name="user"
                        className={cn(
                          "min-w-full max-h-24",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? users.find((user) => user.email === field.value)
                              ?.email
                          : "Выберите Пользователя"}
                        <ChevronsUpDown className="shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="p-0">
                    <Command>
                      <CommandInput placeholder="Введите Почту..." />
                      <CommandEmpty>Такого Пользователя Нет</CommandEmpty>
                      <CommandGroup>
                        {users.map((user) => (
                          <CommandItem
                            value={user.email}
                            key={user.user_id}
                            onSelect={() => {
                              form.setValue("user", user.email);
                              setSelectUser(user);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                user.email === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {user.email}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
        </div>

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
            onClick={() => {
              props.setOpen(false);
            }}
            className="hover:bg-green-500"
          >
            Редактировать
          </Button>
        </div>
      </form>
    </Form>
  );
}
