"use client";
import {Textarea} from "@/components/ui/textarea"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
type CreateOrEditNewsPageProps = {
  params: {
    id: number | string;
  };
};

export default function CreateOrEditNewsPage({
  params: { id },
}: CreateOrEditNewsPageProps) {
  const router = useRouter();
  let isEdit = "create a new post";
  if (typeof id == "string" && id !== "new") {
    try {
      console.log(parseInt(id));
      isEdit = `Edit post ${id}`;
      if (isNaN(parseInt(id))) {
        router.push("/404");
      }
    } catch (error) {
      router.push("/404");
    }
  }

  return (
    <div>
      <div className="">
        <div className="container justify-center">
          <div className="max-w-6xl">
            <div className="grid grid-cols-2 mt-10">
              <div className=" text-md md:text-4xl font-semibold  ">
                Создать новость
              </div>
              <div className=" text-end text-[#009cf3]  text-sm md:text-xl">
                Вернуться обратно
              </div>
            </div>
            <div>
              <div className="mb-3 mt-10">
                <div className=" mb-4 flex w-full flex-wrap ">
                  <Input
                    type="search"
                    className="relative m-0 block w-[1px] min-w-0 flex-auto rounded  border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out   "
                    placeholder="Заголовок"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                </div>
                <div className=" mb-4 flex w-full flex-wrap ">
                  <Textarea
                    className="h-72 relative m-0 block min-w-0 flex-auto rounded  border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out"
                    placeholder="Новость"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                </div>

                <div className="mb-3">
                  <Input
                    className="multiple relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                </div>
                <Button
                  variant="default"
                  className="mr-5 middle none center rounded-lg bg-[#009cf3] hover:bg-[#009cf3] py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-sm shadow-sky-100 transition-all hover:shadow-sm hover:shadow-sky-200 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:shadow-none"
                  data-ripple-light="true"
                >
                  Опубликовать
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
