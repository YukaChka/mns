import Image from "next/image";
import useDownloader from "react-use-downloader";
import { UploadForm } from "@/components/forms/UploadForm";
import NewPreview from "@/components/new-preview";

import { SupportForm } from "@/components/support";
import { useEffect, useState } from "react";

export default async function AboutPage() {
  return (
    <main>
      <div>
        <div className="relative">
          <div className="">
            <Image
              src="/img/about.png"
              alt="qe"
              className="pointer-events-none h-[372px] object-cover bg-no-repeat brightness-50"
              height={11440}
              width={1741}
            />
          </div>
          <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            qwefwefwegfefg
          </div>
        </div>
      </div>
    </main>
  );
}
