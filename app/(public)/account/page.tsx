"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export default function AccountPage() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <main>
      <div>
        {user?.email}
        {user?.firstname}
        {user?.lastname}
        {user?.role}
      </div>
      <div>
        <Button
          onClick={() => signOut({ callbackUrl: `${window.location.origin}` })}
        >
          Выйти
        </Button>
      </div>
    </main>
  );
}
