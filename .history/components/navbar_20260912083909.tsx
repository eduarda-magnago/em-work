"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed md:relative top-0 left-0 w-full z-[9990] px-6 md:px-[60px] transition-all duration-300 ${
        scrolled ? "bg-white py-3" : "bg-transparent py-7 md:py-[30px]"
      }`}
    >
      <div className="flex md:hidden items-center justify-between">
        <div
          className={`font-instrument text-[42px] transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <Link href="/#home">E.M.</Link>
        </div>
        <button
          onClick={() => setOpen(true)}
          className={`text-3xl cursor-pointer transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          ☰
        </button>
      </div>

      <div className="hidden md:flex items-center justify-between gap-10">
        <ul className="flex items-center gap-[18px] list-none">
          <li><a href="#home" className="text-base no-underline">Home</a></li>
          <li><a href="#about" className="text-base no-underline">About</a></li>
          <li><a href="#services" className="text-base no-underline">Services</a></li>
        </ul>

        <div className="min-w-[60px] text-center font-instrument text-[55px]">
          <a href="#home">E.M.</a>
        </div>

        <ul className="flex items-center gap-[18px] list-none">
          <li><a href="https://www.instagram.com/webstudio.em" target="_blank" className="text-base no-underline">Portfolio</a></li>
          <li><a href="#faq" className="text-base no-underline">F.a.q</a></li>
          <li><Link href="/contact" className="text-base no-underline">Contact</Link></li>
        </ul>
      </div>

      {open && (
        <div className="fixed inset-0 z-[9998] bg-black/40" onClick={() => setOpen(false)}>
          <div className="fixed left-1/2 top-1/2 z-[9999] flex w-3/5 -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-xl bg-white px-10 py-[50px] shadow-2xl">
            <button onClick={() => setOpen(false)} className="absolute right-6 top-6 text-2xl text-black">✕</button>
            <ul className="flex list-none flex-col gap-7">
              <li><a href="#home" onClick={() => setOpen(false)} className="font-instrument text-[22px] text-black no-underline">Home</a></li>
              <li><a href="#about" onClick={() => setOpen(false)} className="font-instrument text-[22px] text-black no-underline">About</a></li>
              <li><a href="#services" onClick={() => setOpen(false)} className="font-instrument text-[22px] text-black no-underline">Services</a></li>
              <li><a href="https://www.instagram.com/webstudio.em" target="_blank" className="font-instrument text-[22px] text-black no-underline">Portfolio</a></li>
              <li><a href="#faq" onClick={() => setOpen(false)} className="font-instrument text-[22px] text-black no-underline">F.a.q</a></li>
              <li><Link href="/contact" className="font-instrument text-[22px] text-black no-underline">Contact</Link></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}