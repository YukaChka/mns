import { NextResponse } from "next/server";
import { GetOrders, OrderProps } from "./order";

export const dynamic = "force-dynamic";
export async function GET(req: Request) {
  try {
    let data = await GetOrders();
    //const orders: Array<OrderProps> = data as Array<OrderProps>;

    return NextResponse.json({ data: null });
  } catch (error) {
    return NextResponse.json(error);
  }
}
