import type { Metadata } from "next";
import "./globals.css";
import { ScrollTopBtn } from "@/component/scrollTopBtn/ScrollTopBtn";

export const metadata: Metadata = {
  title: "雑学エンジニアブログ | 雑多に学ぶプログラミング",
  description: "雑学エンジニアブログのtopです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <ScrollTopBtn/>
      </body>
    </html>
  );
}
