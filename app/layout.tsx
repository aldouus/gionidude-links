import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Gionidude &apos; s Links</title>
        <meta name="description" content="Gionidude's social links and collabs" />
        <meta property="og:image" content="/public/pfp.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
