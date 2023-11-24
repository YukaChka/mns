import { conn } from "@/lib/db";
import { ResourseProps, UpdateResourseProps } from "../upload/route";

export interface OrderProps {
  order_id: number;
  date_of_delivery: string;
  quantity_ports: number;
  module: string | string[];
  station: string | null;
  type_delivery: string;
  resourses: Array<ResourseProps>;
}

export interface UpdateOrderProps {
  order_id: number;
  date_of_delivery: string;
  quantity_ports: number;
  module: string;
  station: string | null;
  type_delivery: string;
  resourses: Array<UpdateResourseProps>;
}

export interface CreateOrderProps {
  date_of_delivery: string;
  quantity_ports: number;
  module: string | string[];
  station: string | null;
  type_delivery: string;
  resourses: Array<ResourseProps>;
}

interface OrderModel {
  order_id: number;
  date_of_delivery: string;
  quantity_ports: number;
  module: string | string[];
  station: string | null;
  type_delivery: string;
}

export const dynamic = "force-dynamic";
export async function GetOrders() {
  const client = await conn.connect();

  const orders = new Array<OrderProps>();
  try {
    await client.query("begin");
    const order_query = `select o.order_id , o.date_of_delivery, o.quantity_ports, o."module", o.station, o.type_delivery from "order" o`;

    const model_orders = await client.query(order_query);
    const data_orders = model_orders.rows as Array<OrderModel>;

    for (var i = 0; i < data_orders.length; i++) {
      const resourses_query = `select r.resource_id , r.title, r.path, r.post_id from  resource r  where r.order_id =$1`;
      const resourses_params = [data_orders[i].order_id];

      let date_of_delivery = new Date(data_orders[i].date_of_delivery);
      data_orders[i].date_of_delivery = Intl.DateTimeFormat("ru-RU", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })
        .format(date_of_delivery)
        .split(" ")[0]
        .toString();

      data_orders[i].module = (data_orders[i].module as string).split("\n");

      const model_resourses = await client.query(
        resourses_query,
        resourses_params
      );

      const data_resourses = model_resourses.rows as ResourseProps[];

      var order = Object.assign({}, data_orders[i], {
        resourses: data_resourses,
      });

      order = order as OrderProps;

      orders.push(order);
    }
    client.query("commit");
  } catch (e) {
    await client.query("rollback");
  } finally {
    client.release();

    return orders;
  }
}

export async function СreateOrder(order: CreateOrderProps) {
  const client = await conn.connect();

  const formatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
  });

  let date_of_delivery = order.date_of_delivery.split(".");
  const date = formatter
    .format(
      new Date(
        `${date_of_delivery[2]}-${date_of_delivery[1]}-${date_of_delivery[0]}`
      )
    )
    .split(" ");

  try {
    await client.query("begin");
    const create_order_query = `insert into public.order(date_of_delivery, quantity_ports,"module",station,type_delivery) values($1,$2,$3,$4,$5) RETURNING order_id;`;
    const order_params = [
      date,
      order.quantity_ports,
      order.module,
      order.station,
      order.type_delivery,
    ];
    const create_order = await client.query(create_order_query, order_params);

    for (var i = 0; i < order.resourses.length; i++) {
      const resourses_params = [
        order.resourses[i].title,
        order.resourses[i].path,
        create_order.rows[0].order_id,
      ];
      const add_resourses_query = `insert into public.resource(title, "path", order_id) values($1,$2,$3)`;
      await client.query(add_resourses_query, resourses_params);
    }
    await client.query("commit");
  } catch (e) {
    await client.query("rollback");
    throw e;
  } finally {
    client.release();

    return true;
  }
}

export async function UpdateOrder(order: UpdateOrderProps, isEdit: number) {
  const client = await conn.connect();

  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
    });
    const date_of_delivery = order.date_of_delivery.split(".");
    const date = formatter
      .format(
        new Date(
          `${date_of_delivery[2]}-${date_of_delivery[1]}-${date_of_delivery[0]}`
        )
      )
      .split(" ");

    await client.query("begin");
    const update_post_query = `update public.order o set date_of_delivery = $1, quantity_ports =$2, "module" = $3, station=$4,type_delivery=$5  where order_id =$6`;
    const post_params = [
      date,
      order.quantity_ports,
      order.module,
      order.station,
      order.type_delivery,
      order.order_id,
    ];
    await client.query(update_post_query, post_params);
    if (isEdit == 1) {
      const params = [order.order_id];
      const delete_resourses_query = `delete from resource r where r.order_id = $1`;
      await client.query(delete_resourses_query, params);
    }

    if (order.resourses.length != 0) {
      order.resourses.map(async (img) => {
        const resourses_params = [img.title, img.path, order.order_id];

        const add_resourses_query = `insert into public.resource(title, "path", order_id) values($1,$2,$3)`;
        await client.query(add_resourses_query, resourses_params);
      });
    }

    await client.query("commit").then(() => console.log("commit"));
  } catch (e) {
    await client.query("rollback");
    client.release();

    return e;
  }
}

export async function DeleteOrder(order_id: string) {
  const client = await conn.connect();

  try {
    await client.query("begin");

    const delete_resourses_query = `delete from public.resource where order_id=$1;`;
    const resourses_params = [order_id];
    await client.query(delete_resourses_query, resourses_params);

    const delete_post_query = `delete from public.order where  order_id =$1;`;
    const post_params = [order_id];
    await client.query(delete_post_query, post_params);

    await client.query("commit");
  } catch (e) {
    await client.query("rollback");
    throw e;
  } finally {
    client.release();

    return true;
  }
}
