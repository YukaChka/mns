"use server";

import { CreateOrderProps, OrderProps, UpdateOrderProps } from "@/app/api/orders/orders";
import { CreateResourseProps, UpdateResourseProps } from "@/app/api/upload/route";
import { UserData } from "@/app/api/user/user";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function AddOrder(selectUser:UserData|null,images:CreateResourseProps[]|UpdateResourseProps[], data: FormData) {
    
    const order: CreateOrderProps = {
        date_of_delivery: data.get("date_of_delivery") as string,
        quantity_ports: parseInt(data.get("quantity_ports") as string),
        module: data.get("module") as string,
        station: data.get("station") as string,
        type_delivery: data.get("type_delivery") as string,
        user_id:selectUser?.user_id,
        resourses: images as CreateResourseProps[],
      };
  
      console.log(JSON.stringify(order))
      
      
    
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`, {
        order
      });
      console.log(res.data)
  
      revalidatePath("/orders");
      

  
}


export async function UpdateOrder(order_id:number,user:UserData|null,images:UpdateResourseProps[],curOrder:OrderProps, data: FormData) {
    
  
  let isEdit=1;
    const order: UpdateOrderProps  = {
      order_id:order_id,
      date_of_delivery: data.get("date_of_delivery") as string,
      quantity_ports: parseInt(data.get("quantity_ports") as string),
      module: data.get("module") as string,
      station: data.get("station") as string,
      type_delivery: data.get("type_delivery") as string,
      user_id:user?.user_id,
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
    
    const res = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`, 
      body)
    

    revalidatePath("/orders");
    
  }

 export async function DeleteOrder(id:number, data:FormData) {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/orders?id=${id}`
    );
    revalidatePath("/orders");
  }