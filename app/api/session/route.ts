import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const session = await getServerSession(authConfig);

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}