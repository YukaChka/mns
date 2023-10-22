import { NextRequest, NextResponse } from "next/server";
import { Query } from "@/lib/db";
import { GetPosts, PostProps, СreatePost } from "./posts";

export const dynamic = 'force-dynamic' 
export async function GET(req: Request) {
  try {

    const { searchParams } = new URL(req.url);
    const idq = searchParams.get("id");

    const posts = await GetPosts()
    let CurrentPost:PostProps | undefined | PostProps[] | []

    

    if(idq){
      CurrentPost = posts.find(({id})=> id.toString()===idq)
      
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
  const post:Promise<PostProps>  =await request.json()

  try {
    
    console.log(post)
    const res = await СreatePost(await post)

    return NextResponse.json(res);  
  } catch (error) {
    return NextResponse.json(error);
  }
}


