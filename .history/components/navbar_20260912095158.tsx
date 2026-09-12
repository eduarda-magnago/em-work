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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={`fixed md:relative top-0 left-0 w-full z-[9990] px-10 md:px-[60px] transition-all duration-300 md:!bg-transparent md:!py-[30px] ${
        scrolled ? "bg-white py-3" : "bg-transparent py-7"
      }`}
    >
      <div className="flex md:hidden items-center justify-between">
        <div
          className={`font-instrument transition-all duration-300 ${
            scrolled ? "text-[32px] text-black" : "text-[48px] text-white"
          }`}
        >
          <Link href="/">E.M.</Link>
        </div>
        <button
          onClick={() => setOpen(true)}
          className={`cursor-pointer transition-all duration-300 ${
            scrolled ? "text-xl text-black" : "text-3xl text-white"
          }`}
        >
          ☰
        </button>
      </div>

      <div className="hidden md:flex items-center justify-between gap-10">
        <ul className="flex items-center gap-[18px] list-none">
          <li><Link href="/#home" className="text-base no-underline">Home</Link></li>
          <li><Link href="/#about" className="text-base no-underline">About</Link></li>
          <li><Link href="/#services" className="text-base no-underline">Services</Link></li>
        </ul>

        <div className="min-w-[60px] text-center font-instrument text-[55px]">
          <Link href="/">E.M.</Link>
        </div>

        <ul className="flex items-center gap-[18px] list-none">
          <li><a href="https://www.instagram.com/webstudio.em" target="_blank" className="text-base no-underline">Portfolio</a></li>
          <li><Link href="/#faq" className="text-base no-underline">F.a.q</Link></li>
          <li><Link href="/contact" className="text-base no-underline">Contact</Link></li>
        </ul>
      </div>

      {open && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-8 top-8 text-3xl text-black"
          >
            ✕
          </button>
          <ul className="flex list-none flex-col items-center gap-9">
            <li><Link href="/#home" onClick={() => setOpen(false)} className="font-instrument text-[28px] text-black no-underline">Home</Link></li>
            <li><Link href="/#about" onClick={() => setOpen(false)} className="font-instrument text-[28px] text-black no-underline">About</Link></li>
            <li><Link href="/#services" onClick={() => setOpen(false)} className="font-instrument text-[28px] text-black no-underline">Services</Link></li>
            <li><a href="https://www.instagram.com/webstudio.em" target="_blank" className="font-instrument text-[28px] text-black no-underline">Portfolio</a></li>
            <li><Link href="/#faq" onClick={() => setOpen(false)} className="font-instrument text-[28px] text-black no-underline">F.a.q</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)} className="font-instrument text-[28px] text-black no-underline">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}