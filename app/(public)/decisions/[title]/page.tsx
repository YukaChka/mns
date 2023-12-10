import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TableNews from "@/components/admin/tableNews";
import Link from "next/link";
import { useState } from "react";
import { CreatePostToast } from "@/components/toasts/CreatePostToast";
import ItemNew from "@/components/admin/itemNew";
import { signOut, useSession } from "next-auth/react";

type DecisionProps = {
  params: {
    title: string;
  };
};

export default async function Decision({ params: { title } }: DecisionProps) {
  return (
    <main>
      <div className="mt-7">
        <div className="flex container justify-center">
          <div className="max-w-6xl mt-10">
            <Link href="/decisions" className=" text-2xl ">
              {"<"} Решения
            </Link>
            <div className="mt-5 text-4xl font-bold">APM Директор</div>
            <div className="">
              <Button
                variant="default"
                className="mt-5 mr-5 middle none center rounded-lg bg-[#009cf3] hover:bg-[#009cf3] py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-md shadow-sky-100 transition-all hover:shadow-lg hover:shadow-sky-200 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                Приобрести
              </Button>
              <Button
                variant="default"
                className="mt-5 middle none center rounded-lg bg-[#D9D9D9] hover:bg-[#cecece] py-3.5 px-7 font-sans text-sm font-bold uppercase text-black shadow-md shadow-[#f5f5f5] transition-all hover:shadow-lg hover:shadow-[#D9D9D9] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                Документация
              </Button>
            </div>
            <div className="mt-8 text-2xl font-bold text-[#009CF3]">
              Для кого предназначен:
            </div>
            <div className=" mt-5 text-xl">
              <p className="pb-5">
                ✓ Специалист по связи и работе с абонентами
              </p>
              <p className="pb-5">
                ✓ Специалист по связи и работе с абонентами
              </p>
              <p className="pb-5">
                ✓ Специалист по связи и работе с абонентами
              </p>
              <p className="pb-5">
                ✓ Специалист по связи и работе с абонентами
              </p>
            </div>
            <div className="mt-8 text-2xl font-bold text-[#009CF3]">
              Что делает:
            </div>
            <div className=" mt-5 text-xl">
              <div className="pb-5 flex justify-start ">
                <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                Позволяет собирать и отправлять данные об услугах связи
                постояльцев для выставления счетов непосредственно из
                гостиничной системы, фильтруя услуги связи персонала и
                арендаторов;
              </div>
              <div className="pb-5 flex justify-start ">
                <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                Позволяет управлять гостиничным оборудованием и блокировать
                услуги связи.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
