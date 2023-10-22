import { OrderProps } from "@/app/api/order/order";
import { OrderTablePro } from "@/components/table";

async function GetOrders() {
  let url = process.env.NEXT_PUBLIC_BASE_URL;
  if (!url) {
    url = "https://megatelnextjs.ru/api/order";
  } else {
    url = `${url}/api/order`;
  }

  const res = await fetch(url);

  return res.json() as Promise<OrderProps[]>;
}
export default async function AdminOrdersPage() {
  const data = await GetOrders();

  return (
    <div className="">
      <OrderTablePro data={data} />
    </div>
  );
}
