"use client";
import Image from "next/image";
import useDownloader from "react-use-downloader";
import NewPreview from "@/components/new-preview";
import { PostProps } from "@/app/api/posts/posts";

export default async function NewsPage() {
  //const posts = await GetPost();
  return (
    <main>
      <div className="mt-20">
        <div className="mb-5">
          <div className="container ">
            <div className="max-w-6xl">
              <div className="flex justify-start">
                <div className="text-6xl">Новости</div>
                <div>Все</div>
              </div>
              <div className=" text-2xl  mt-8">
                {/*{posts.map((post: PostProps) => (
                  <NewPreview key={post.post_id} params={post} />
                ))}*/}
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
