import { Pool } from "pg";

export const conn=new Pool({
  user: "root1",
  password: "AdminMM!",
  host: "91.185.84.230",
  port: 5432,
  database: "megatel_db"
});

  