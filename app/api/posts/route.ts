import { NextResponse } from "next/server";
import { Query } from "@/lib/db";
import { GetPosts, ItemNewProps } from "./posts";
export async function GET(req: Request) {
  try {

    const { searchParams } = new URL(req.url);
    const idq = searchParams.get("id");

    const posts = await GetPosts()
    let CurrentPost:ItemNewProps | undefined | ItemNewProps[]

    

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

export async function POST(req: Request) {
  try {
  } catch (error) {
    return NextResponse.json(error);
  }
}


