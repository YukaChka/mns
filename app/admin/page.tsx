"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
export default function AdminPage() {
  const session = useSession();

  return (
    <main>

<div className="">
          <div className="flex container justify-center">
            <div className="max-w-6xl">
              <div className="grid grid-cols-2 mt-10">
              <div className=" text-md md:text-4xl font-bold  ">
                Панель Администратора
              </div>
              <div className=" text-end   text-sm md:text-xl"> Вернуться обратно</div>
              </div>
              <div>
              
              <div className="grid grid-cols-3 mt-10 ">
              <div className="text-md md:text-2xl">
                Новости
              </div>
              <div className="text-md md:text-2xl">
                Новости
              </div>
              </div>
              <div className=" mt-10">
              <Button
                variant="default"
                className="middle none center rounded-lg bg-[#ffff] hover:bg-[#ffff] py-3.5 px-7 font-sans text-sm font-bold uppercase text-black shadow-md shadow-gray transition-all hover:shadow-md hover:shadow-black focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none outline"
                data-ripple-light="true"
              >
                Добавить
              </Button>
              </div>
              
              <div className="mb-3 mt-10">
  <div className="relative mb-4 flex w-full flex-wrap items-stretch border border-solid">
  <span
      className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
      id="basic-addon2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    </span>
    <input
      type="search"
      className="relative m-0 block w-[1px] min-w-0 flex-auto rounded  border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon2" />
 
  </div>
</div>

              </div>
              <div className=" mt-10 text-2xl">
                «Мегатель» — российская компания. Мы являемся специализированным
                поставщиком АСР «ФонексПро», работ по настройке, гарантийной и
                постгарантийной поддержке, адаптации, доработке и обучению
                пользователей — напрямую или при участии интеграторов
              </div>

            </div>
          </div>
        </div>

    </main>
  );
}
