"use client";

import { ItemNewProps } from "@/app/api/posts/posts";
import Link from "next/link";
import Image from "next/image";
type NewProps = {
  params: {
    id: string;
  };
};

async function GetPost(id: string) {
  let url = process.env.NEXT_PUBLIC_BASE_URL;
  if (!url) {
    url = `http://megatelnextjs.ru/api/posts?id=${id}`;
  } else {
    url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?id=${id}`;
  }

  const responce = await fetch(url);

  return responce.json() as Promise<ItemNewProps>;
}

export default async function New({ params }: NewProps) {
  const post = await GetPost(params.id);

  for (var i = 0; i < post.imgpaths.length; i++) {
    post.imgpaths[i].path = post.imgpaths[i].path.replace(/\/+/g, "/");
  }
  const CurrentDate = new Date(post.datapublic);
  const formatter = new Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const date = formatter.format(CurrentDate).split(" ");
  return (
    <main>
      <div className="mt-20">
        <div className="mb-5 ">
          <div className="flex container justify-center">
            <div className="max-w-6xl">
              <div className=" ">
                <Link href="/news" className="text-xl">
                {"<"} Новости
                
                </Link>
                 <div className="font-bold mt-2">
                  {date[0]}
                 </div>
              </div>
              <div className="font-bold text-2xl mt-2 text-center md:text-start">
                {post.title}
              </div>
              <div className=" text-xl mt-8 text-center md:text-start">
                {post.description}
              </div>
              <div className="flex justify-center p-9">
              {post.imgpaths.map((img) => (
          <div key={img.id}>
            <Image height={1000} width={1000} alt={img.title} src={img.path} />
          </div>
             ))}
              </div>
            </div>
          </div>
        </div>
        <div></div>
    </div>


      


    </main>
  );
}