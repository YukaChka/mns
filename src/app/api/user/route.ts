
import { NextResponse } from "next/server";
import {GetUsers} from "./user"

export async function GET(req: Request){
    const res = await GetUsers();
    return NextResponse.json(res);
}