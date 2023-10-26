"use client";

import { PostProps } from "@/app/api/posts/posts";
import Link from "next/link";
import Image from "next/image";

type NewProps = {
  params: {
    id: string;
  };
};

export default async function New({ params }: NewProps) {
  //const post = await GetPost(params.id);

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
                <div className="font-bold mt-2">{/*дата*/}</div>
              </div>
              <div className="font-bold text-2xl mt-2 text-center md:text-start">
                {/*название */}
              </div>
              <div className=" text-xl mt-8 text-center md:text-start">
                {/* {post.description.map((str) => (
                  <p className="mt-5" key={str}>
                    {str}
                  </p>
                ))}*/}
              </div>
              <div className="flex justify-center p-9">{/*картинки*/}</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
