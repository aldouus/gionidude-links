'use client';
import React from "react";
import { hasCookie, setCookie } from 'cookies-next';
import Link from "next/link";
import { motion } from 'framer-motion';

export default function CookieConsent() {

  const [showConsent, setShowConsent] = React.useState(true);
  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie('localConsent', 'true', {});
  };

  if (showConsent) {
    return null;
  };

  return (
    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.25, type: 'spring' }} className="fixed bottom-5 flex items-center gap-3 justify-between p-3 pl-8 sm:pl-5 bg-white outline outline-1 outline-zinc-400 shadow-md rounded-full overflow-clip z-[999] mx-5">
      <span className="text-sm text-zinc-900">We use cookies to enhance your experience. By using our site, you agree to our <Link href="/privacy-policy" className="underline text-blue-400">Privacy Policy</Link></span>
      <button className="bg-zinc-900 text-white rounded-full p-3" onMouseDown={() => acceptCookie()}>Accept</button>
    </motion.div>
  )
}