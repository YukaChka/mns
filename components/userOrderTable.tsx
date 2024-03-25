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
import axios from "axios";

export function UserOrderTable({ data }: { data: OrderProps[] }) {
  return (
    <div>
      {data.length !== 0 && (
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
            {data && (
              <>
                {data.map((order: OrderProps) => (
                  <TableRow key={order.order_id}>
                    <TableCell>{order.date_of_delivery}</TableCell>
                    <TableCell>{order.quantity_ports}</TableCell>
                    <TableCell>{order.module}</TableCell>
                    <TableCell>{order.station}</TableCell>
                    <TableCell>{order.type_delivery}</TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
