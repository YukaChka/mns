"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

import { useEffect, useState } from "react";

import { LoginForm } from "@/components/forms/loginForm";
import { LoginAndRegistrationToast } from "@/components/toasts/LoginAndRegistrationToast";
import { usePathname, useRouter } from "next/navigation";

type NavbarProps = {
  width: number;
};

export function Navbar({ width }: NavbarProps) {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Image
            className="hover:cursor-pointer"
            src="/img/menu.svg"
            alt=""
            height={width < 900 ? 40 : 35}
            width={width < 900 ? 40 : 35}
          />
        </SheetTrigger>
        <SheetContent side="left" className="bg-[#009cf3]">
          <SheetHeader className="justify-center">
            <SheetTitle>
              <Link
                href="/"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Image
                  className="mx-auto mb-[7%]"
                  src="/img/logo.svg"
                  alt=""
                  height={width < 900 ? 75 : 150}
                  width={width < 900 ? 75 : 150}
                  property="true"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 gap-5">
              <div className="text-white text-[17px]  md:text-xl">
                <Link href="/" onClick={() => setOpen(false)}>
                  На главную
                </Link>
              </div>
              <div className="text-white text-[17px]  md:text-xl">
                <Link
                  href="/news"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Новости
                </Link>
              </div>
              <div className="text-white text-[17px]  md:text-xl">
                <Link href="/product" onClick={() => setOpen(false)}>
                  Продукты
                </Link>
              </div>
              <div className="text-white text-[17px]  md:text-xl">
                <Link href="/decisions" onClick={() => setOpen(false)}>
                  Решения
                </Link>
              </div>
              <div className="text-white text-[17px]  md:text-xl">
                <Link href="/education" onClick={() => setOpen(false)}>
                  Обучение
                </Link>
              </div>
              <div className="text-white text-[17px]  md:text-xl">
                <Link href="/education" onClick={() => setOpen(false)}>
                  Дополнительные услуги
                </Link>
              </div>
              <div className="text-white text-[17px]  md:text-xl">
                <Link href="/support" onClick={() => setOpen(false)}>
                  Поддержка
                </Link>
              </div>
              <div className="mr-auto text-white text-[17px]  md:text-xl">
                {session ? (
                  <Link href="/account" onClick={() => setOpen(false)}>
                    Личный кабинет
                  </Link>
                ) : (
                  <Link href="/signin">Войти</Link>
                )}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
