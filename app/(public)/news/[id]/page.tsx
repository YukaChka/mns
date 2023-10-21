"use client";

import { ItemNewProps } from "@/app/api/posts/posts";
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

  return (
    <>
      <p>
        {post.imgpaths.map((img) => (
          <div key={img.id}>
            <Image height={100} width={100} alt={img.title} src={img.path} />
          </div>
        ))}
      </p>
    </>
  );
}
