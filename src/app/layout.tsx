import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

import { NextAuthProvider } from "./lib/next-auth/provider";

const notoSansJP = Noto_Sans_JP(
  {
    subsets:["latin"], weight:["400"]
  }
);



export const metadata: Metadata = {
  title: "Book Commerce",
  description: "Test Test Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansJP.className} antialiased`}>

        <NextAuthProvider>
          <Header/>
          {children}
        </NextAuthProvider>
        
      </body>
    </html>
  );
}
