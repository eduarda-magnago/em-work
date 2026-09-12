"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contactform";

export default function Contact() {
  useEffect(() => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "instant" as ScrollBehavior });
    }
  }, []);

  return (
    <>
      <div
        id="home"
        className="relative h-[550px] bg-cover bg-center md:h-screen"
        style={{ backgroundImage: "url('/img/arvores.jpg')" }}
      >
        <Navbar />

        <div className="absolute left-1/2 top-1/2 mt-6 w-full -translate-x-1/2 -translate-y-1/2 px-5">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="font-cardo text-base font-bold md:text-lg">
              Web Design & Development Studio
            </p>
            <h1 className="my-2 font-instrument text-[45px] font-normal leading-[0.9] md:text-[80px]">
              Creating websites with
              <br /> another and unique view
            </h1>
          </div>
        </div>
      </div>

      <section className="flex items-center justify-center bg-brandgray px-5 py-[82px] text-center">
        <p className="max-w-[1200px] font-instrument text-2xl leading-[30px] md:text-[35px] md:leading-[40px]">
          We create websites that reflect the soul of your brand: elegant, intentional,
          and timeless. Whether you&apos;re starting fresh or reinventing your digital
          presence, we turn ideas into experiences.
        </p>
      </section>

      <section id="contact" className="mx-auto max-w-[800px] bg-white px-5 py-[60px] text-ink">
        <h1 className="mb-5 font-instrument text-[36px] text-ink">Contact</h1>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          Everything starts with an idea. Maybe you&apos;re ready to launch your
          business. Maybe you want to turn a passion into something more. Fill out the
          form and tell me a bit about your project — I&apos;ll get back to you as soon
          as possible.
        </p>

        <ContactForm />
      </section>

      <Footer />
    </>
  );
}