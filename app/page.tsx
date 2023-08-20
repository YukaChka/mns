"use client";
import Image from "next/image";
import useDownloader from "react-use-downloader";
import { UploadForm } from "@/components/UploadForm";
import NewPreview from "@/components/new-preview";
import { useSession } from "next-auth/react";
import { SupportFotm } from "@/components/support";

export default function Home() {
  const { download } = useDownloader();

  const fileUrl = "\\docs\\Phonex_8.0.pdf";

  const filename = fileUrl.split("\\").pop();

  const news = [
    {
      id: 1,
      title: "Заголовок",
      preview:
        "Ясность нашей позиции очевидна: сплочённость команды профессионалов играет определяющее значение для дальнейших направлений развития.",
      date: "2023-09-12",
    },
    {
      id: 2,
      title: "Заголовок",
      preview:
        "Ясность нашей позиции очевидна: сплочённость команды профессионалов играет определяющее значение для дальнейших направлений развития.",
      date: "2023-09-11",
    },
    {
      id: 3,
      title: "День всех влюбленных",
      preview: "Данный праздник трял ля ля ля ля",
      date: "2023-10-17",
    },
  ];

  const updateNew = news.sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date);
  });

  return (
    <main>
      <div>
        <div className="flex justify-center -mt-14 ">
          <Image
            src="img/megatelonlylogo.svg"
            alt=""
            height={307}
            width={200}
          />
        </div>
        <div className="textmegatel flex justify-center">Мегатель</div>
        <div className="flex justify-center text-bolt font-bold">
          Lorem Ipsum - это текст-рыба, часто используемый в печати и
          вэб-дизайне.
        </div>
        <div className="flex justify-center p-11 ">
          <Image src="img/downarrow.svg" alt="" height={75} width={75} />
        </div>
        <div className="bg-gradient-to-t striped">
          <div className="flex container justify-center">
            <div className="max-w-6xl">
              <div className="text-white text-6xl font-bold mt-10">
                Наша компания
              </div>
              <div className="text-white mt-10 text-2xl">
                «Мегатель» — российская компания. Мы являемся специализированным
                поставщиком АСР «ФонексПро», работ по настройке, гарантийной и
                постгарантийной поддержке, адаптации, доработке и обучению
                пользователей — напрямую или при участии интеграторов
              </div>
              <div className="flex justify-center mt-16">
                <Image
                  src="/img/photo.jpg"
                  alt="qe"
                  height={11440}
                  width={1741}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-t">
          <div className="flex container justify-center">
            <div className="max-w-6xl">
              <div className="text-6xl font-bold mt-10">Партнёры</div>
              <div className=" flex justify-center grid grid-cols-5 gap-4 content-start mt-10">
                <>
                  <Image
                    src="/img/i.png"
                    alt="qe"
                    height={11440}
                    width={1741}
                  />
                </>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-t bg-[#009CF3] mt-16">
          <div className="flex container justify-center">
            <div className="max-w-6xl">
              <div className="text-white text-6xl font-bold mt-10">Новости</div>
              <div className="text-white mt-10 text-2xl">
                <>
                  {news.map((item) => (
                    <NewPreview key={item.id} params={item} />
                  ))}
                </>
              </div>
            </div>
          </div>
        </div>
        <div className="flex container justify-center w-full">
          <SupportFotm />
        </div>
      </div>
    </main>
  );
}
