"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
export function AdminNavbar() {
  const path = usePathname();

  return (
    <div>
      <ul className="grid grid-cols-3 mt-10 ">
        <li className="text-md md:text-2xl ">
          <Link href="/posts">
            {path === "/posts" ? (
              <Button
                variant="link"
                className="text-md md:text-2xl text-[#009cf3] underline "
              >
                Новости
              </Button>
            ) : (
              <Button
                variant="link"
                className="text-md md:text-2xl hover:text-[#009cf3]"
              >
                Новости
              </Button>
            )}
          </Link>
        </li>
        <li className="text-md md:text-2xl">
          <Link href="/orders">
            {path === "/orders" ? (
              <Button
                variant="link"
                className="text-md md:text-2xl text-[#009cf3] underline "
              >
                Заказы
              </Button>
            ) : (
              <Button
                variant="link"
                className="text-md md:text-2xl hover:text-[#009cf3]"
              >
                Заказы
              </Button>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
}
