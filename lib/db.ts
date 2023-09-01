import mysql, { RowDataPacket } from "mysql2/promise.js";

interface dbquery<T>{
    query: string;
    values: Array<T>;
    
}

export async function Query<T>(params: dbquery<T>) {
  const dbconn = await 
  mysql.createConnection({
    host: "46.161.48.157",
    port:3306,
    user: "root1",
    password: "AdminMM!",
    database: "megatel_db",
  })
  try {
    
    const [results] = await dbconn.query<T & RowDataPacket[]>(params.query, params.values);
    //console.log(results)
    dbconn.end();
    
    return results as T;
  } catch (error) {
    
    return error;
  }
}
