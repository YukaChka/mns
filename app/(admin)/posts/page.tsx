import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TableNews from "@/components/admin/tableNews";
import Link from "next/link";
import { useState } from "react";
import { CreatePostToast } from "@/components/toasts/CreatePostToast";
import { ItemNewProps } from "@/app/api/posts/posts";
import ItemNew from "@/components/admin/itemNew";

async function GetData() {
  let url = process.env.NEXT_PUBLIC_BASE_URL;
  if (!url) {
    url = "https://megatelnextjs.ru/api/posts";
  } else {
    url = `${url}/api/posts`;
  }
  const res = await fetch(url);

  return res.json() as Promise<ItemNewProps[]>;
}

export default async function AdminNewsPage() {
  const posts = await GetData();
  return (
    <div>
      <div>
        <div className="mb-3 mt-10 ">
          <div className="flex p-1 justify-end items-center relative">
            <Input
              type="search"
              id="default-search"
              className="border  p-4 w-full relative m-0 block  min-w-0 flex-auto rounded  border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out   "
              placeholder="Поиск"
              aria-label="Search"
              aria-describedby="button-addon2"
              required
            />
            <Image
              src="/img/lupa.svg"
              className="absolute mr-3"
              alt="Search Icon"
              width={25}
              height={25}
            />
          </div>

          <div className=" flex p-1">
            <CreatePostToast />
          </div>
        </div>
      </div>
      <div>
        {posts.map((post: ItemNewProps) => (
          <div key={post.id} className="p-1">
            <ItemNew
              id={post.id}
              description={post.description}
              datapublic={post.datapublic}
              imgpaths={post.imgpaths}
              title={post.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
