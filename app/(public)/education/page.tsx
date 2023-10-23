export default async function AboutPage() {
  return (
    <main>
      <div className="">
        <div className="flex container justify-center">
          <div className="min-h-full max-w-6xl">
            <div className="mt-10 text-4xl font-bold">Обучение</div>
            <div className="mt-10 text-xl font-medium">
              Осуществляется обучение администрированию и использованию системы,
              включая:
            </div>
            <div className=" mt-10 text-xl">
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Настройка, диагностика и развертывание системы.
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Использование модулей системы.
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Время реакции на запрос в течение следующего рабочего дня
              </p>
              <p className="pb-5 flex justify-start place-items-center">
                <div className="h-[5px] w-[5px] mr-1 rounded-full bg-[#009CF3] "></div>
                Подготовка шаблонов отчетов и драйверов.
              </p>
            </div>
            <div className="mt-10 text-xl font-medium">
              Базовое дистанционное обучение одного специалиста по связи
              функциям системы включено в стоимость первоначальной поставки
              системы или нового модуля.
            </div>
            <div className="mt-10 text-xl font-medium">
              Возможен заказ дополнительного обучения
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
