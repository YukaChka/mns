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

export async function EditPostToast({
  id,
  title,
  datapublic,
  description,
  imgpaths,
}: ItemNewProps) {
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
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              <div>Редактировать новость</div>
            </DialogTitle>
          </DialogHeader>

          <div>
            <EditPostForm
              id={id}
              description={description}
              title={title}
              imgpaths={imgpaths}
              datapublic={datapublic}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
