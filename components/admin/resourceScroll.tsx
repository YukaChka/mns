import * as React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CreateResourseProps, ResourseProps } from "@/app/api/upload/route";

export function ResourceScroll({
  resource,
}: {
  resource: Array<CreateResourseProps>;
}) {
  return (
    <ScrollArea
      className="w-96 whitespace-nowrap rounded-md border"
      type="always"
    >
      <ScrollBar orientation="horizontal" className="cursor-pointer" />
      <div className="flex w-max space-x-4 p-4">
        {resource.map((res) => (
          
            <div className="overflow-hidden rounded-md flex p-1 justify-end items-center relative">
              <div className="">
              <Image
                src={res.path}
                alt={res.title}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={100}
                height={100}
              />
              <div>
              <Image
              src="/img/trash.png"
              className="absolute mt-[-170px]"
              alt="Search Icon"
              width={25}
              height={25}
            />
            </div>
              </div>
            </div>

        ))}
      </div>
      <ScrollBar orientation="horizontal" className="cursor-pointer" />
    </ScrollArea>
  );
}
