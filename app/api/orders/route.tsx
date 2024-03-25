import { NextResponse } from "next/server";
import {
  CreateOrderProps,
  DeleteOrder,
  GetOrders,
  OrderProps,
  UpdateOrderProps,
  СreateOrder,
  UpdateOrder,
} from "./orders";

export const dynamic = "force-dynamic";
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const idq = searchParams.get("id");

    const orders = await GetOrders();

    let CurrentOrder: OrderProps | undefined | OrderProps[];
    if (!orders) {
      return NextResponse.json([]);
    }

    if (idq) {
      CurrentOrder =
        orders.filter(({ user_id }) => user_id?.toString() === idq) ?? [];
    } else {
      CurrentOrder = orders;
    }

    return NextResponse.json(CurrentOrder);
  } catch (Error) {
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  const order = await request;
  console.log(order.body);
  try {
    if (!order.body) {
      return NextResponse.json([]);
    }
    let test = await order.json();
    console.log(order.json());
    //const res = await СreateOrder(order.json());

    return NextResponse.json({ succes: test });
  } catch (error) {
    return NextResponse.json([]);
  }
}

export async function PUT(request: Request) {
  const body: Promise<{ order: UpdateOrderProps; isEdit: number }> =
    await request.json();
  try {
    const res = await UpdateOrder((await body).order, (await body).isEdit);
    return NextResponse.json({ succes: res });
  } catch (error) {
    return NextResponse.json([]);
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);

  try {
    const idq = searchParams.get("id");
    let res;
    if (idq) {
      res = await DeleteOrder(idq);
    } else {
      res = false;
    }

    console.log(res);
    return NextResponse.json({ succes: res });
  } catch (error) {
    return NextResponse.json([]);
  }
}
