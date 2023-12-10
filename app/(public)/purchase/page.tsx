import Image from "next/image";
import useDownloader from "react-use-downloader";
import NewPreview from "@/components/new-preview";
import { PurchaseForm } from "@/components/forms/PurchaseForm";


export default async function Purchase() {
  return (
    <main>
      <div className="mt-20">
        <div className="mb-5">
          <div className="container ">
            <div className="max-w-6xl">
              <div className="text-6xl font-bold mb-10">Покупка</div>
              <div className="text-2xl mb-10">Для получения информации о стоимости интересующего Вас продукта "ФонексПро", заполните техническую анкету, которая поможет нам лучше понять Вашу задачу по биллингу.</div>
              <PurchaseForm/>


              </div>
            </div>
          </div>
        </div>
        <div></div>
    </main>
  );
}
