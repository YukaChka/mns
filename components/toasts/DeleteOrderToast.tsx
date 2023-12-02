"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import Image from "next/image";
import { Button } from "../ui/button";
import { DeleteOrder } from "../actions/Order";

export function OrderDialogDelete({ id }: { id: number }) {
  const deleteOrder = DeleteOrder.bind(null, id);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="hover:cursor-pointer ">
          <Image
            src="/img/trash.png"
            alt="qe"
            className="pointer-events-none p-1 "
            height={23}
            width={23}
          />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Вы хотите удалить заказ?</AlertDialogTitle>
          <AlertDialogDescription>{id}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className=" hover:text-black">
            Отмена
          </AlertDialogCancel>
          <form action={deleteOrder}>
            <Button
              type="submit"
              className=" hover:bg-red-600 hover:text-white"
            >
              Подтвердить
            </Button>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
