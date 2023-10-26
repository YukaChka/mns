import { PostProps } from "@/app/api/posts/posts";
import ItemNew from "./itemNew";
import { useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

async function GetPosts() {
  let url = process.env.NEXT_PUBLIC_BASE_URL;
  if (!url) {
    url = "https://megatelnextjs.ru/api/posts";
  } else {
    url = `${url}/api/posts`;
  }
  const res = await fetch(url);

  return res.json() as Promise<PostProps[]>;
}

export default async function TableNews() {
  const posts = await GetPosts();
  return (
    <div className="">
      {posts.map((post: PostProps) => (
        <div key={post.post_id} className="p-1">
          <ItemNew
            post_id={post.post_id}
            description={post.description}
            date_of_public={post.date_of_public}
            resourses={post.resourses}
            title={post.title}
          />
        </div>
      ))}
    </div>
  );
}
