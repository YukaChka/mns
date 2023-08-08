import {Query } from "@/lib/db"


export async function GetUsers() {
    const users= await Query({
        query:"SELECT * FROM testtable;",
        values:[],
    });
    return users;
    
    //console.log(users)
    
}
    
