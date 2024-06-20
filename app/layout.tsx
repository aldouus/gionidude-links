import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gionidude's Links",
  description: "Social Links for Gionidude's channels",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script defer src="https://cloud.umami.is/script.js" data-website-id="0ac100d7-c16b-4c7a-a4bf-2851843b7ada" />
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
    </>
  );
}
