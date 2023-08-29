import type { PropsWithChildren } from "react";

export default function AdminLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      <div>Панель администратора</div>
      <div>header для навигации</div>
      {children}
    </div>
  );
}
