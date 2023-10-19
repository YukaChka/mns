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

export function AlertDialogDelete() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size="sm"
          className="bg-[#d9d9d9] text-black hover:bg-red-600 hover:text-white transition delay-[1] ease-in-out "
        >
          Удалить
          <Image
            src="/img/Delet.svg"
            alt="qe"
            className="pointer-events-none p-1"
            height={25}
            width={25}
          />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Вы хотите удалить новость?</AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:bg-red-600 hover:text-white">
            Отмена
          </AlertDialogCancel>
          <AlertDialogAction className="hover:bg-green-600 hover:text-white">
            Подтвердить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}