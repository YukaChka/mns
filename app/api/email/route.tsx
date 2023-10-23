import { Query } from "@/lib/db";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { PostImagesProps } from "@/app/api/posts/posts";
import { mailOptions, transporter } from "@/lib/email";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const post: Promise<any> = await request.json();
  console.log(post);
  try {
    await transporter.sendMail({
      from: "maxzerovol@mail.ru",
      to: "maxzerovol@mail.ru",

      subject: "lox",
      text: "ТЫ лох я взломал твой вк",
      html: "<h1>ТЫ лох я взломал твой вк</h1>",
    });

    return NextResponse.json("ok");
  } catch (error) {
    return NextResponse.json(error);
  }
}
