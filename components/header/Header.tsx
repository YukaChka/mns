//"use client";
import style from "./Header.module.css";
import Image from "next/image";
export default async function Header() {
  return (
    <header >
      <div className="flex justify-center">
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
            {" "}
            +7 (495) 223-89-86 <br />
            phonex@megatel.ru
          </div>
        </div>
      </div>
    </header>
  );
}
