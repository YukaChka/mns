"use client";

import { PostProps } from "@/app/api/posts/posts";
import { Button } from "../ui/button";
import Image from "next/image";

import { EditPostToast } from "../toasts/EditPostToast";
import { PostDialogDelete } from "../toasts/DeletePostToast";

export default function ItemNew({
  post_id,
  title,
  date_of_public,
  description,
  resourses,
}: PostProps) {
  return (
    <section className="rounded-md border px-3 py-2 ">
      <div className="">
        <div>
          <a className="font-semibold pr-2">{title}</a>
          <a className="font-normal">{/*дата */}</a>
        </div>
        <div className="  md:grid-cols-2">
          <div>{description}</div>
          <div className="flex justify-center p-5 ">{/*картинки */}</div>
        </div>
      </div>
      <div className=" flex ">
        <EditPostToast
          post_id={post_id}
          description={description}
          title={title}
          date_of_public={date_of_public}
          resourses={resourses}
        />
        <PostDialogDelete id={post_id} />
      </div>
    </section>
  );
}
