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
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { Textarea } from "../ui/textarea";

const FormSchema = z.object({
  email: z.string().min(1, {
    message: "Поле не может быть пустым",
  }),
  phone: z.string().min(1, {
    message: "Поле не может быть пустым",
  }),
  Name: z.string().min(1, {
    message: "Поле не может быть пустым",
  }),
  surname: z.string().min(1, {
    message: "Поле не может быть пустым",
  }),
  position: z.string().min(1, {
    message: "Поле не может быть пустым",
  }),
  company: z.string().min(1, {
    message: "Поле не может быть пустым",
  }),
  comments: z.string().min(1, {
    message: "Поле не может быть пустым",
  }),
});

export function PurchaseForm() {
  const router = useRouter();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/account";
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
      email: "",
      surname: "",
      position: "",
      company: "",
      comments: "",
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const res = await signIn("credentials", {
      email: data.email,
      phone: data.phone,
      redirect: false,
      callbackUrl,
    });

    if (!res?.ok) {
      toast({
        variant: "destructive",
        title: res?.status.toString(),
        description: res?.error,
      });
      form.setValue("email", "");
      form.setValue("phone", "");
      form.setValue("surname", "");
      form.setValue("position", "");
      form.setValue("company", "");
      form.setValue("comments", "");
    }
    if (!res?.error) {
      router.push(callbackUrl);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} >
        <div className=" grid grid-cols-2">
        <div className="mr-2">
      <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="mb-2" placeholder="Телефон" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="mb-2" placeholder="Почта" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="surname"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="mb-2" placeholder="Фамилия" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="mb-2" placeholder="Должность" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="mb-2" placeholder="Компания" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div>
        <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                    <Textarea
                      placeholder="Опишите проблему"
                      className="min-h-[232px]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
        </div>
        </div>
        <Button className="w-[100%] bg-white text-black outline outline-1  outline-offset-1 hover:bg-white"  type="submit">Отправить</Button>
      </form>
    </Form>
  );
}
