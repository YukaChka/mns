import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminPage() {
  return (
    <div>
      <div>
        <div className=" mt-10">
          <Button
            variant="default"
            className="middle none center  bg-[#ffff] hover:bg-[#ffff] py-3.5 px-7 font-sans text-sm font-bold uppercase text-black shadow-md shadow-gray transition-all hover:shadow-md  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-md border"
            data-ripple-light="true"
          >
            Добавить
          </Button>
        </div>

        <div className="mb-3 mt-10">
          <div className=" mb-4 flex w-full flex-wrap ">
            <span
              className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <Input
              type="search"
              className="relative m-0 block w-[1px] min-w-0 flex-auto rounded  border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out   "
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
