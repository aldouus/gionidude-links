import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
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
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics 
          beforeSend={(event) => {
            if (event.url.includes('/collabs')) {
              return null;
            }
            if (event.url.includes('/privacy-policy')) {
              return null;
            }
            return event;
          }}
        />
      </body>
    </html>
  );
}
