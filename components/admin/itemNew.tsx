"use client";

import { ItemNewImagesProps } from "@/app/api/posts/posts";
import { Button } from "../ui/button";
import Image from "next/image";

interface ItemNewProps {
  id: number;
  title: string;
  datapublic: string;
  description: string;
  imgpaths: Array<ItemNewImagesProps>;
}

export default function ItemNew({
  id,
  title,
  datapublic,
  description,
  imgpaths,
}: ItemNewProps) {
  const CurrentDate = new Date(datapublic);
  const formatter = new Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const date = formatter.format(CurrentDate).split(" ");

  for (var i = 0; i < imgpaths.length; i++) {
    imgpaths[i].path = imgpaths[i].path.replace(/\/+/g, "/");
    console.log(imgpaths[i].path);
  }
  return (
    <div className="rounded-md border px-3 py-2 h-[100%] ">
      <div className="">
      <div>
        <a className="font-semibold pr-2">{title}</a>
        <a className="font-normal">{date[0]}</a>
      </div>
      <div className="  md:grid-cols-2">
        <div>{description}</div>
        <div className="flex justify-center p-5 ">
          {imgpaths[0] && (
            <Image
              src={imgpaths[0].path}
              alt=""
              className="pointer-events-none p-1 "
              height={150}
              width={150}
            />
          )}
          {imgpaths[1] && (
            <Image
              src={imgpaths[1].path}
              alt="qe"
              className="pointer-events-none p-1"
              height={150}
              width={150}
            />
          )}
        </div>
      </div>
      <div className="mt-5 flex ">
        <Button
          variant="default"
          size="sm"
          //className="mr-5 middle none  rounded-lg bg-[#009cf3] hover:bg-[#009cf3] py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-sm shadow-sky-100 transition-all hover:shadow-sm hover:shadow-sky-200 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:shadow-none"
          className=" bg-[#009cf3] mr-3  hover:shadow-[inset_0_-2px_4px_rgba(0,0.5,0.5,0.5)] hover:bg-[#009cf3] transition delay-[50] ease-in-out"
          data-ripple-light="true"
        >
          <Image
            src="/img/Pen.svg"
            alt="qe"
            className="pointer-events-none p-1"
            height={23}
            width={23}
          />
          Редактировать
        </Button>
        <Button
          size="sm"
          className="bg-[#d9d9d9] text-black hover:bg-red-600 hover:text-white transition delay-[1] ease-in-out "
        >
          <Image
            src="/img/Delet.svg"
            alt="qe"
            className="pointer-events-none p-1"
            height={27}
            width={27}
          />
          Удалить
        </Button>
      </div>
    </div>
    </div>
  );
}
