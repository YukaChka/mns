import { NextResponse } from "next/server";
import { Query } from "@/lib/db";
export async function GET(req: Request) {
  try {
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

export async function PUT(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const idq = searchParams.get("id");
  } catch (error) {
    return NextResponse.json(error);
  }
}
