import { Pool } from "pg";

let conn;

if (!conn) {
  conn = new Pool({
    user: "root1",
    password: "AdminMM!",
    host: "91.185.84.230",
    port: 5432,
    database: "megatel_db"
  });
}

export default conn ;