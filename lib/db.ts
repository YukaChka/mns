import { Pool, QueryResultRow , QueryResultBase, QueryResult} from "pg";

export const conn=new Pool({
  user: "postgres",
  password: "admin",
  host: "localhost",
  port: 5432,
  database: "megatel_db",
  
});

import { Client } from 'pg'
 
export const client = new Client({
  user: "postgres",
  password: "admin",
  host: "localhost",
  port: 5432,
  database: "megatel_db",
})

