import Image from "next/image";
import useDownloader from "react-use-downloader";
import { UploadForm } from "@/components/forms/UploadForm";
import NewPreview from "@/components/new-preview";

import { SupportForm } from "@/components/support";
import { useEffect, useState } from "react";

export default async function SupportPage() {
  return (
    <main>
      <div className="">
          <div className="flex container justify-center">
            <div className="max-w-6xl">
            <div className="mt-10 text-4xl font-bold">
            Поддержка
              </div>
              <div className="mt-10 text-3xl text-[#009CF3] font-bold">
              Стандартная поддержка:
              </div>
              <div className=" mt-10 text-xl">
                <p className="pb-5">• Обязательное обновление системы до актуальной версии 1 раз в год либо чаще по требованиям регулятора</p>
                <p className="pb-5">• Предоставление обновления по запросу клиента</p>
                <p className="pb-5">• Бесплатное устранение недостатков работы заявленного функционала системы</p>
                <p className="pb-5">• Время реакции на запрос в течение следующего рабочего дня</p>
                <p className="pb-5">• Дистанционные консультации по телефону или другим каналам связи по правильному использованию программного обеспечения (в рамках соблюдения эксплуатационных требований системы; не включают консультации по эксплуатации оборудования связи, серверного или системного программного обеспечения), включая удаленный терминальный доступ</p>
                <p className="pb-5">• Перспективные рекомендации по дальнейшей модернизации АСР</p>
                <p className="pb-5">• Консультации в режиме «горячей линии» до 2 часов в месяц</p>
              </div>
              <div className="mt-10 text-3xl text-[#009CF3] font-bold">
              VIP-поддержка
              </div>
              <div className=" mt-10 text-xl">
                <p className="pb-5">• Неограниченная настройка системы в период настройки или расширения</p>
                <p className="pb-5">• Расширенное обучение пользователей системы</p>
                <p className="pb-5">• Регулярный мониторинг и выработка профилактических мер</p>
                <p className="pb-5">• Срочное восстановление системы после сбоя оборудования и системного ПО, либо при нарушении требований по эксплуатации</p>
                <p className="pb-5">• Приоритетное обновление</p>
                <p className="pb-5">• Неограниченные консультации в режиме «горячей линии»</p>
                <p className="pb-5">• Сокращенное время реакции в течение 4 рабочих часов</p>
                <p className="pb-5">• Предоплаченный объем дополнительных работ</p>
                <p className="pb-5">• Расширенные дистанционные консультации</p>
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
