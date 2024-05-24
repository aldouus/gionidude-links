import Link from "next/link";

type CardContainerProps = {
  href: string,
  children: React.ReactNode,
}

const CardContainer = (props: CardContainerProps) => {
  return (
    <Link href={props.href}>{props.children}</Link>
  )
}

const CardImage = () => {
  return (
    <div>image</div>
  )
}

export { CardContainer, CardImage };