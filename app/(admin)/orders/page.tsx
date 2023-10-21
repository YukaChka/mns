import { OrderProps } from "@/app/api/order/order";
import { OrderTablePro } from "@/components/table";

async function GetOrders() {
  let url = process.env.NEXT_PUBLIC_BASE_URL;
  if (!url) {
  } else {
    url = `${url}/api/order`;
  }
  const responce = await fetch(url);

  return responce.json() as Promise<OrderProps[]>;
}
export default async function AdminOrdersPage() {
  const data = await GetOrders();
  return (
    <div>
      <OrderTablePro data={data} />
    </div>
  );
}
