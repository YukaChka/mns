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
import { EditOrderForm } from "@/components/forms/editOrderForm";

export async function EditOrderToast({ order }: { order: OrderProps }) {
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
              <div>Редактировать заказ</div>
            </DialogTitle>
          </DialogHeader>
          <div>
            <EditOrderForm order={order} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
