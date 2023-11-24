"use client";
import { PostProps } from "@/app/api/posts/posts";
import ItemNew from "./itemNew";
import { ServiceResponce } from "@/lib/db";
import { useEffect, useMemo, useState } from "react";

async function GetPosts() {
  let url = "http://localhost:3000/api/posts?";
  const res = await fetch(url, {
    next: {
      revalidate: 10,
    },
  });
  return res.json() as Promise<PostProps[]>;
}

export default function TableNews({ posts }: { posts: PostProps[] }) {
  //const posts: PostProps[] = await GetPosts();

  return <div></div>;
}
