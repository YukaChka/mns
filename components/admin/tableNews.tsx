import { ItemNewProps } from "@/app/api/posts/posts";
import ItemNew from "./itemNew";
import { useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

async function GetData() {
  const url = process.env.NEXTAUTH_URL_PUBLIC;

  const res = await fetch(`/api/posts/`);

  return res.json();
}

export default async function TableNews() {
  const posts = await GetData();
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
