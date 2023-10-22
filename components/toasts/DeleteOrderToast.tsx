import { PostProps } from "@/app/api/posts/posts";
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
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function OrderDialogDelete({ id }: { id: number }) {
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
          <AlertDialogAction className=" hover:bg-red-600 hover:text-white">
            Подтвердить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
