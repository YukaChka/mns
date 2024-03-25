"use client";

import { Button } from "@/components/ui/button";
import { UserOrderTable } from "@/components/userOrderTable";
import { signOut, useSession } from "next-auth/react";
export default function Account() {
  const { data: session, update, status } = useSession();
  const user = session?.user;
  return (
    <div>
      {" "}
      <div className="mt-10 text-4xl font-bold grid md:grid-cols-2 ">
        <div>Личный кабинет</div>
        <div className="flex justify-center md:justify-end">
          <Button
            className="bg-[#009CF3]"
            onClick={() => {
              signOut({ callbackUrl: `${window.location.origin}` });
            }}
          >
            Выйти
          </Button>
        </div>
      </div>
      <div className="mt-10 text-xl font-bold text-[#009CF3]">
        Личные данные
      </div>
      <div className=" mt-10 text-xl">
        <p className="pb-5">Фамилия: {user?.last_name}</p>
        <p className="pb-5">Имя: {user?.first_name}</p>
        <p className="pb-5">Почта: {user?.email}</p>
      </div>
    </div>
  );
}
