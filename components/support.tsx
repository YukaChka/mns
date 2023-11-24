"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";
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
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const FormSchema = z.object({
  phone: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  description: z.string(),
});

export function SupportForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const onSubmit = (values: z.infer<typeof FormSchema>) => {};

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid  grid-cols-2 grid-rows-5 gap-5 w-full max-w-6xl mb-[100px] "
        >
          <div className="row-start-1">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Телефон" className="" {...field} />
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
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Фамилия" className="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="col-start-2  row-start-1 row-end-5">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                    <Textarea
                      placeholder="Опишите проблему"
                      className="min-h-[220px] resize-none"
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
