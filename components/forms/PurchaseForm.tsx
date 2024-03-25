"use client";
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
import { useSession } from "next-auth/react";
import { useToast } from "../ui/use-toast";
import { Textarea } from "../ui/textarea";
import { useEffect } from "react";

const FormSchema = z.object({
  email: z.string(),
  phone: z.string(),
  firstName: z.string(),
  surName: z.string(),
  position: z.string(),
  company: z.string(),
  comments: z.string(),
});

export function PurchaseForm() {
  const { data: session } = useSession();
  const user = session?.user;
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
      email: "",
      firstName: "",
      surName: "",
      position: "",
      company: "",
      comments: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (
      data.phone === "" ||
      data.email === "" ||
      data.firstName === "" ||
      data.surName === "" ||
      data.position === "" ||
      data.company === "" ||
      data.comments === ""
    ) {
      toast({
        variant: "destructive",
        title: "Ошибка при заполнение формы",
        description: "Все поля обязательны к заполению",
      });
    } else {
      toast({
        variant: "access",
        title: "Заявка отправлена",
      });
      form.reset();
    }
  }

  useEffect(() => {
    if (!user) {
      return;
    }
    let { email, firstName, surName } = form.getValues();
    if (
      email == user.email ||
      surName == user.last_name ||
      firstName == user.first_name
    ) {
      return;
    }
    form.setValue("email", user.email);
    form.setValue("firstName", user.first_name);
    form.setValue("surName", user.last_name);
  }, []);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid  grid-cols-2 grid-rows-7 gap-5 w-full max-w-6xl  "
        >
          <div className="row-start-1">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Телефон"
                      required
                      className=""
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="row-start-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      className=""
                      type="email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="row-start-3">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Имя" className="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="row-start-4">
            <FormField
              control={form.control}
              name="surName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Фамилия" className="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="row-start-5">
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Должность" className="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="row-start-6">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Компания" className="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="col-start-2  row-start-1 row-end-7">
            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                    <Textarea
                      placeholder="Опишите проблему"
                      className="min-h-[340px] resize-none"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <Button
            variant="outline"
            type="submit"
            className="bg-white border-solid border-2 w-full text-[25px] font-bold  col-span-2 text-black hover:bg-[#009cf3] hover:text-white"
          >
            Отправить
          </Button>
        </form>
      </Form>
    </>
  );
}
