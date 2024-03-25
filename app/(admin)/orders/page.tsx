import { OrderProps } from "@/app/api/orders/orders";
import { OrderTablePro } from "@/components/admin/dataOrderTable";
import axios from "axios";

async function GetOrders() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`);

  return res.data as Promise<OrderProps[]>;
}

export default async function AdminOrdersPage() {
  const data = await GetOrders();

  return <div className="">{data && <OrderTablePro data={data} />}</div>;
}
