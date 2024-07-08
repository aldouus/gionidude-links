'use client';
import Links from "@/components/ui/LinkItem";
import Profile from "@/components/ui/Profile";
import { linkData } from "./utils/data";
import Tabs from "@/components/ui/Tabs";
import Footer from "@/components/ui/Footer";
import CookieConsent from "@/components/ui/CookieConsent";

export default function Home() {

  return (
    <main className="flex flex-col gap-5 sm:px-10 px-3 py-10 min-h-screen items-center justify-start">
      <Profile src="/pfp.png" />
      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-zinc-900 text-3xl font-bold">Gionidude</h1>
        <Tabs currentTab={0} />
      </div>
      <div className="flex flex-col gap-5 w-full max-w-[500px] p-6">
        <Links linkData={linkData} />
      </div>
      <Footer />
      <CookieConsent />
    </main>
  );
}
