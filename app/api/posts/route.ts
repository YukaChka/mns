import { NextRequest, NextResponse } from "next/server";
import { Query } from "@/lib/db";
import { CreatePostProps, GetPosts, PostProps, СreatePost } from "./posts";

export const dynamic = 'force-dynamic' 
export async function GET(req: Request) {
  try {

    const { searchParams } = new URL(req.url);
    const idq = searchParams.get("id");

    const posts = await GetPosts()
    let CurrentPost:PostProps | undefined | PostProps[] | []

    

    if(idq){
      CurrentPost = posts.find(({post_id})=> post_id.toString()===idq)
      
    }
    else{
      CurrentPost = posts
    }

    return NextResponse.json(CurrentPost)
  } catch (Error) {
    return NextResponse.json(Error);
  }
}



export async function POST(request: Request) {
  const post:Promise<CreatePostProps>  =await request.json()

  try {
    const res = await СreatePost(await post)
    return NextResponse.json({ok:res});  
  } catch (error) {
    return NextResponse.json(error);
  }
}


