"use client";
import Image from "next/image";
import useDownloader from "react-use-downloader";
import { UploadForm } from "@/components/forms/UploadForm";
import NewPreview from "@/components/new-preview";
import { ItemNewProps } from "@/app/api/posts/posts";
import { SupportForm } from "@/components/support";
import { useEffect, useState } from "react";
import { isAsync } from "zod";
async function getpost() {
  let url = process.env.NEXT_PUBLIC_BASE_URL;
  if (!url) {
    url = "http://megatelnextjs.ru/api/posts";
  } else {
    url = ${url}/api/posts;
  }
  const res = await fetch(url);

  return res.json() as Promise<ItemNewProps[]>;
}
export default async function NewsPage() {
  const posts = await getpost()
  return (
    <main>
      <div className="mt-20">
        <div className="mb-5 ">
          <div className="flex container justify-center">
            <div className="max-w-6xl">
              <div className=" text-2xl  mt-8">
                {posts.map}
               <NewPreview />
              </div>
            </div>
          </div>
        </div>
        <div>
      </div>
    </div>
    </main>
  );
}
