"use client";

import { useWindowSize } from "@/hooks/useWindowSize";
import Link from "next/link";

export const FooterV2 = () => {
  const { width, height } = useWindowSize();
  return (
    <footer className="bg-[#009cf3]  w-full ">
      <li className="flex container justify-center">
        <div className="grid grid-cols-1 md:grid-cols-10  place-items-center m-3 ">
          <ul className="text-white text-[20px] sm:text-[21px]  col-start-1 md:col-start-2 col-end-6 ">
            <Link href="/product">Продукты</Link>
          </ul>
          <ul className="text-white text-[20px] sm:text-[21px]  col-start-1 md:col-start-6 col-end-7 ">
            <Link href="/decisions">Решения</Link>
          </ul>
          <ul className="text-white text-[20px] sm:text-[21px]  col-start-1 md:col-start-7 col-end-10">
            <Link href="/about">О&nbsp;нас</Link>
          </ul>
        </div>
      </li>

      <div className="flex container justify-center">
        <div className=" container justify-center">
          <hr className="border-1"></hr>
        </div>
      </div>

      <li className=" grid-cols-3 container flex items-center justify-around ">
        {width > 970 ? (
          <ul className="text-[21px] text-white">© 1992 - 2023 Megatel</ul>
        ) : null}

        <ul className="text-white text-[14px] sm:text-[15px]">
          +7 (495) 223-89-86 phonex@megatel.ru
        </ul>
        {width > 970 ? (
          <ul className="text-white text-[21px]">@НАШ ЛИНК</ul>
        ) : null}
      </li>
    </footer>
  );
};
