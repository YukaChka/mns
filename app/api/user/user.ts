import {Query} from "@/lib/db"

export const dynamic = "force-dynamic";

export async function GetUsers() {
    const query = "select u.email, u.password, u.first_name, u.last_name, tu.role_user from public.user u join public.type_user tu on u.type_user_id  = tu.type_user_id;"
    const users= await Query<UserProps>({query:query, values:[]});
    return users.data?.rows
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


