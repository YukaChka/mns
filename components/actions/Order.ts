"use server";

import { CreateOrderProps, OrderProps, UpdateOrderProps } from "@/app/api/orders/orders";
import { CreateResourseProps, UpdateResourseProps } from "@/app/api/upload/route";
import { revalidatePath } from "next/cache";

export async function AddOrder(images:CreateResourseProps[]|UpdateResourseProps[], data: FormData) {
    
    const order: CreateOrderProps = {
        date_of_delivery: data.get("date_of_delivery") as string,
        quantity_ports: parseInt(data.get("quantity_ports") as string),
        module: data.get("module") as string,
        station: data.get("station") as string,
        type_delivery: data.get("type_delivery") as string,
        resourses: images as CreateResourseProps[],
      };
  
      
    
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`, {
        method: "POST",
        
        body: JSON.stringify(order),
      });
  
      revalidatePath("/orders");
      

  
}


export async function UpdateOrder(order_id:number,images:UpdateResourseProps[],curOrder:OrderProps, data: FormData) {
    
  
  let isEdit=1;
    const order: UpdateOrderProps  = {
      order_id:order_id,
      date_of_delivery: data.get("date_of_delivery") as string,
      quantity_ports: parseInt(data.get("quantity_ports") as string),
      module: data.get("module") as string,
      station: data.get("station") as string,
      type_delivery: data.get("type_delivery") as string,
      resourses: images,
    };
    console.log(JSON.stringify(order))
    console.log(JSON.stringify(curOrder))
    console.log(JSON.stringify(order) == JSON.stringify(curOrder))
    if(order.date_of_delivery==null || order.quantity_ports ==null || order.module == null || order.type_delivery==null) return;
    
    
    
    
    if(JSON.stringify(order) == JSON.stringify(curOrder)) return;

    
    
    const body:{
      order:UpdateOrderProps,
      isEdit:number
    } ={
      order,
      isEdit
    }
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    
    
    
    
    
    revalidatePath("/orders");
    
  }