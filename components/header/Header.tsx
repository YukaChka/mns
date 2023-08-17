//"use client";
import style from "./Header.module.css";
import Image from "next/image";
export default async function Header() {
  return (
    <header>
      <div>
        <div className={style.container}>
          <div className={style.container2}>
            <Image
              className={style.centerobgect}
              src="img/menu.svg"
              alt=""
              height={25}
              width={25}
            />
            <Image
              className={style.centerobgect}
              src="img/logo.svg"
              alt=""
              height={50}
              width={50}
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
