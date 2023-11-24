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

import Image from "next/image";

import { OrderProps } from "@/app/api/orders/orders";
import { EditOrderForm } from "@/components/forms/editOrderForm";
import { useMemo, useState } from "react";

export function EditOrderToast({ order }: { order: OrderProps }) {
  const [open, setOpen] = useState(false);

  const props = useMemo(
    () => ({
      setOpen,
      open,
    }),
    [open]
  );
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
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
            <EditOrderForm order={order} props={props} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
