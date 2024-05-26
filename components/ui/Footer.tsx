import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex gap-5 p-7 text-zinc-500 text-xs">
      <Link href="/privacy-policy">Privacy Policy</Link>
    </div>
  )
};