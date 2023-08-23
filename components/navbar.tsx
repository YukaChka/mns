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

type NavbarProps = {
  width: number;
};

export function Navbar({ width }: NavbarProps) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            className=""
            src="/img/menu.svg"
            alt=""
            height={width < 900 ? 35 : 25}
            width={width < 900 ? 35 : 25}
          />
        </SheetTrigger>
        <SheetContent side="left" className="bg-[#009cf3]">
          <SheetHeader className="justify-center">
            <SheetTitle>
              <Image
                className=""
                src="/img/logo.svg"
                alt=""
                height={width < 900 ? 75 : 150}
                width={width < 900 ? 75 : 150}
                property="true"
              />
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4"></div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
