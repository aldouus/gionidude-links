import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col gap-3 items-center justify-start min-h-screen p-8">
      <Link href="/" className="absolute top-0 left-0 p-7 underline">Back</Link>
      <div className="flex flex-col gap-3 max-w-[700px] text-zinc-900 font-mono">
        <h1 className="text-6xl font-bold pt-5">Privacy Policy</h1>
        <p className="text-zinc-500">25. May 2024</p>

        <h2 className="text-xl pt-3 font-bold underline">Introduction</h2>
        <p className="text-sm">Welcome to Gionidude&apos;s Links (the &quot;Website&quot;). Your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.</p>

        <h2 className="text-xl pt-3 font-bold underline">Information We Collect</h2>
        <p className="text-sm">We do not intentionally collect personal data from users. However, certain information may be collected automatically:</p>
        <ul className="flex flex-col gap-3 list-disc text-sm ml-5">
          <li><strong>Server Logs:</strong> Our web server may log IP addresses, browser types, access times, and referring URLs.</li>
          <li><strong>Cookies:</strong> We may use cookies to enhance the user experience.</li>
        </ul>

        <h2 className="text-xl pt-3 font-bold underline">Third-Party Services</h2>
        <p className="text-sm">Our Website contains links to social media platforms such as Tiktok, YouTube, Twitch, Kick and Instagram. These platforms may collect data according to their privacy policies.</p>
        <p className="text-sm">We may also use third-party services for web hosting and analytics, which might collect and process data on our behalf.</p>

        <h2 className="text-xl pt-3 font-bold underline">User Rights</h2>
        <p className="text-sm">Under Swiss law and the General Data Protection Regulation (GDPR), you have the following rights:</p>
        <ul className="flex flex-col gap-3 list-disc text-sm ml-5">
          <li><strong>Right to Access:</strong> You can request access to your personal data.</li>
          <li><strong>Right to Rectification:</strong> You can request corrections to your personal data.</li>
          <li><strong>Right to Erasure:</strong> You can request the deletion of your personal data.</li>
        </ul>

        <h2 className="text-xl pt-3 font-bold underline">Contact Us</h2>
        <p className="text-sm">If you have any questions or concerns about this Privacy Policy, please contact us at: <a href="mailto:privacy@gionidude.com" className="underline">privacy@gionidude.com</a></p>

        <h2 className="text-xl pt-3 font-bold underline">Changes to This Privacy Policy</h2>
        <p className="text-sm">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
      </div>
    </main>
  )
}