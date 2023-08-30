import { LoadingSkeleton } from "@/components/loader";
import { Suspense, type PropsWithChildren } from "react";
import Loading from "../loading";

export default function AdminLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      <div>Панель администратора</div>
      <div>header для навигации</div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
