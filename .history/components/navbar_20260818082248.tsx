"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative px-5 py-5 md:px-[60px] md:py-[30px]">
      {/* Topbar mobile */}
      <div className="flex md:hidden items-center justify-between">
        <div className="font-instrument text-[32px]">
          <Link href="/#home">E.M.</Link>
        </div>
        <button
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className="text-3xl cursor-pointer"
        >
          ☰
        </button>
      </div>

      {/* Navbar desktop */}
      <div className="hidden md:flex items-center justify-between gap-10">
        <ul className="flex items-center gap-[18px] list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-base no-underline hover:opacity-80">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="min-w-[60px] text-center font-instrument text-[55px]">
          <a href="#home">E.M.</a>
        </div>

        <ul className="flex items-center gap-[18px] list-none">
          <li>
            
              href="https://www.instagram.com/webstudio.em"
              target="_blank"
              className="text-base no-underline hover:opacity-80"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a href="#faq" className="text-base no-underline hover:opacity-80">
              F.a.q
            </a>
          </li>
          <li>
            <Link href="/contact" className="text-base no-underline hover:opacity-80">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay + menu mobile */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-[9998] bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="fixed left-1/2 top-1/2 z-[9999] flex w-3/5 -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-xl bg-white px-10 py-[50px] shadow-2xl">
            <button
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 cursor-pointer border-none bg-transparent text-2xl text-black"
            >
              ✕
            </button>
            <ul className="m-0 flex list-none flex-col gap-7 p-0">
              {links.map((link) => (
                <li key={link.href}>
                  
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-instrument text-[22px] text-black no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                
                  href="https://www.instagram.com/webstudio.em"
                  target="_blank"
                  className="font-instrument text-[22px] text-black no-underline"
                >
                  Portfolio
                </a>
              </li>
              <li>
                
                  href="#faq"
                  onClick={() => setOpen(false)}
                  className="font-instrument text-[22px] text-black no-underline"
                >
                  F.a.q
                </a>
              </li>
              <li>
                <Link href="/contact" className="font-instrument text-[22px] text-black no-underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}