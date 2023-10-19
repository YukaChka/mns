"use client";
import { Navbar } from "./navbar";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { time } from "console";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const HeaderV2 = () => {
  const { width, height } = useWindowSize();
  const [open, setOpen] = useState(false);
  const session = useSession();
  const router = usePathname();

  useEffect(() => {
    if (session) {
      setTimeout(() => setOpen(true), 200);
    }
  }, []);

  return (
    <header>
      <div>
        <div className="container w-full mt-8">
          {open && (
            <ul className="md:h-auto  justify-center  flex items-center  mr-auto">
              <li className="font-semibold text-base mr-auto ml-auto lg:text-sm ">
                <Navbar width={width} />
              </li>
              {router !== "/" ? (
                <li className="font-semibold text-base mr-auto ml-auto  lg:text-sm">
                  <Link href="/">
                    <Image
                      className=""
                      src="/img/logo.svg"
                      alt=""
                      height={width < 900 ? 75 : 50}
                      width={width < 900 ? 75 : 50}
                      property="true"
                      priority
                    />
                  </Link>
                </li>
              ) : (
                <></>
              )}
              {session.data?.user.role !== "админ" ? (
                <>
                  {width > 800 ? (
                    <li className="font-semibold text-base mr-auto ml-auto lg:text-sm">
                      <Button
                        variant="default"
                        className="middle none center rounded-lg bg-[#009cf3] hover:bg-[#009cf3] py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-md shadow-sky-100 transition-all hover:shadow-lg hover:shadow-sky-200 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                      >
                        приобрести
                      </Button>
                    </li>
                  ) : (
                    <li className="font-semibold text-base mr-auto ml-auto lg:text-sm">
                      <Button
                        variant="default"
                        className="middle none center rounded-lg bg-[#009cf3] hover:bg-[#009cf3] py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-md shadow-sky-100 transition-all hover:shadow-lg hover:shadow-sky-200 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                      >
                        купить
                      </Button>
                    </li>
                  )}
                </>
              ) : null}

              {width > 800 ? (
                <li className="font-semibold text-base mr-auto ml-auto lg:text-sm">
                  <Link href="/product">Продукты</Link>
                </li>
              ) : null}
              {width >= 950 ? (
                <li className="font-semibold text-base mr-auto ml-auto lg:text-sm">
                  <Link href="/decisions">Решения</Link>
                </li>
              ) : null}
              {width > 1080 ? (
                <li className="font-semibold text-base mr-auto ml-auto lg:text-sm">
                  <Link href="/about">О нас</Link>
                </li>
              ) : null}

              {width > 1440 && session.data?.user.role !== "админ" ? (
                <li className="font-normal text-base  mr-auto ml-auto ">
                  +7 (495) 223-89-86 <br />
                  phonex@megatel.ru
                </li>
              ) : null}
              {session.data?.user.role === "админ" ? (
                <>
                  {width > 400 ? (
                    <li className="font-semibold text-base mr-auto ml-auto  lg:text-sm">
                      <Link href="/posts">Панель админа</Link>
                    </li>
                  ) : null}

                  <li className="font-semibold text-[#009cf3] text-base mr-auto ml-auto lg:text-sm">
                    <Button
                      variant="link"
                      onClick={() => signOut()}
                      className="text-[#009cf3]"
                    >
                      Выйти
                    </Button>
                  </li>
                </>
              ) : null}
            </ul>
          )}
        </div>

        <div>{width}</div>
      </div>
    </header>
  );
};
export default HeaderV2;
