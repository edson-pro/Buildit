import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" bg-transparent ">
      <div className=" max-w-5xl flex py-2 items-center justify-between mx-auto px-3">
        <Link href="/">
          <a>
            <img className="h-12" src="/logo.png" alt="" />
          </a>
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/about">
              <a className="nav-icon">About</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a className="nav-icon">Services</a>
            </Link>
          </li>
          <li>
            <Link href="/project">
              <a className="nav-icon">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="nav-icon">Contact</a>
            </Link>
          </li>
        </ul>
        <div>
          <Link href="/need-a-project">
            <a className="button">Need a project</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
