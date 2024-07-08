'use client';
import Cards from "@/components/ui/Card";
import Profile from "@/components/ui/Profile";
import { useEffect, useRef, useState } from "react";
import Tabs from "@/components/ui/Tabs";
import { collabData } from "../utils/data";
import Footer from "@/components/ui/Footer";

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
      <Profile src="/pfp.png" />
      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-zinc-900 text-3xl font-bold">Gionidude</h1>
        <Tabs currentTab={1} />
      </div>
      <div className={`grid grid-cols-1 place-items-center gap-5 max-w-[1320px] w-full ${twoCols} ${threeCols} p-6`}>
        <Cards collabData={collabData} />
      </div>
      <Footer />
    </main>
  );
};
