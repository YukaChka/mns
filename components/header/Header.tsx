//"use client";
import style from "./Header.module.css";
import Image from "next/image";
export default async function Header() {
  return (
    <header>
      <div>
        <Image
          src="/next.svg"
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <p>Header</p>
      </div>
    </header>
  );
}
