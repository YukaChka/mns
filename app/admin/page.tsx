"use client";
import { useSession } from "next-auth/react";
export default function AdminPage() {
  const session = useSession();

  return (
    <main>
      <p>{session.data?.user.expires}</p>
      <p>{session.data?.user.role}</p>
    </main>
  );
}
