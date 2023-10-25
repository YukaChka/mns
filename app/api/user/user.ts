import {conn} from "@/lib/db"

export const dynamic = "force-dynamic";

export async function GetUsers() {
    const query = "select u.email, u.password, u.first_name, u.last_name, tu.role_user from public.user u join public.type_user tu on u.type_user_id  = tu.type_user_id;"
    const values:any[]=[];
    const users= await conn.query(query,values)
    console.log(users.rows)
    return users.rows as UserProps[];

    
    
    
}
export interface UserProps
    {
    id:string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    role_user: string;
}


