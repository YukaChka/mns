"use client";
import style from "./Header.module.css";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const myRef = useRef<any>();
  const [visibleHeader, setVisibleHeader] = useState<Boolean>();
  console.log(visibleHeader);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      setVisibleHeader(entry.isIntersecting);
    });
    // observer.observe(myRef.current);
  }, []);

  return (
    <header>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <Image className="" src="/img/menu.svg" alt="" height={25} width={25} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Button
        </button>
        <div className={style.text}> Продукты </div>
        <div className={style.text}> Решения </div>
        <div className={style.text}> О нас </div>
        <div className={style.textphonemaill}>
          +7 (495) 223-89-86 <br />
          phonex@megatel.ru
        </div>
      </div>
    </header>
  );
}
