
import { NextResponse } from "next/server";
import {GetUsers} from "./user"


export async function GET(req: Request){
    const {searchParams}= new URL(req.url);
    const users = await GetUsers();
    return NextResponse.json(users);
}