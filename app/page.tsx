"use client";
import Image from "next/image";
import useDownloader from "react-use-downloader";
import { UploadForm } from "@/components/forms/UploadForm";
import NewPreview from "@/components/new-preview";

import { SupportForm } from "@/components/support";
import { useEffect, useState } from "react";
import { ItemNewProps } from "@/app/api/posts/posts";

async function GetData() {
  let url = process.env.NEXT_PUBLIC_BASE_URL;
  if (!url) {
    url = "http://megatelnextjs.ru/api/posts";
  } else {
    url = `${url}/api/posts`;
  }
  console.log(url);
  const res = await fetch(url);

  return res.json() as Promise<ItemNewProps[]>;
}
export default async function Home() {
  //const { download } = useDownloader();

  //const fileUrl = "\\docs\\Phonex_8.0.pdf";

  //const filename = fileUrl.split("\\").pop();

  const [first, second, three, ...posts] = await GetData();
  const news = [first, second, three];
  return (
    <main>
      <div>
        <div className="flex justify-center mt-12">
          <Image
            src="img/megatelonlylogo.svg"
            alt=""
            height={307}
            width={200}
          />
        </div>

        <div className="textmegatel flex justify-center text-[40px] md:text-[100px]  ">
          Мегатель
        </div>
        <div className="flex justify-center text-bolt font-bold text-center">
          Lorem Ipsum - это текст-рыба, часто используемый в печати и
          вэб-дизайне.
        </div>
        <div className="flex justify-center p-11 ">
          <Image
            src="img/downarrow.svg"
            alt=""
            className="pointer-events-none"
            height={60}
            width={60}
          />
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
                  className="pointer-events-none"
                  height={11440}
                  width={1741}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex container justify-center">
            <div className="max-w-6xl">
              <div className="text-[40px] md:text-[80px] font-bold mt-10">
                Партнёры
              </div>
              <div className="  justify-center grid grid-cols-5 gap-4 content-start mt-10">
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

        <div className=" bg-[#009CF3] mt-10 mb-1 md:mb-16">
          <div className="flex container justify-center">
            <div className="max-w-6xl">
              <div className="text-white  text-[40px] lg:text-[80px] font-bold mt-8">
                Новости
              </div>
              <div className="text-white mt-10 text-2xl ">
                <>
                  {news.map((post) => (
                    <NewPreview key={post.id} params={post} />
                  ))}
                </>
              </div>
            </div>
          </div>
        </div>
        <div className="container max-w-[1210px]">
          <div className="flex justify-center">
            <div className=" w-full">
              <div className="text-black text-3xl md:text-6xl font-bold mt-10">
                Техническая поддержка
              </div>
              <div className="text-black text-lg md:text-2xl font-medium mt-2 md:mt-10  mb-3">
                Появились вопросы? Напишите в поддержку
              </div>
              <div>
                <SupportForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
