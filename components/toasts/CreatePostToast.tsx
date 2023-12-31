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
import { CreatePostForm } from "../forms/createPostForm";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export function CreatePostToast() {
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

          <CreatePostForm props={props} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
