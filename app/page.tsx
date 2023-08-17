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
        <Image className="w-72" src="img/logo.svg" alt="" height={50} width={50} />

        </div>
      </div>
    </main>
  );
}
