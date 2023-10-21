"use client";

import { ItemNewProps } from "@/app/api/posts/posts";

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

  console.log(post);
  return (
    <>
      <p>{params.id}</p>
    </>
  );
}
