import type { Metadata } from "next";
import "./globals.css";

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
      </body>
    </html>
  );
}