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
    observer.observe(myRef.current);
  }, []);

  return (
    <header>
      <div className="flex justify-center" ref={myRef}>
        <div className="h-56 grid grid-cols-7 gap-4 content-start max-w-7xl">
          <div className={style.container2}>
            <Image
              className={style.centerobgect}
              src="/img/menu.svg"
              alt=""
              height={25}
              width={25}
            />
          </div>

          <div className={style.container2}>
            <Image
              className={style.centerobgect}
              src="/img/menu.svg"
              alt=""
              height={25}
              width={25}
            />
          </div>
          <div>
            <Image
              className={style.centerobgect}
              src="/img/logo.svg"
              alt=""
              height={50}
              width={50}
              property="true"
            />
          </div>

          <div className={style.text}> Продукты </div>
          <div className={style.text}> Решения </div>
          <div className={style.text}> О нас </div>
          <div className={style.textphonemaill}>
            +7 (495) 223-89-86 <br />
            phonex@megatel.ru
          </div>
        </div>
      </div>
      )
    </header>
  );
}
