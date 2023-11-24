import { PostProps } from "@/app/api/posts/posts";
import { da } from "date-fns/locale";
import Link from "next/link";

export default function NewPreview({ post }: { post: PostProps }) {
  const ROUTE_POST_ID = `news/${post.post_id}`;

  const formatter = new Intl.DateTimeFormat("ru-RU", {
    month: "long",
    day: "numeric",
  });
  const date_of_public = post.date_of_public.split(".");
  const date = formatter
    .format(
      new Date(`${date_of_public[2]}-${date_of_public[1]}-${date_of_public[0]}`)
    )
    .split(" ");
  return (
    <>
      <div className="containerNews mb-14">
        <div className="">
          <div className=" text-6xl lg:text-9xl font-bold  container flex justify-center">
            {date[0]}
          </div>

          <div className="text-lg lg:text-3xl mx-auto">{date[1]}</div>
        </div>

        <div>
          <div className="ml-11 font-bold text-[20px] lg:text-[30px] ">
            {post.title}
          </div>
          <div className="ml-11 text-[15px] lg:text-[20px] ">
            {post.description[0]}
            <span className="font-bold nobr text-[15px] lg:text-[20px]">
              <Link href={ROUTE_POST_ID}> Подробнее...</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
