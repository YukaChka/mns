"use client";

import { Button } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { ItemNewProps } from "@/app/api/posts/posts";

import Image from "next/image";
import { EditPostForm } from "../forms/editPostForm";
import { OrderProps } from "@/app/api/order/order";

export async function EditOrderToast() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild className="">
          <div className="hover:cursor-pointer ">
            <Image
              src="/img/Vector.png"
              alt="qe"
              className="pointer-events-none p-1 "
              height={23}
              width={23}
            />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              <div>Редактировать новость</div>
            </DialogTitle>
          </DialogHeader>
          <div></div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
