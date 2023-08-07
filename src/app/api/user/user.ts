import {Query } from "@/lib/db"



export  async function GetUsers() {
    let message;
    const users= await Query({
        query:"SELECT * FROM testtable;",
        values:[],
    });
    return users; 
}
    
