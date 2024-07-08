import Link from "next/link";
import React from "react";

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-3xl font-bold pt-5" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-xl pt-3 font-bold" {...props} />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link className="underline text-purple-800" href={props.href ?? "#"}>
      {props.children}
    </Link>
  ),
};

export default components;
