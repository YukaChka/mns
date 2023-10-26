import { PostProps } from "@/app/api/posts/posts";
import { CreateResourseProps } from "@/app/api/upload/route";
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
import { Dispatch, SetStateAction } from "react";

export function ResourceDialogDelete({
  res,
  resource,
  setResource,
}: {
  res: CreateResourseProps;
  resource: Array<CreateResourseProps>;
  setResource: Dispatch<SetStateAction<Array<CreateResourseProps>>>;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="hover:cursor-pointer ">
          <Image
            src="/img/trash.svg"
            className="absolute top-1/2 left-1/2 cursor-pointer  opacity-0 ease-in duration-300 group-hover:opacity-100  transform -translate-x-1/2 -translate-y-1/2"
            alt="1"
            width={55}
            height={55}
          />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Вы хотите удалить заказ?</AlertDialogTitle>
          <AlertDialogDescription>{res.title}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className=" hover:text-black">
            Отмена
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              var index = resource.indexOf(res);
              if (index !== -1) {
                setResource(resource.filter((i) => i.title !== res.title));
              }
            }}
            className=" hover:bg-red-600 hover:text-white"
          >
            Подтвердить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
