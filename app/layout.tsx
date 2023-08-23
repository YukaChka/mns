import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Montserrat } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Provider } from "@/components/providers";
import HeaderV2 from "@/components/headerV2";
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
        <Provider>
          <HeaderV2 />

          <main className="min-h-screen min-w-full">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
