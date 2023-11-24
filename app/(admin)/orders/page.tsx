import { OrderProps } from "@/app/api/orders/orders";
import { OrderTablePro } from "@/components/table";

async function GetOrders() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`, {
    next: {
      revalidate: 60,
    },
  });

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
