
import { NextResponse } from "next/server";
import {GetUsers,  UserProps} from "../user/user"


export const dynamic = 'force-dynamic' 
export async function GET(req: Request){
    try {
    const {searchParams}= new URL(req.url);
    
    const emailq= searchParams.get("email");
    const passwordq = await searchParams.get("pass");
    
    let data = await GetUsers();
    const users:Array<UserProps>= data as Array<UserProps>;
    let CurrentUser = users as any ;

    if(!emailq || !passwordq){
        throw  new Error("заполни все поля");
    }

    if(!CurrentUser){
        throw  new Error("не наход");
    }

    if(emailq && passwordq){
        
        CurrentUser=users.find(({email , password}) => email===emailq && password === passwordq )
        

    } 

  
    return NextResponse.json(CurrentUser)
    }
    catch (error) {
        return NextResponse.json(error);
    }
    
    
}