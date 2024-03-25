import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";

import { NextResponse } from "next/server";
import {GetUserData, GetUsers,  UserData,  UserProps} from "./user"
import { array } from "zod";


export const dynamic = 'force-dynamic' 
export async function GET(req: Request){
    try {
    
        let CurrentUser:any;
        const session = await getServerSession(authConfig);

        if(session?.user.role_user =="админ")
        {
            let data = await GetUserData();
            const {searchParams}= new URL(req.url);
    
            const emailq= searchParams.get("email");


            const users:Array<UserData>= data as Array<UserData>;
            CurrentUser= users as Array<UserData>;

            if(emailq){
        
                CurrentUser=users.find(({email}) => email===emailq)
                
        
            } 
        }

    return NextResponse.json(CurrentUser)
    }
    catch (error) {
        return NextResponse.json([]);
    }
    
    
}