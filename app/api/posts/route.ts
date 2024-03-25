import { NextRequest, NextResponse } from "next/server";

import { CreatePostProps, DeletePost, GetPosts, PostProps, UpdatePost, UpdatePostProps, СreatePost } from "./posts";

export const dynamic = 'force-dynamic' 
export async function GET(req: Request) {
  try {

    const { searchParams } = new URL(req.url);
    const idq = searchParams.get("id");
    
    const posts = await GetPosts()
    let CurrentPost:PostProps | undefined | PostProps[]
    if(!posts){
      return NextResponse.json([]);
    }
    

    if(idq){
      CurrentPost = posts.find(({post_id})=> post_id.toString()===idq)
      
    }
    else{
      CurrentPost = posts
    }
    
    
    return NextResponse.json(CurrentPost)
  } catch (Error) {
    return NextResponse.json([]);
  }
}



export async function POST(request: Request) {
  const post:Promise<CreatePostProps>  =await request.json()

  try {
    const res = await СreatePost(await post)
    return NextResponse.json({succes:res});  
  } catch (error) {
    return NextResponse.json([]);
  }
}

export async function DELETE(request:Request) {
  const { searchParams } = new URL(request.url);
  
  
  try {
    const idq = searchParams.get("id");
    let res
    if(idq){
       res = await DeletePost(idq)
    }
    else{
      res=false
    }
    
    
    return NextResponse.json({succes:res})
  } catch (error) {
    return NextResponse.json([]);
  }
  
}

export async function PUT(request: Request) {
  const body:Promise<{post:UpdatePostProps,
  isEdit:number}> =await request.json()
  
  
  try {
    const res = await UpdatePost((await body).post, (await body).isEdit)
    return NextResponse.json({succes:res});  
  } catch (error) {
    return NextResponse.json([]);
  }
}