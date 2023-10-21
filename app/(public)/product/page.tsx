import Link from "next/link";

export default async function ProductPage() {
  return (
    <main>
      <div className="">
          <div className="flex container justify-center">
            <div className="max-w-6xl">
            <div className="mt-10 text-4xl font-bold">
            Продукты
              </div>
              <div className="mt-10 text-3xl font-bold text-[#009CF3]">
              ФонексПро 
              </div>
              <div className=" mt-10 text-xl">
                <p className="pb-5"><Link href="/product/1" className="pb-5">• ФонексПро 8.0</Link></p>
                <p className="pb-5"><Link href="/product/2" className="pb-5">• ФонексПро 7.0.6</Link></p>
                <p className="pb-5"><Link href="/product/update" className="pb-5">• Обновления</Link></p>
                <p className="pb-5"><Link href="/product/support" className="pb-5">• Поддержка</Link></p>
              </div>
              <div className="mt-10 text-3xl font-bold text-[#009CF3]">
              ФонексПро 
              </div>
              <div className=" mt-10 text-xl">
              В данном разделе представлены программные продукты и решения, предлагаемые нашей компанией.
              Перед покупкой или эксплуатацией наших программных продуктов Вам необходимо ознакомиться с Лицензионным соглашением, которое является неотъемлемой частью программного продукта.
              Выберите соответствующий раздел для получения более подробной информации по интересующему Вас продукту.
              </div>
              <div className="mt-10 text-3xl font-bold text-[#009CF3]">
              Сертификаты
              </div>
              <div className=" mt-10 text-xl">
                <p className="pb-5"><Link href="/product/certificates" className="pb-5">• Сертификат соответствия на ФонексПро 8.0</Link></p>
                <p className="pb-5"><Link href="/product/certificates" className="pb-5">• Сертификат соответствия на ФонексПро 8.0</Link></p>
                <p className="pb-5"><Link href="/product/certificates" className="pb-5">• Сертификат соответствия на ФонексПро 8.0</Link></p>
                <p className="pb-5"><Link href="/product/certificates" className="pb-5">• Сертификат соответствия на ФонексПро 8.0</Link></p>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}
