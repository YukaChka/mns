import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ProductProps = {
  params: {
    id: string;
  };
};

export default async function Certificates({ params: { id } }: ProductProps) {
  return (
    <main>
      <div className="mt-20">
        <div className="flex container justify-center">
          <div className="max-w-6xl">
            <Link href="/product" className=" text-2xl ">
              {"<"} Продукты
            </Link>
            <div className="mt-5 text-4xl font-bold">
              Сертификат соответствия на ФонексПро 8.0
            </div>
            <div className="flex justify-center">
              <Image
                className="pb-1 pl-1 pr-1"
                src="/img/sert.png"
                height={500}
                width={500}
                alt="qwe"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
