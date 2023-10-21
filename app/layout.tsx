import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Provider } from "@/components/providers";
import HeaderV2 from "@/components/headerV2";
import { FooterV2 } from "@/components/footerV2";

import { Suspense } from "react";
import { LoadingSkeleton } from "@/components/loader";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Megatel",
};

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Suspense fallback={<LoadingSkeleton />}>
          <Provider>
            <HeaderV2 />
            <main className="min-h-screen min-w-full">{children}</main>
            <FooterV2 />
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
