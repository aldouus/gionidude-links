'use client';
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

type LinksProps = {
  linkData: any[],
}

type LinkContainerProps = {
  children: React.ReactNode,
  href: string,
};

type LinkImageProps = {
  src: string,
  alt: string,
};

type LinkTextProps = {
  text: string,
};

const Links = ({ linkData }: LinksProps) => {
  const ref = useRef(null);
  const content = linkData


  return (
    <>
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
    </>
  )
}

const LinkContainer = ({ children, href }: LinkContainerProps) => {

  return (
    <Link href={href} target="_blank" className="flex relative items-center overflow-clip p-3 gap-3 h-[75px] w-full rounded-3xl bg-white shadow-lg outline outline-1 outline-zinc-300 focus-visible:outline-offset-4 focus-visible:outline-zinc-900 focus-visible:outline-2 hover:shadow-inner hover:scale-[0.99] transition-transform duration-250">{children}</Link>
  )
};

const LinkImage = (props: LinkImageProps) => {
  return (
    <div className="relative h-full aspect-square bg-white rounded-2xl outline outline-1 outline-zinc-300 shadow-md">
      <Image src={props.src} alt={props.alt} sizes="max-width: 128px" fill={true} className="object-contain max-w-full p-3" />
    </div>
  )
};

const LinkText = (props: LinkTextProps) => {
  return (
    <p className="text-zinc-900 text-lg">{props.text}</p>
  )
};

const LinkIcon = () => {
  return (
    <div className="flex items-center h-full aspect-square absolute right-0">
      <svg className="fill-zinc-900 w-full" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 20 20" width="20">
        <g>
          <rect fill="none" height="20" width="20" /></g>
        <g>
          <polygon points="5,5 5,6.5 12.44,6.5 4,14.94 5.06,16 13.5,7.56 13.5,15 15,15 15,5" />
        </g>
      </svg>
    </div>
  )
}

export default Links;