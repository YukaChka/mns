//"use client";
import style from "./Footer.module.css";

export default async function Footer() {
  return (
    <footer>
      <div className={style.bg}>
        <div className={style.container}>
          <div className={style.text}>
            +7 (495) 223-89-86 <br />
            phonex@megatel.ru
            <br />
            <br />
            1992 - 2023 © Megatel
          </div>
          <div className={style.text}>
            Продукты
            <br />
            Решения
            <br />О нас
          </div>
          <div className={style.text}>@Telegram</div>
        </div>
      </div>
    </footer>
  );
}
