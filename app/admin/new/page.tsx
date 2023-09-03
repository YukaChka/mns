import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TableNews from "@/components/admin/tableNews";

export default async function AdminNewsPage() {
  return (
    <div>
      <div>
        <div className="mb-3 mt-10 ">
          <div className="flex p-1 justify-end items-center relative">
            <Input
              type="search"
              id="default-search"
              className="border  p-4 w-full relative m-0 block  min-w-0 flex-auto rounded  border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out   "
              placeholder="Поиск"
              aria-label="Search"
              aria-describedby="button-addon2"
              required
            />
            <Image
              src="/img/lupa.svg"
              className="absolute mr-3"
              alt="Search Icon"
              width={25}
              height={25}
            />
          </div>

          <div className=" flex p-1">
            <Button
              variant="default"
              size="sm"
              //className="mr-5 middle none  rounded-lg bg-[#009cf3] hover:bg-[#009cf3] py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-sm shadow-sky-100 transition-all hover:shadow-sm hover:shadow-sky-200 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:shadow-none"
              className=" bg-[#009cf3] mr-3  hover:shadow-[inset_0_-2px_4px_rgba(0,0.5,0.5,0.5)] hover:bg-[#009cf3] transition delay-[50] ease-in-out"
              data-ripple-light="true"
            >
              Редактировать новость
              <Image
                src="/img/addnews.svg"
                alt="qe"
                className="pointer-events-none p-1"
                height={23}
                width={23}
              />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <TableNews></TableNews>
      </div>
    </div>
  );
}
