import Link from "next/link";
import Markdown from "react-markdown";
import fs from "fs";
import path from "path";
import components from "./components";

const filePath = path.join(process.cwd(), 'app/privacy-policy/content.md');
const content = fs.readFileSync(filePath, 'utf-8');

export default function Page() {

  return (
    <main className="flex flex-col gap-3 items-center justify-start min-h-screen pt-12 p-8">
      <Link href="/" className="absolute top-0 left-0 p-7 underline">Back</Link>
      <div className="flex flex-col gap-3 max-w-[700px] text-zinc-900 font-mono">
        <Markdown
          components={components}
        >
          {content}
        </Markdown>
      </div>
    </main>
  )
}
