"use client";
import Image from "next/image"
import useDownloader from "react-use-downloader";
import { UploadForm } from "@/components/UploadForm";


export default function Home() {
  const { download } = useDownloader();

  const fileUrl = "\\docs\\Phonex_8.0.pdf";

  const filename = fileUrl.split("\\").pop();

  return (
    <main>
      <div>
        <div className="flex justify-center">
        <Image  src="img/megatelonlylogo.svg" alt="" height={307} width={200} />
        </div>
        <div className="textmegatel flex justify-center">
          Мегатель
        </div>
        <div className="flex justify-center text-bolt font-bold">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
        </div>
        <div className="flex justify-center p-11">
        <Image src="img/downarrow.svg" alt="" height={75} width={75} />
        </div>
      </div>
    </main>
  );
}
