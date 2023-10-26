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

import { PostProps } from "@/app/api/posts/posts";

import Image from "next/image";
import { EditPostForm } from "../forms/editPostForm";

export async function EditPostToast({
  post_id,
  title,
  date_of_public,
  description,
  resourses,
}: PostProps) {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild className="">
          <div className="hover:cursor-pointer ">
            <Button
              variant="default"
              size="sm"
              //className="mr-5 middle none  rounded-lg bg-[#009cf3] hover:bg-[#009cf3] py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-sm shadow-sky-100 transition-all hover:shadow-sm hover:shadow-sky-200 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:shadow-none"
              className=" bg-[#009cf3] mr-3  hover:shadow-[inset_0_-2px_4px_rgba(0,0.5,0.5,0.5)] hover:bg-[#009cf3] transition delay-[50] ease-in-out"
              data-ripple-light="true"
            >
              Редактировать
              <Image
                src="/img/Pen.svg"
                alt="qe"
                className="pointer-events-none p-1"
                height={23}
                width={23}
              />
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[825px]">
          <DialogHeader>
            <DialogTitle>
              <div>Редактировать новость</div>
            </DialogTitle>
          </DialogHeader>

          <div>
            <EditPostForm
              post_id={post_id}
              description={description}
              title={title}
              resourses={resourses}
              date_of_public={date_of_public}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
