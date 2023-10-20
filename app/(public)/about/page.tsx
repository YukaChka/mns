import Image from "next/image";
import useDownloader from "react-use-downloader";
import { UploadForm } from "@/components/forms/UploadForm";
import NewPreview from "@/components/new-preview";

import { SupportForm } from "@/components/support";
import { useEffect, useState } from "react";

export default async function AboutPage() {
  return (
    <main>
      <div>
        <div className="relative">
        <div className="">
        <Image
                  src="/img/about.png"
                  alt="qe"
                  className="pointer-events-none h-[372px] w-[100%] object-cover bg-no-repeat brightness-50"
                  height={11440}
                  width={1741}
                />
        </div>
        <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold">
        О Мегатель и ФонексПро
                </div>

        </div>

        <div className="mb-5 ">
          <div className="flex container justify-center">
            <div className="max-w-6xl">
              <div className=" text-2xl  mt-8">
              «Мегатель» — российская компания. Мы являемся специализированным поставщиком АСР «ФонексПро», работ по настройке, гарантийной и постгарантийной поддержке, адаптации, доработке и обучению пользователей — напрямую или при участии интеграторов.
              </div>

            </div>
          </div>
        </div>

        <div className=" bg-[#009CF3] mb-5">
          <div className="flex container justify-center">
            <div className="max-w-6xl">
              <div className="text-white mt-10 text-2xl ">
              АСР ФонексПро выпускается с 1992 года профессиональной командой под бессменным руководством А. А. Николаева, и является первой российской биллинговой системой в сегменте традиционной связи. В ходе развития система сменила несколько поколений, отражая растущие потребности заказчиков:
              </div>
              <div className="text-white mt-10 text-xl">
                <p className="pb-5">Постоянно актуализируется кодовая база и технологии. </p>
                <p className="pb-5">Постоянно актуализируется кодовая база и технологии. </p>
                <p className="pb-5">ФонексПро стала профессиональной системой операторского класса.. </p>
                <p className="pb-5">Реализована поддержка разнородных сетей связи, решения специальных задач (например, «склейки» транзитных соединений) </p>
                <p className="pb-5">Созданы специальные версии для задач с повышенной надежностью, гостиниц, активного управления оборудованием связи. </p>
                <p className="pb-5">Отвечая потребностям заказчиков, реализованы профессиональные АРМ для различных групп пользователей (например, служб работы с абонентами, служб расчетов и т.п.) </p>
                <p className="pb-5">Реализованы и продолжают развиваться дополнительные задачи по ограничению связи, перекрестной сверке, аналитической обработке и защите от несанкционированных соединений. </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 ">
          <div className="flex container justify-center">
            <div className="max-w-6xl">
              <div className=" text-2xl  mt-8">
              Сборщик данных (модуль «Сбор») отличается такой надежностью, что часто используется даже пользователями альтернативных биллинговых систем.
              </div>
              <div className=" text-2xl  mt-8">
              Гибкость команды разработки, встроенные языки драйверов оборудования связи, отчетов и документов и модульная организация проектной версии позволяют реализовать практически любые интеграции и дополнения системы, и масштабировать ее до произвольного количества абонентов.
              </div>


            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </main>
  );
}
