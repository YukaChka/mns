import { GetPosts, ItemNewProps } from "@/app/api/posts/posts";
import ItemNew from "./itemNew";
import { useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export default async function TableNews() {
  const posts = await GetPosts();
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
