"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "How long it takes to build a website?",
    answer:
      "It depends on the scope of your project, but usually between 2 to 6 weeks. Some timelines can be shorter or longer depending on feedback and content readiness.",
  },
  {
    question: "Do I need a brand identity before starting?",
    answer:
      "Not necessarily. If you already have one, great! If not, we can guide you or recommend trusted professionals to create it for you.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "It depends on the type of service you need. It could be a full custom website, a redesign, or just copywriting. The final cost also varies based on where you choose to register your domain and host your website. I'll always provide a personalized quote after understanding your project's goals and technical needs.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Absolutely! All of our designs are fully responsive and optimized for phones, tablets, and desktops.",
  },
  {
    question: "How can I realize my first meeting?",
    answer: "You can book your intro call directly through our contact form.",
  },
  {
    question: "Which tools do you use to build the websites?",
    answer:
      "I primarily use modern web development technologies like HTML, CSS, and JavaScript to create custom, high-performance websites. Depending on the project and the client's needs, I can also work with platforms like Squarespace and Shopify, which are great for specific use cases such as e-commerce or portfolio websites. The choice of tools always depends on what's best for the project, whether it's fully custom code or a platform that helps streamline the process while still delivering a professional result.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-reveal mx-auto max-w-[1000px] pl-5 md:pl-10">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question} className="border-b border-[#ccc]">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent py-4 text-left font-newsreader text-lg text-[#131313]"
            >
              {faq.question}
              <Image
                src="/img/seta.png"
                alt="seta"
                width={10}
                height={10}
                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="pb-4 font-newsreader text-[15px] leading-relaxed text-[#333] md:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}