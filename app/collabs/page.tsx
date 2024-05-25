'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { collabData } from "../utils/data";
import { CardContainer, CardBanner, CardImage, CardTitle, CardDescription, CardLink, CardIcon } from "@/components/ui/Card";

export default function Home() {
  const ref = useRef(null);
  const content = collabData;
  const [multiCols, setMultiCols] = useState(false);

  let twoCols = multiCols ? 'md:grid-cols-2' : null;
  let threeCols = multiCols ? 'lg:grid-cols-3' : null;

  useEffect(() => {
    collabData.length > 2 ? setMultiCols(true) : setMultiCols(false);
  }, [multiCols])

  return (
    <main className="flex flex-col gap-5 p-10 min-h-screen items-center justify-start">
      <div className="relative rounded-full overflow-clip h-[100px] aspect-square shadow-lg outline">
        <Image src="/pfp.png" alt="Gionidude profile image" fill />
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-zinc-900 text-3xl font-bold">Gionidude</h1>
        <div>
          <div className="flex gap-5">
            <Link href="/" className="text-zinc-400 text-xl focus-visible:outline-black">Links</Link>
            <Link href="/collabs" className="text-zinc-900 text-xl focus-visible:outline-black">Collabs</Link>
          </div>
          <div className="w-full h-[1px] bg-zinc-400"></div>
        </div>
      </div>
      <div className={`grid grid-cols-1 place-items-center gap-5 max-w-[1320px] w-full ${twoCols} ${threeCols} p-6`}>
        {content.map((item, index) => (
          <motion.div
            ref={ref}
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <CardContainer href={item.href}>
              <CardBanner src={item.bannerImage} alt={item.bannerImageAlt} />
              <CardImage src={item.image} alt={item.imageAlt} />
              <CardTitle text={item.title} />
              <CardDescription text={item.description} />
              <CardLink url={item.url} />
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </main>
  );
};
