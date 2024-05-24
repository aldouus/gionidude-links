import Image from "next/image";
import Link from "next/link";
import { CardContainer, CardImage } from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-10 min-h-screen items-center justify-start">
      <div className="relative rounded-full overflow-clip h-[100px] aspect-square shadow-lg outline">
        <Image src="/pfp.png" alt="Gionidude profile image" fill />
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-zinc-900 text-3xl font-bold">Gionidude</h1>
        <div>
          <div className="flex gap-5">
            <Link href="/" className="text-zinc-400 text-xl">Links</Link>
            <Link href="/collabs" className="text-zinc-900 text-xl">Collabs</Link>
          </div>
          <div className="w-full h-[1px] bg-zinc-400"></div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full max-w-[500px] p-6">
        <CardContainer href="#">
          <CardImage />
        </CardContainer>
      </div>
    </main>
  );
}
