import Link from "next/link";
import React from "react";

export default function Button({ children, href, variant = "primary" }: any) {
  const Element = href ? "a" : "button";
  const variants: any = {
    danger: "bg-red-500 text-white",
    primary: "bg-primary text-white",
    normal: "bg-[#C6DBFF] text-primaryDark",
  };
  return (
    <Link href={href ? href : {}}>
      <Element
        onClick={(event) => (!href ? event.preventDefault() : onclick)}
        className={`px-6 py-[10px] text-center text-sm font-semibold rounded-[4px] ${variants[variant]} `}
      >
        {children}
      </Element>
    </Link>
  );
}
