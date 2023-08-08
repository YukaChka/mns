//"use client";
import style from "./Header.module.css";
import Image from "next/image";
export default async function Header() {
  return (
    <header>
      <div>
        <div className={style.container}>
          <div> <Image  className={style.centerobgect} src="img/menu.svg" alt="" height={25} width={25} /></div>
          <div> <Image className={style.centerobgect} src="img/logo.svg" alt="" height={50} width={50} /> </div>
          <div > <p  className={style.centerobgect}>Ghjlerns</p>  </div>
          <div> Решения </div>
          <div> О нас </div>
          <div> 6 </div>
        </div>
      </div>
    </header>
  );
}
