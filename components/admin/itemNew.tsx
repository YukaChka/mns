import { PostProps } from "@/app/api/posts/posts";
import { Button } from "../ui/button";
import Image from "next/image";

import { EditPostToast } from "../toasts/EditPostToast";
import { PostDialogDelete } from "../toasts/DeletePostToast";

export default function ItemNew({
  post: { post_id, title, date_of_public, description, resourses },
}: {
  post: PostProps;
}) {
  let post = { post_id, title, date_of_public, description, resourses };

  return (
    <div className="rounded-md border px-3 py-2 ">
      <div className="">
        <div>
          <a className="font-semibold pr-2">{title}</a>
          <a className="font-normal">{date_of_public}</a>
        </div>
        <div className="  md:grid-cols-2">
          <div>{description}</div>
          <div className="flex justify-start p-5 ">
            {resourses && (
              <>
                {resourses.map((res) => (
                  <div key={res.resourse_id}>
                    <Image
                      src={res.path}
                      alt={res.title}
                      className="pointer-events-none p-1 "
                      height={150}
                      width={150}
                    />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <div className=" flex ">
        <EditPostToast post={post} />
        <PostDialogDelete id={post_id} />
      </div>
    </div>
  );
}
