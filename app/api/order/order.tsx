import { Query } from "@/lib/db";

export async function GetOrders() {
  const Orders = await Query({
    query: `SELECT * FROM  megatel_db.order Order BY data_delivery`,
    values: [],
  });
  return Orders;
}
export type OrderProps = {
  id: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  role: string;
};
