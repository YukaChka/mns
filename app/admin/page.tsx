"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
export default function AdminPage() {
  const session = useSession();

  return (
    <div>
      <div className="">
        <div className="flex container justify-center">
          <div className="max-w-6xl">
            <div className="grid grid-cols-2 mt-10">
              <div className=" text-md md:text-4xl font-bold  ">
                Панель Администратора
              </div>
              <div className=" text-end   text-sm md:text-xl">
              <Image
                    src="/img/left.svg"
                    alt=""
                    className="pointer-events-none p-1"
                    height={200}
                    width={200}
                  />
                Вернуться обратно
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3 mt-10 ">
                <div className="text-md md:text-2xl">Новости</div>
                <div className="text-md md:text-2xl">Новости</div>
              </div>
              <div className=" mt-10">
                <Button
                  variant="default"
                  className="middle none center  bg-[#ffff] hover:bg-[#ffff] py-3.5 px-7 font-sans text-sm font-bold uppercase text-black shadow-md shadow-gray transition-all hover:shadow-md  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-md border"
                  data-ripple-light="true"
                >
                  Добавить
                </Button>
              </div>

              <div className="mb-3 mt-10">
                <div className=" mb-4 flex w-full flex-wrap ">
                  <span
                    className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                    id="basic-addon2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <Input
                    type="search"
                    className="relative m-0 block w-[1px] min-w-0 flex-auto rounded  border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out   "
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                </div>
              </div>
            </div>
            <div className=" mt-10 rounded-md border px-3 py-2 ">
              <div>
                <a className="font-semibold pr-2">Название</a>{" "}
                <a className="font-normal">11.09.2023</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  С 20 марта 2017 года при покупке версий 7.0.4 и 7.0.6
                  бесплатно проводим удаленное внедрение АСР Фонекс Про. Во
                  внедрение входит: 1. Установка компонентов АСР на оборудование
                  Заказчика 2. Написание драйвера для одной АТС 3. Заведение
                  клиентов, аппаратов, ip-адресов, иных ключей 4. Заведение
                  одного тарифного плана. 5. Обучение специалистов заказчика по
                  телефону. Для внедрения необходимо предоставить удаленный
                  доступ.
                </div>
                <div className="flex justify-center p-5 ">
                  <Image
                    src="/img/zat.png"
                    alt="qe"
                    className="pointer-events-none p-1"
                    height={100}
                    width={100}
                  />
                  <Image
                    src="/img/zat.png"
                    alt="qe"
                    className="pointer-events-none p-1"
                    height={100}
                    width={100}
                  />
                </div>
              </div>
              <div className="mt-5 flex ">
                <Button
                  variant="default"
                  className="mr-5 middle none center rounded-lg bg-[#009cf3] hover:bg-[#009cf3] py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-sm shadow-sky-100 transition-all hover:shadow-sm hover:shadow-sky-200 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:shadow-none"
                  data-ripple-light="true"
                >
                  <Image
                    src="/img/Pen.svg"
                    alt="qe"
                    className="pointer-events-none p-1"
                    height={25}
                    width={25}
                  />
                  Редактировать
                </Button>
                <Button
                  variant="default"
                  className="mr-5 middle none center rounded-lg bg-[#d9d9d9] hover:bg-[#ea4646] py-3.5 px-7 font-sans text-sm font-bold uppercase text-black hover:text-white shadow-sm shadow-sky-100 transition-all hover:shadow-sm hover:shadow-sky-200 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  <Image
                    src="/img/Delet.svg"
                    alt="qe"
                    className="pointer-events-none p-1"
                    height={30}
                    width={30}
                  />
                  Удалить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
