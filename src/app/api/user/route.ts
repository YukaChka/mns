import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import {GetUsers} from "./user"

export async function GET(req: Request){



    return NextResponse.json(GetUsers());
}