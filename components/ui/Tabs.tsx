import Link from "next/link";

const Tabs = ({ currentTab }: { currentTab: number }) => {
  const tabs = [
    { name: 'Links', href: '/' },
    { name: 'Collabs', href: '/collabs' },
  ];

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-5">
        {tabs.map((tab, index) => (
          <Link
            key={index}
            href={tab.href}
            className={`${index === currentTab ? 'text-zinc-900' : 'text-zinc-400'} text-xl focus-visible:outline-black`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      <div className="w-full h-[1px] bg-zinc-400"></div>
    </div>
  );
}

export default Tabs;
