import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

type CardsProps = {
  collabData: any[],
}

type CardContainerProps = {
  href: string,
  children: React.ReactNode,
}

type CardBannerProps = {
  src: string,
  alt: string,
}

type CardImageProps = {
  src: string,
  alt: string,
}

type CardTitleProps = {
  text: string,
}

type CardDescriptionProps = {
  text: string
}

type CardLinkProps = {
  url: string,
}

const Cards = ({ collabData }: CardsProps) => {
  const ref = useRef(null);
  const content = collabData;

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
          <CardContainer href={item.href}>
            <CardBanner src={item.bannerImage} alt={item.bannerImageAlt} />
            <CardImage src={item.image} alt={item.imageAlt} />
            <CardTitle text={item.title} />
            <CardDescription text={item.description} />
            <CardLink url={item.url} />
            <CardIcon />
          </CardContainer>
        </motion.div>
      ))}
    </>
  )
}

const CardContainer = (props: CardContainerProps) => {
  return (
    <Link href={props.href} target="_blank" className="flex flex-col gap-3 pt-[4rem] items-start justify-start relative h-[350px] max-w-[400px] w-full outline outline-1 outline-zinc-400 rounded-3xl overflow-clip p-5 bg-white isolate focus-visible:outline-2 focus-visible:outline-black shadow-md hover:shadow-inner hover:shadow-zinc-300 hover:scale-[0.99] transition-transform duration-250">{props.children}</Link>
  )
}

const CardBanner = (props: CardBannerProps) => {
  return (
    <div className="absolute -z-10 top-0 left-0 w-full h-[140px] overflow-clip outline outline-1 outline-zinc-300 shadow-md">
      <Image src={props.src} alt={props.alt} sizes="max-width: 512px" fill={true} priority={true} className="object-cover max-w-full" />
    </div>
  )
}

const CardImage = (props: CardImageProps) => {
  return (
    <div className="relative h-[100px] aspect-square bg-white rounded-2xl overflow-clip outline outline-1 outline-zinc-300 shadow-md">
      <Image src={props.src} alt={props.alt} sizes="max-width: 128px" fill={true} className="object-contain max-w-full p-2" />
    </div>
  )
}

const CardTitle = (props: CardTitleProps) => {
  return (
    <h2 className="text-xl font-bold">{props.text}</h2>
  )
}

const CardDescription = (props: CardDescriptionProps) => {
  return (
    <p className="text-zinc-900">{props.text}</p>
  )
}

const CardLink = (props: CardLinkProps) => {
  return (
    <p className="text-zinc-500">{props.url}</p>
  )
}

const CardIcon = () => {
  return (
    <div className="flex items-center p-[1.8rem] aspect-square absolute bottom-0 right-0">
      <svg className="fill-zinc-400" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 20 20" width="20">
        <g>
          <rect fill="none" height="20" width="20" /></g>
        <g>
          <polygon points="5,5 5,6.5 12.44,6.5 4,14.94 5.06,16 13.5,7.56 13.5,15 15,15 15,5" />
        </g>
      </svg>
    </div>
  )
}

export default Cards;