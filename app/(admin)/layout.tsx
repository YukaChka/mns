import { LoadingSkeleton } from "@/components/loader";
import { Suspense, type PropsWithChildren } from "react";
import Loading from "../loading";
import { AdminHeader } from "@/components/admin/header";
import { AdminNavbar } from "@/components/admin/navbar";

export default function AdminLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="">
      <div className="container">
        <div className="max-w-6xl">
          <AdminHeader />
          <AdminNavbar />

          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
    </div>
  );
}
