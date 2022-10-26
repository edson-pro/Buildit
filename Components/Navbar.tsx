import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  const links = [
    { link: "/about", title: "About" },
    { link: "/services", title: "Services" },
    { link: "/projects", title: "Projects" },
    { link: "/contact", title: "Contact" },
  ];
  return (
    <nav className="absolute w-full z-10 bg-transparent ">
      <div className=" max-w-5xl flex py-2 items-center justify-between mx-auto px-3">
        <Link href="/">
          <a>
            <img className="h-12" src="/logo.png" alt="logo" />
          </a>
        </Link>
        <ul className="flex items-center gap-4">
          {links.map((e, index) => {
            return (
              <li key={index}>
                <Link href="/about">
                  <a className=" text-sm text-primary">{e.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <Button href="/need-a-project">Need a project</Button>
        </div>
      </div>
    </nav>
  );
}
