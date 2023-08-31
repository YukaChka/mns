"use client";

import Link from "next/link";

export function AdminNavbar() {
  return (
    <div>
      <ul className="grid grid-cols-3 mt-10 ">
        <li className="text-md md:text-2xl">
          <Link href="/admin/new">Новости</Link>
        </li>
        <li className="text-md md:text-2xl">
          <Link href="/admin/orders">Заказы</Link>
        </li>
      </ul>
    </div>
  );
}
