import mysql from "mysql2/promise.js";

type dbquery={
    query: string;
    values: Array<any>;
    
}

export async function Query(params: dbquery) {
  const dbconn = await 
  mysql.createConnection({
    host: "46.161.48.157",
    port:3306,
    user: "root1",
    password: "AdminMM!",
    database: "testdb",
  })
  try {
    
    const [results] = await dbconn.execute(params.query, params.values);
    //console.log(results)
    dbconn.end();
    return results;
  } catch (error) {
    
    return error;
  }
}
