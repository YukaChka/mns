"use client";

import Image from "next/image";
import QUERY_COUNTRIES from "./queryCountries.graphql";
import { getAllPostsForHome } from "@/lib/api";
import Link from "next/link";
import useDownloader from "react-use-downloader";

export default function Home() {
  const { download } = useDownloader();

  const fileUrl =
    "https://adminmegateltop.ru/wp-content/uploads/2023/08/test.pdf";

  const filename = fileUrl.split("/").pop();

  return (
    <main>
      <div>
        <button onClick={() => download(fileUrl, filename as string)}>
          Скачать файл
        </button>
      </div>

      <p>Body</p>
    </main>
  );
}
