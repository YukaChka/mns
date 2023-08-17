//"use client";
import style from "./Footer.module.css";

export default async function Footer() {
  return (
    <footer>
      <div className={style.bg}>
        <div className=" grid grid-cols-3 gap-4 content-center h-20">
          <div className={style.containervertical1}>
            <div className={style.text}>
            +7 (495) 223-89-86 <br />
            phonex@megatel.ru
            </div>
            <div className={style.text}>
            1992 - 2023 © Megatel
            </div>
          </div>
          <div className={style.containervertical2}>
            <div className={style.text}>Продукты </div> 
            
           <div className={style.text}>Решения</div> 
            
            <div className={style.text}>О нас</div> 
          </div>
          <div className={style.text}>
            @Telegram
          </div>
        </div>
      </div>
    </footer>
  );
}

