import {Query } from "@/lib/db"



export async function GetPosts() {
    const users= await Query({
        query:`SELECT   FROM megatel_db.`,
        values:[],
    });
    return users;
    
    //console.log(users)
    
}
