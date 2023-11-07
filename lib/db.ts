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
  password: "AdminMM!1",
  host: "91.185.84.230",
  port: 5432,
  database: "megatel_db",
  
});

import { Client } from 'pg'
 
export const client = new Client({
  user: "root1",
  password: "AdminMM!1",
  host: "91.185.84.230",
  port: 5432,
  database: "megatel_db",
})

