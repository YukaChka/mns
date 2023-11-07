"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";

import { CreatePostToast } from "@/components/toasts/CreatePostToast";
import { PostProps } from "@/app/api/posts/posts";
import TableNews from "@/components/admin/tableNews";
import ItemNew from "@/components/admin/itemNew";
import { useCallback, useEffect, useState } from "react";

async function GetPosts() {
  let url = "http://localhost:3000/api/posts?";
  const res = await fetch(url, {
    next: {
      revalidate: 10,
    },
  });
  return res.json() as Promise<PostProps[]>;
}

export default function AdminNewsPage() {
  const [posts, setPosts] = useState<Array<PostProps>>([]);

  const fetchData = async () => {
    const data = await GetPosts();
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        {posts &&
          posts.map((post) => (
            <div key={post.post_id}>
              <ItemNew
                title={post.title}
                post_id={post.post_id}
                description={post.description}
                date_of_public={post.date_of_public}
                resourses={post.resourses}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
