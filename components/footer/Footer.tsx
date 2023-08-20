//"use client";
import style from "./Footer.module.css";

export default async function Footer() {
  return (
    <footer>
  <div className="flex justify-center">
        <div className=" grid grid-cols-3 gap-4 content-start max-w-7xl h-10">
          <div >
          Продукты
          </div>

          <div >
          Решения
          </div>
          <div>
          О нас
          </div>


        </div>
      </div>
      <div className="flex justify-center">
        <div className="gap-4 content-start max-w-7xl">
          
        <div className={style.line}></div>
      </div>
      </div>
      <div className="flex justify-center">
        <div className=" grid grid-cols-3 gap-4 content-start max-w-7xl h-10">

            <div className="">
            © 1992 - 2023 Megatel
            </div>
            <div className="mx-36">
            +7 (495) 223-89-86
phonex@megatel.ru
            </div>
            <div className="">
            @НАШ ЛИНК
            </div>


      </div>
      </div>
    </footer>
  );
}

