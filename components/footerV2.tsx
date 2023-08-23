"use client";

import { useWindowSize } from "@/hooks/useWindowSize";

export const FooterV2 = () => {
  const { width, height } = useWindowSize();
  return (
    <footer className="bg-[#009cf3] w-full ">

      <li className="flex container justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[0%] md:gap-[21%] place-items-center m-5 ">
        <ul className="text-white text-[15px] sm:text-[21px] ">Продукты</ul>
        <ul className="text-white text-[15px] sm:text-[21px] ">Решения</ul>
        <ul className="text-white text-[15px] sm:text-[21px] ">О нас</ul>
        </div>
      </li>

      <div className="flex container justify-center">
        <div className="flex-auto container justify-center">
          <hr className="border-1"></hr>
        </div>
      </div>

      <li className=" grid-cols-3 container flex items-center  justify-around ">
        {width > 970 ? (
          <ul className="text-[21px] text-white">© 1992 - 2023 Megatel</ul>
        ) : null}

        <ul className="text-white text-[10px] sm:text-[15px]">
          +7 (495) 223-89-86 phonex@megatel.ru
        </ul>
        {width > 970 ? (
          <ul className="text-white text-[21px]">@НАШ ЛИНК</ul>
        ) : null}
      </li>
    </footer>
  );
};
