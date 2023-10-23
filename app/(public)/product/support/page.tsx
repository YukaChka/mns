import Image from "next/image";
import useDownloader from "react-use-downloader";
import { UploadForm } from "@/components/forms/UploadForm";
import NewPreview from "@/components/new-preview";
import Link from "next/link"
import { SupportForm } from "@/components/support";
import { useEffect, useState } from "react";

export default async function SupportPage() {
  return (
    <main>
      <div className="mt-10 ">
          <div className="flex container justify-center">
            <div className="max-w-6xl">
            <Link href="/product" className="text-2xl ">
            {"<"} Продукты
              </Link>
            <div className="mt-10 text-4xl font-bold">
            Поддержка
              </div>
              <div className="mt-10 text-3xl text-[#009CF3] font-bold">
              Стандартная поддержка:
              </div>
              <div className=" mt-10 text-xl">
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Обязательное обновление системы до актуальной версии 1 раз в год либо чаще по требованиям регулятора
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Предоставление обновления по запросу клиента
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Бесплатное устранение недостатков работы заявленного функционала системы
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Время реакции на запрос в течение следующего рабочего дня
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Дистанционные консультации по телефону или другим каналам связи по правильному использованию программного обеспечения (в рамках соблюдения эксплуатационных требований системы; не включают консультации по эксплуатации оборудования связи, серверного или системного программного обеспечения), включая удаленный терминальный доступ
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Перспективные рекомендации по дальнейшей модернизации АСР
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Консультации в режиме «горячей линии» до 2 часов в месяц
              </p>

              </div>
              <div className="mt-10 text-3xl text-[#009CF3] font-bold">
              VIP-поддержка
              </div>
              <div className=" mt-10 text-xl">
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Неограниченная настройка системы в период настройки или расширения
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Расширенное обучение пользователей системы
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Регулярный мониторинг и выработка профилактических мер
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Срочное восстановление системы после сбоя оборудования и системного ПО, либо при нарушении требований по эксплуатации
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Приоритетное обновление
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Неограниченные консультации в режиме «горячей линии»
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Сокращенное время реакции в течение 4 рабочих часов
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Сокращенное время реакции в течение 4 рабочих часов
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Предоплаченный объем дополнительных работ
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Расширенные дистанционные консультации
              </p>
              </div>
              <div className=" mt-10 text-xl font-bold mb-10">
                <p>
                Детальные условия устанавливаются договором поддержки. Имеются определенные ограничения количества услуг, включенных в поддержку, в случаях нарушения эксплуатационных требований либо масштабной реорганизации сети связи Заказчика;
                </p>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}
