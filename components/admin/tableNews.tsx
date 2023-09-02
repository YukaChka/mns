import { ItemNewProps } from "@/app/api/posts/posts";
import ItemNew from "./itemNew";
import { useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

async function GetData() {
  const res = await fetch("http://localhost:3000/api/posts");

  return res.json();
}

export default async function TableNews() {
  const posts = await GetData();
  return (
    <div>
      {posts.map((post: ItemNewProps) => (
        <div key={post.id}>
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