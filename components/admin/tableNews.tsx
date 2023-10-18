import { ItemNewProps } from "@/app/api/posts/posts";
import ItemNew from "./itemNew";
import { useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

async function GetData(url: any) {
  const res = await fetch(url);

  return res.json();
}

export default async function TableNews() {
  const state = process.env.NODE_ENV;
  let url;
  if (state === "production") {
    url = "http://megatelnextjs.ru/api/posts";
  } else {
    url = "http://localhost:3000/api/posts";
  }

  const posts = await GetData(url);
  return (
    <div className="">
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
  );
}
