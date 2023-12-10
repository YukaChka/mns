import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ProductProps = {
  params: {
    id: string;
  };
};

export default async function Decision({ params: { id } }: ProductProps) {
  return (
    <main>
      <div className="mt-7">
        <div className="flex container justify-center">
          <div className="max-w-6xl mt-10">
            <Link href="/product" className=" text-2xl ">
              {"<"} Продукты
            </Link>
            <div className="mt-5 text-4xl font-bold">Линейка ФонексПро</div>
            <div className="mt-7 text-3xl font-bold text-[#009CF3]">
              Все актуальные версии ФонексПро:
            </div>
            <div className=" mt-5 text-xl">
              <div className="pb-5 flex justify-start ">
                <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                Опираются на опыт разработчика АСР с 1992 года.
              </div>

              <div className="pb-5 flex justify-start ">
                <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                Обладают действующим сертификатом Системы сертификации в области
                связи (№ ОС-3-СТ-0550, ТУ 4251-001-69603108-2016), и
                соответствуют установленным требованиям «Правила применения
                автоматизированных систем расчетов», утвержденным Приказом
                Мининформсвязи России от 02.07.2007 № 73.
              </div>
              <div className="pb-5 flex justify-start ">
                <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                Совместимы как с современным, так и с основным унаследованным
                оборудованием связи, и адаптируемы к широкому спектру
                оборудования.
              </div>
              <div className="pb-5 flex justify-start ">
                <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                Поставляются с одним годом бесплатной стандартной поддержки.
              </div>
              <div className="pb-5 flex justify-start ">
                <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                Совместимы с новыми решениями для специалистов по связи и
                безопасности — модулями «Аналитика» и «АнтиФрод».
              </div>
              <div className="pb-5 flex justify-start ">
                <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                Разработаны в России без участия иностранного капитала
                (соответствует стратегии по реализации импортозамещения).
              </div>
            </div>
            <div className="mt-10 text-xl font-bold">
              Примечание: пользователям линейки ФонексПро 5.0.4, 6.0.4, 7.0.4 в
              настоящее время поставляется линейка 7.0.6, которая дополнительно
              обеспечивает учет передачи данных.
            </div>
            <div className="grid grid-cols-2 mt-10">
              <div>
                <div className="text-3xl font-bold text-[#009CF3]">
                  Проектная версия 8.0
                </div>
                <Button
                  variant="default"
                  className="mt-5 middle none center rounded-lg bg-[#D9D9D9] hover:bg-[#cecece] py-3.5 px-7 font-sans text-sm font-bold uppercase text-black shadow-md shadow-[#f5f5f5] transition-all hover:shadow-lg hover:shadow-[#D9D9D9] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  Документация
                </Button>
                <div className=" mt-10 text-xl">
                  <div className="pb-5 flex justify-start ">
                    <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                    Модульная автоматизированная система расчетов для
                    специальных конфигураций, многопользовательской работы или
                    больших сетей связи.
                  </div>
                  <div className="pb-5 flex justify-start ">
                    <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                    Является продолжением линеек 5.0, 6.0 и 7.0.
                  </div>
                  <div className="pb-5 flex justify-start ">
                    <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                    Представляет собой службу ядро (системную службу Windows), к
                    которой подключаются специализированные рабочие места
                    («Директор», «Клерк», «Отчеты», «Документы», «Платежи»,
                    «Сверка», «Карты», «Детализация netflow»), модули и
                    дополнительные службы (Гостиница, RADIUS, интеграция с
                    Captive Portal и СМС-авторизацией, «Экспорт», «Телефонный
                    справочник», «Веб-статистика/Личный кабинет», «Веб-платежи»,
                    новые — «Веб-Аналитика», «АнтиФрод»).
                  </div>
                  <div className="pb-5 flex justify-start ">
                    <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                    Отвечает повышенным требованиям к отказоустойчивости.
                  </div>
                  <div className="pb-5 flex justify-start ">
                    <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                    Использует внешний SQL-cервер баз данных.
                  </div>
                  <div className="pb-5 flex justify-start ">
                    <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                    Позволяет активно управлять оборудованием связи (авторизация
                    доступа к услугам связи, прекращение соединений и т.п.)
                  </div>
                  <div className="pb-5 flex justify-start ">
                    <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                    Широкие возможности интеграции с ERP, CRM-системами, СКУД и
                    т.п.
                  </div>

                  <div className="pb-5 flex justify-start ">
                    <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] rounded-full bg-[#009CF3] "></div>
                    Оптимизирована для сетей голосовой связи от 500 до 100 000
                    абонентов и более, либо сетей передачи данных.
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/img/Phonex.png"
                  width={1000}
                  height={1000}
                  alt="qwe"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
