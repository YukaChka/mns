"use server";

import { CreatePostProps, PostProps, UpdatePostProps } from "@/app/api/posts/posts";
import { CreateResourseProps, ResourseProps, UpdateResourseProps } from "@/app/api/upload/route";
import { revalidatePath } from "next/cache";
import { Dispatch, SetStateAction } from "react";
import { toast } from "../ui/use-toast";


export async function AddPost(images:CreateResourseProps[]|UpdateResourseProps[], data: FormData) {
    
    const post: CreatePostProps = {
      date_of_public: data.get("date_of_public") as string,
      description: data.get("description") as string,
      title: data.get("title") as string,
      resourses: images as CreateResourseProps[],
    };

    

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
      method: "POST",
      
      body: JSON.stringify(post),
    });

    revalidatePath("/posts");
    
  }

export async function UpPost(post_id:number,images:UpdateResourseProps[],curPost:PostProps, data: FormData) {
    

  let isEdit=1;
    const post: UpdatePostProps  = {
      post_id:post_id,
      date_of_public: data.get("date_of_public")?.toString().trim() as string,
      description: data.get("description")?.toString().replaceAll("\r",'').trim() as string,
      title: data.get("title")?.toString().trim() as string,
      resourses: images,
    };

    if(post.date_of_public==null || post.description ==null || post.title == null) return;
    
    
    
    console.log(JSON.stringify(post) == JSON.stringify(curPost))
    if(JSON.stringify(post) == JSON.stringify(curPost)) return;

    
    
    const body:{
      post:UpdatePostProps,
      isEdit:number
    } ={
      post,
      isEdit
    }
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    
    
    
    
    
    revalidatePath("/posts");
    
  }


  
export async function DeletePost(id:number) {
  console.log("1")
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?id=${id}`,
      {
        method: "delete",
      }
    );

    revalidatePath("/posts");
  }
