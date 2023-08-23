"use client";

import { useWindowSize } from "@/hooks/useWindowSize";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { time } from "console";
const HeaderV2 = () => {
  const { width, height } = useWindowSize();

  return (
    <header>


      <div className="container w-full mt-8">
        <ul className="md:h-auto  justify-center  flex items-center  mr-auto">
          <li className="font-semibold text-base mr-auto ml-auto lg:text-sm ">
            <Image
              className=""
              src="/img/menu.svg"
              alt=""
              height={width < 900 ? 35 : 25}
              width={width < 900 ? 35 : 25}
            />
          </li>
          <li className="font-semibold text-base mr-auto ml-auto  lg:text-sm">
            <Image
              className=""
              src="/img/logo.svg"
              alt=""
              height={width < 900 ? 75 : 50}
              width={width < 900 ? 75 : 50}
              property="true"
            />
          </li>
          {width > 800 ? (
          <li className="font-semibold text-base mr-auto ml-auto lg:text-sm">
            <Button
              variant="default"
              className="middle none center rounded-lg bg-[#009cf3] hover:bg-[#009cf3] py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-md shadow-sky-100 transition-all hover:shadow-lg hover:shadow-sky-200 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              приобрести
            </Button>
          </li>
          ) : 

          <li className="font-semibold text-base mr-auto ml-auto lg:text-sm">
          <Button
            variant="default"
            className="middle none center rounded-lg bg-[#009cf3] hover:bg-[#009cf3] py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-md shadow-sky-100 transition-all hover:shadow-lg hover:shadow-sky-200 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
            купить
          </Button>

        </li>
          }
          

          {width > 800 ? (
            <li className="font-semibold text-base mr-auto ml-auto lg:text-sm">
              <Link href="/product">Продукты</Link>
            </li>
          ) : null}
          {width >= 950 ? (
            <li className="font-semibold text-base mr-auto ml-auto lg:text-sm">
              <Link href="/decisions">Решения</Link>
            </li>
          ) : null}
          {width > 1080 ? (
            <li className="font-semibold text-base mr-auto ml-auto lg:text-sm">
              <Link href="/about">О нас</Link>
            </li>
          ) : null}
          {width > 1440 ? (
            <li className="font-normal text-base  mr-auto ml-auto ">
              +7 (495) 223-89-86 <br />
              phonex@megatel.ru
            </li>
          ) : null}
        </ul>
      </div>

      <div>{width}</div>


      <span className="loader"></span>

    </header>
  );
};
export default HeaderV2;
