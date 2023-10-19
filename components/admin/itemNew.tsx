"use client";

import { ItemNewImagesProps } from "@/app/api/posts/posts";
import { Button } from "../ui/button";
import Image from "next/image";

import { EditPostToast } from "../toasts/EditPostToast";
import { AlertDialogDelete } from "../toasts/deletePostToast";

interface ItemNewProps {
  id: number;
  title: string;
  datapublic: string;
  description: string;
  imgpaths: Array<ItemNewImagesProps>;
}

export default function ItemNew({
  id,
  title,
  datapublic,
  description,
  imgpaths,
}: ItemNewProps) {
  console.log(datapublic);
  const CurrentDate = new Date(datapublic);
  const formatter = new Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const date = formatter.format(CurrentDate).split(" ");

  for (var i = 0; i < imgpaths.length; i++) {
    imgpaths[i].path = imgpaths[i].path.replace(/\/+/g, "/");
  }

  return (
    <section className="rounded-md border px-3 py-2 ">
      <div className="">
        <div>
          <a className="font-semibold pr-2">{title}</a>
          <a className="font-normal">{date[0]}</a>
        </div>
        <div className="  md:grid-cols-2">
          <div>{description}</div>
          <div className="flex justify-center p-5 ">
            {imgpaths[0] && (
              <Image
                src={imgpaths[0].path}
                alt=""
                className="pointer-events-none p-1 "
                height={150}
                width={150}
              />
            )}
            {imgpaths[1] && (
              <Image
                src={imgpaths[1].path}
                alt="qe"
                className="pointer-events-none p-1"
                height={150}
                width={150}
              />
            )}
          </div>
        </div>
      </div>
      <div className=" flex ">
        <EditPostToast
          id={id}
          description={description}
          title={title}
          datapublic={date[0]}
          imgpaths={imgpaths}
        />
        <AlertDialogDelete id={id} />
      </div>
    </section>
  );
}
