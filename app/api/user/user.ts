import {Query } from "@/lib/db"



export async function GetUsers() {
    const users= await Query({
        query:`SELECT u.email, u.password, u.firstname, u.lastname, ut.role  FROM megatel_db.user u JOIN megatel_db.user_type ut ON u.id_user_type =ut.id_user_type`,
        values:[],
    });
    return users;
    
    //console.log(users)
    
}
export type UserProps=
    {
    id:number;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    role: string;
}


