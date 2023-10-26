import * as React from "react";
import Image from "next/image";

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
          <figure key={res.title} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={res.path}
                alt={res.title}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={100}
                height={100}
              />
            </div>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="cursor-pointer" />
    </ScrollArea>
  );
}
