"use client";

import useDownloader from "react-use-downloader";
import { UploadForm } from "@/components/UploadForm";

export default function Home() {
  const { download } = useDownloader();

  const fileUrl = "\\docs\\Phonex_8.0.pdf";

  const filename = fileUrl.split("\\").pop();

  return (
    <main>
      <div>
        <button
          onClick={() => {
            console.log(filename);
            download(fileUrl, filename as string);
          }}
        >
          Скачать файл
        </button>
        <UploadForm />
      </div>
    </main>
  );
}
