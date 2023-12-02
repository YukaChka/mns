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

    if (idq) {
      CurrentOrder =
        orders.filter(({ user_id }) => user_id?.toString() === idq) ?? [];
    } else {
      CurrentOrder = orders;
    }

    return NextResponse.json(CurrentOrder);
  } catch (Error) {
    return NextResponse.json(Error);
  }
}

export async function POST(request: Request) {
  const post: Promise<CreateOrderProps> = await request.json();

  try {
    const res = await СreateOrder(await post);
    return NextResponse.json({ succes: res });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(request: Request) {
  const body: Promise<{ order: UpdateOrderProps; isEdit: number }> =
    await request.json();
  try {
    const res = await UpdateOrder((await body).order, (await body).isEdit);
    return NextResponse.json({ succes: res });
  } catch (error) {
    return NextResponse.json(error);
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
    return NextResponse.json(error);
  }
}
