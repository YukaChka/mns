"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { PostProps } from "@/app/api/posts/posts";
import { Dispatch, SetStateAction, useState } from "react";
import { CreatePostForm } from "../forms/createPostForm";
import Image from "next/image";

export async function CreatePostToast() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild className="">
          <div className="hover:cursor-pointer ">
            <div>
              <Button
                variant="default"
                size="sm"
                className=" bg-[#009cf3] mr-3  hover:shadow-[inset_0_-2px_4px_rgba(0,0.5,0.5,0.5)] hover:bg-[#009cf3] transition delay-[50] ease-in-out"
                data-ripple-light="true"
              >
                Добавить новость
                <Image
                  src="/img/addnews.svg"
                  alt="qe"
                  className="pointer-events-none p-1 "
                  height={23}
                  width={23}
                />
              </Button>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>
              <div>Добавить новость</div>
            </DialogTitle>
          </DialogHeader>

          <div>
            <CreatePostForm />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
