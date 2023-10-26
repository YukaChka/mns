import { Pool, QueryResultRow , QueryResultBase, QueryResult} from "pg";

interface dbquery<T>{
  query: string;
  values: Array<T>;
 
}

export interface ServiceResponce<T>{
  data:QueryResult<QueryResultRow>|null;
  status:Number;
  message:String;
  succes:boolean;
}

export const conn=new Pool({
  user: "root1",
  password: "AdminMM!",
  host: "91.185.84.230",
  port: 5432,
  database: "megatel_db"
});
export async function Query<T>({query, values}:dbquery<T>) {
  
  try {
    
    const results = await conn.query<QueryResultRow>(query, values);
    conn
    conn.end();
   
      
    let res:ServiceResponce<T>={
        data:results,
        status:200,
        message:"ok",
        succes:true,
    }
    return res
    
     
  } catch (error) {
    let res:ServiceResponce<T>={
      data:null,
      status:400,
      message:`${error}`,
      succes:false,
    } 
  return res
    
  }
}