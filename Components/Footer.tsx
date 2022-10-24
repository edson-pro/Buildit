import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#486A6F]">
      <div className="max-w-5xl mx-auto px-3 grid grid-cols-4 gap-6 py-12">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-5 mb-3 text-sm text-white">
            <Link href="/">
              <a>
                <img src="/logo_text.png" alt="" />
              </a>
            </Link>
            <p>Development company</p>
          </div>
          <p className=" text-sm text-white">2022 Site design – ⏰ Alarm</p>
        </div>
        <div>
          <ul className="flex flex-col gap-5 mb-3 text-sm text-white">
            <li>
              <a href="">Service 1</a>
            </li>{" "}
            <li>
              <a href="">Service 2</a>
            </li>{" "}
            <li>
              <a href="">Service 3</a>
            </li>{" "}
            <li>
              <a href="">Service 4</a>
            </li>
          </ul>
          <div className="flex gap-2">
            <img src="/ig.png" alt="" />
            <img src="/fb.png" alt="" />
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-5 mb-3 text-sm text-white">
            <li>
              <a href="">About us</a>
            </li>{" "}
            <li>
              <a href="">Services</a>
            </li>{" "}
            <li>
              <a href="">Projects</a>
            </li>{" "}
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 mb-3 text-sm text-white">
          <p>Get in touch</p>
          <p>60 Manor Station St. Fairport, NY 14450</p>
          <p>708-790-0000 sales@buildit.site</p>
        </div>
      </div>
    </footer>
  );
}
