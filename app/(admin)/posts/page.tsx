import Image from "next/image";
import { Input } from "@/components/ui/input";

import { CreatePostToast } from "@/components/toasts/CreatePostToast";
import { PostProps } from "@/app/api/posts/posts";
import TableNews from "@/components/admin/tableNews";
import ItemNew from "@/components/admin/itemNew";

async function GetPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    cache: "default",
  });
  return res.json() as Promise<PostProps[]>;
}

export default async function AdminNewsPage() {
  const posts = await GetPosts();

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
      <ul>
        {posts &&
          posts.map((post, index) => (
            <li key={Date.now()}>
              <ItemNew post={post} />
            </li>
          ))}
      </ul>
    </div>
  );
}
