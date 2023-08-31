import { NextResponse } from "next/server";
import { Query } from "@/lib/db";
import { GetPosts, ItemNewProps } from "./posts";
export async function GET(req: Request) {
  try {
    const posts = await GetPosts()
    
    
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function POST(req: Request) {
  try {
  } catch (error) {
    return NextResponse.json(error);
  }
}


