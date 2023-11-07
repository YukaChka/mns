
import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = "force-dynamic";



export interface ResourseProps  {
  resourse_id: number;
  title: string;
  path:string;
  post_id:number|null;
  order_id:number|null;
};

export type CreateResourseProps = {
  title: string;
  path: string;
};

export async function POST(request: NextRequest) {
  const data = await request.formData()
  
  const file: File | null = data.get('file') as unknown as File

  if (!file) {
    return NextResponse.json({ success: false })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const path = `public/docs/${file.name}`
  const url =`/docs/${file.name}`
  await writeFile(path, buffer)
  //const extend = file.name.split(".")[1]
  //console.log(extend)

  return NextResponse.json({ success: true, path:path, url:url })
}