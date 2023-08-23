"use client";
import Image from "next/image";
import useDownloader from "react-use-downloader";
import { UploadForm } from "@/components/UploadForm";
import NewPreview from "@/components/new-preview";
import { useSession } from "next-auth/react";
import { SupportForm } from "@/components/support";

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
             <div className="flex justify-center">
          <Image
            src="img/megatelonlylogo.svg"
            alt=""
            height={307}
            width={200}
          />
        </div>

        <div className="textmegatel flex justify-center text-[40px] md:text-[100px] ">Мегатель</div>
        <div className="flex justify-center text-bolt font-bold text-center">
          Lorem Ipsum - это текст-рыба, часто используемый в печати и
          вэб-дизайне.
        </div>
        <div className="flex justify-center p-11 ">
          <Image
            src="img/downarrow.svg"
            alt=""
            className="pointer-events-none"
            height={75}
            width={75}
          />
        </div>
    </main>
  );
}
