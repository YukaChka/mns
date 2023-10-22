"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TableNews from "@/components/admin/tableNews";
import Link from "next/link";
import { useState } from "react";
import { CreatePostToast } from "@/components/toasts/CreatePostToast";
import { ItemNewProps } from "@/app/api/posts/posts";
import ItemNew from "@/components/admin/itemNew";
import { signOut, useSession } from "next-auth/react";

export default function AccountPage() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <main>
      <div>
      <div className="mt-10">
          <div className="flex container justify-center">
            <div className="max-w-6xl min-w-full">

            <div className="mt-10 text-4xl font-bold grid md:grid-cols-2 ">
            <div>Личный кабинет</div>
            <div className="flex justify-center md:justify-end">
              <Button className="bg-[#009CF3]" onClick={() => signOut({ callbackUrl: `${window.location.origin}` })}
        >
          Выйти
        </Button></div>
              </div>
              <div className="mt-10 text-xl font-bold text-[#009CF3]">
              Личные данные
              </div>
              <div className=" mt-10 text-xl">
                <p className="pb-5">Фамилия: {user?.lastname}</p> 
                <p className="pb-5">Имя: {user?.firstname}</p>
                <p className="pb-5">Почта: {user?.email}</p>
              </div>
              </div>
              </div>
            </div>
          </div>
      <div>
      </div>
    </main>
  );
}
