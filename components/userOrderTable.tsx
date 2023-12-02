import { OrderProps } from "@/app/api/orders/orders";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

async function GetOrders(user_id: string) {
  const responce = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/orders?id=${user_id}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  return responce.json() as Promise<OrderProps[]>;
}
export async function UserOrderTable({ user_id }: { user_id: string }) {
  const orders = await GetOrders(user_id);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Дата Поставки</TableHead>
          <TableHead>Количество Портов</TableHead>
          <TableHead>Модули</TableHead>
          <TableHead>Станция</TableHead>
          <TableHead>Тип Поставки</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.order_id}>
            <TableCell>{order.date_of_delivery}</TableCell>
            <TableCell>{order.quantity_ports}</TableCell>
            <TableCell>{order.module}</TableCell>
            <TableCell>{order.station}</TableCell>
            <TableCell>{order.type_delivery}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
