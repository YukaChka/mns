import Image from "next/image";
import useDownloader from "react-use-downloader";
import { UploadForm } from "@/components/forms/UploadForm";
import NewPreview from "@/components/new-preview";
import Link from "next/link"
import { SupportForm } from "@/components/support";
import { useEffect, useState } from "react";

export default async function UpdatePage() {
  return (
    <main>
      <div className="mt-10">
          <div className="flex container justify-center">
            <div className="max-w-6xl">
            <Link href="/product" className="mt-10 text-2xl ">
            {"<"} Продукты
              </Link>
            <div className="mt-10 text-4xl font-bold">
            Новые модули
              </div>
              <div className="mt-10 text-3xl text-[#009CF3] font-bold">
              Стандартная поддержка:
              </div>
              <div className=" mt-10 text-xl">
              <p className="pb-5 ">
                <mark className="bg-white font-bold text-[#009CF3]">Модуль «Веб-Аналитика» </mark>
                — дополняет встроенные возможности анализа данных, позволяя делать графическое представление трафика и аномалий, с последующей детализацией вплоть до порта (абонента);
              </p>
              <p className="pb-5 ">
                <mark className="bg-white font-bold text-[#009CF3]">Модуль «АнтиФрод» </mark>
                — позволяет защитить систему связи от взлома и несанкционированного использования услуг связи; использовать и настраивать систему уведомлений ответственных лиц при возникновении аномалий или взломе. Если позволяет оборудование связи, экстренно прерывать услуги связи;
              </p>
              </div>
              <div className="mt-10 text-4xl  font-bold">
              Новый порядок 
актуализации и поддержки
              </div>
              <div className=" mt-10 text-xl">
              <p className="pb-5 flex justify-start ">
                <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                При любом приобретении новых модулей выполняется актуализация системы (также рекомендуется при расширении портов, и возможна без приобретения новых модулей для систем с прекращенной поддержкой).
              </p>
              <p className="pb-5 flex justify-start ">
                <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                В актуализацию входит обновление до текущей версии, 1 год бесплатной стандартной поддержки, включая текущее обновление.
              </p>
              <p className="pb-5 flex justify-start ">
                <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                Стоимость обновления снижена, и зависит от срока окончания поддержки (раньше было с 5.0.x на 8.0.x — 100%, с 7.0.x на 8.0.x — 60%, сейчас — 18% + 1% за каждый месяц, прошедший с даты завершения поддержки, но не более 36 мес (или 54%).
              </p>
              <p className="pb-5 flex justify-start ">
                <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                Льготное продление технической поддержки, если до конца бесплатной или оплаченной поддержки остается более 6 месяцев.
              </p>
              </div>
              
            </div>
          </div>
        </div>
    </main>
  );
}
