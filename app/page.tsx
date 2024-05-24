'use client';
import { LinkContainer, LinkImage, LinkText, LinkIcon } from "@/components/ui/LinkItem";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { linkData } from "./utils/data";

export default function Home() {
  const ref = useRef(null);
  const content = linkData

  return (
    <main className="flex flex-col gap-5 p-10 min-h-screen items-center justify-start">
      <div className="relative rounded-full overflow-clip h-[100px] aspect-square shadow-lg outline">
        <Image src="/pfp.png" alt="Gionidude profile image" fill />
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-zinc-900 text-3xl font-bold">Gionidude</h1>
        <div>
          <div className="flex gap-5">
            <Link href="/" className="text-zinc-900 text-xl">Links</Link>
            <Link href="/collabs" className="text-zinc-400 text-xl">Collabs</Link>
          </div>
          <div className="w-full h-[1px] bg-zinc-400"></div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full max-w-[500px] p-6">
        {content.map((item, index) => (
          <motion.div
            ref={ref}
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <LinkContainer href={item.href}>
              <LinkImage src={item.image} alt={item.imageAlt} />
              <LinkText text={item.text} />
              <LinkIcon />
            </LinkContainer>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
