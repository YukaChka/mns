import Link from "next/link";

export default async function ProductPage() {
  return (
    <main>
      <div className="">
        <div className="flex container justify-center">
          <div className="max-w-6xl">
            <div className="mt-20 text-4xl font-bold">Продукты</div>
            <div className="mt-5 text-3xl font-bold text-[#009CF3]">
              ФонексПро
            </div>
            <div className=" mt-10 text-xl">
              <p className="pb-5">
                <Link
                  href="/product/1"
                  className="pb-5 flex justify-start place-items-center group "
                >
                  <div className="h-[6px] w-[6px] mr-1 rounded-full bg-gray-400 group-hover:bg-[#009CF3] "></div>
                  <div className="group-hover:underline  group-hover:decoration-[#009CF3]  ">
                    ФонексПро 8.0
                  </div>
                </Link>
              </p>
              <p className="pb-5">
                <Link
                  href="/product/1"
                  className="pb-5 flex justify-start place-items-center group "
                >
                  <div className="h-[6px] w-[6px] mr-1 rounded-full bg-gray-400 group-hover:bg-[#009CF3] "></div>
                  <div className="group-hover:underline  group-hover:decoration-[#009CF3]  ">
                    ФонексПро 7.0.6
                  </div>
                </Link>
              </p>
              <p className="pb-5">
                <Link
                  href="/product/update"
                  className="pb-5 flex justify-start place-items-center group "
                >
                  <div className="h-[6px] w-[6px] mr-1 rounded-full bg-gray-400 group-hover:bg-[#009CF3] "></div>
                  <div>Обновления</div>
                </Link>
              </p>
              <p className="pb-5">
                <Link
                  href="/product/support"
                  className="pb-5 flex justify-start place-items-center group "
                >
                  <div className="h-[6px] w-[6px] mr-1 rounded-full bg-gray-400 group-hover:bg-[#009CF3] "></div>
                  <div>Поддержка</div>
                </Link>
              </p>
            </div>

            <div className="mt-10 text-3xl font-bold text-[#009CF3]">
              Демоверсия
            </div>
            <div className="flex justify-start mt-5 ml-[10px] text-xl">
              <div className="h-[5px] w-[5px] mr-1 p-1 mt-[10px] text-justify rounded-full bg-gray-400 "></div>
              В данном разделе представлены программные продукты и решения,
              предлагаемые нашей компанией. Перед покупкой или эксплуатацией
              наших программных продуктов Вам необходимо ознакомиться с
              Лицензионным соглашением, которое является неотъемлемой частью
              программного продукта. Выберите соответствующий раздел для
              получения более подробной информации по интересующему Вас
              продукту.
            </div>

            <div className="mt-10 text-3xl font-bold text-[#009CF3]">
              Сертификаты
            </div>
            <div className=" mt-10 text-xl">
              <p className="pb-5">
                <Link
                  href="/product/certificates"
                  className="pb-5 flex justify-start place-items-center group "
                >
                  <div className="h-[6px] w-[6px] mr-1 rounded-full bg-gray-400 group-hover:bg-[#009CF3] "></div>
                  <div>Сертификат соответствия на ФонексПро 8.0</div>
                </Link>
              </p>

              <p className="pb-5">
                <Link
                  href="/product/certificates"
                  className="pb-5 flex justify-start place-items-center group "
                >
                  <div className="h-[6px] w-[6px] mr-1 rounded-full bg-gray-400 group-hover:bg-[#009CF3] "></div>
                  <div>Сертификат соответствия на ФонексПро 8.0</div>
                </Link>
              </p>
              <p className="pb-5">
                <Link
                  href="/product/certificates"
                  className="pb-5 flex justify-start place-items-center group "
                >
                  <div className="h-[6px] w-[6px] mr-1 rounded-full bg-gray-400 group-hover:bg-[#009CF3] "></div>
                  <div>Сертификат соответствия на ФонексПро 8.0</div>
                </Link>
              </p>
              <p className="pb-5">
                <Link
                  href="/product/certificates"
                  className="pb-5 flex justify-start place-items-center group "
                >
                  <div className="h-[6px] w-[6px] mr-1 rounded-full bg-gray-400 group-hover:bg-[#009CF3] "></div>
                  <div>Сертификат соответствия на ФонексПро 8.0</div>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
