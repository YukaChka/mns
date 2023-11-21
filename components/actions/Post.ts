"use server";

import { CreatePostProps, PostProps, UpdatePostProps } from "@/app/api/posts/posts";
import { CreateResourseProps, ResourseProps, UpdateResourseProps } from "@/app/api/upload/route";
import { revalidatePath } from "next/cache";
import { Dispatch, SetStateAction } from "react";

export  async function AddPost(images:CreateResourseProps[]|UpdateResourseProps[], data: FormData) {
    
    const post: CreatePostProps = {
      date_of_public: data.get("date_of_public") as string,
      description: data.get("description") as string,
      title: data.get("title") as string,
      resourses: images as CreateResourseProps[],
    };

    

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(post),
    });

    revalidatePath("/posts");
    
  }

export async function UpPost(post_id:number,images:UpdateResourseProps[],curPost:PostProps, data: FormData) {
    

  
    const post: UpdatePostProps  = {
      post_id:post_id,
      date_of_public: data.get("date_of_public") as string,
      description: data.get("description") as string,
      title: data.get("title") as string,
      resourses: images,
    };
    
    console.log(post)

    if((JSON.stringify(post) == JSON.stringify(curPost))) return;
    let isEdit =1
    const body:{
      post:UpdatePostProps,
      isEdit:Number
    } ={
      post,
      isEdit
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        
      },

      body: JSON.stringify(body),
    });
    
    
    revalidatePath("/posts");
    
  }
