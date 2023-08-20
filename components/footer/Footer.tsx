//"use client";
import style from "./Footer.module.css";

export default async function Footer() {
  return (
    <footer className="bg-[#009cf3] ">
      <div className="h-8"></div>
  <div className="flex container justify-center">
        <div className=" grid grid-cols-3 gap-24 content-start h-10">
          <div className="text-white text-[21px]" >
          Продукты
          </div>

          <div className="text-white text-[21px]">
          Решения
          </div>
          <div className="text-white text-[21px]">
          О нас
          </div>


        </div>
      </div>
      <div className="flex container justify-center">
        <div className="flex-auto container justify-center">
          
        <div className={style.line}></div>
      </div>
      </div>

        <div className=" grid-cols-3 container flex  justify-around ">

            <div className="text-[21px] text-white">
            © 1992 - 2023 Megatel
            </div>
            <div className="text-white text-[16px]">
            +7 (495) 223-89-86
phonex@megatel.ru
            </div>
            <div className="text-white text-[21px]">
            @НАШ ЛИНК
            </div>



      </div>
    </footer>
  );
}

