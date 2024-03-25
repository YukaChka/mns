import Account from "@/components/account";
import { UserOrderTable } from "@/components/userOrderTable";
import axios from "axios";
import { getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";
import { useSessionStorage } from "usehooks-ts";

async function GetOrders(user_id: string) {
  const responce = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/orders?id=${user_id}`
  );

  return responce;
}

export default async function AccountPage() {
  const orders = await GetOrders("1");

  return (
    <main>
      <div>
        <div className="mt-10">
          <div className="flex container justify-center">
            <div className="max-w-6xl min-w-full">
              <Account />
              <div>
                <UserOrderTable data={orders.data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
