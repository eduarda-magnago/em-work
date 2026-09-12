import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="relative h-[550px] bg-cover bg-center md:h-screen"
        style={{ backgroundImage: "url('/img/arvores.jpg')" }}
      >
        <Navbar />

        <div className="font-newsreader absolute left-1/2 top-1/2 mt-6 w-full -translate-x-1/2 -translate-y-1/2 px-5">
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
          and timeless. Whether you're starting fresh or reinventing your digital
          presence, we turn ideas into experiences.
        </p>
      </section>

      <section className="flex flex-col text-ink lg:max-h-[600px] lg:flex-row lg:items-stretch">
        <div className="relative aspect-[3/4] lg:aspect-auto lg:max-h-[600px] lg:flex-[0_0_33.33%]">
          <Image
            src="/img/copo.jpeg"
            alt="Imagem representando presença online"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-5 py-15 lg:flex-[0_0_66.66%] lg:px-[50px] lg:py-16">
          <h2 className="mb-5 font-instrument text-[42px] font-normal text-ink lg:text-[60px]">
            Why do we need a website?
          </h2>
          <div className="flex flex-col gap-5">
            <p className="font-newsreader text-xl leading-[30px] text-ink lg:leading-[38px]">
              Your website is your home on the internet. It's where first impressions
              are made, trust is built, and conversions happen. A well-designed website
              works for you — 24/7 — showcasing your brand, telling your story, and
              driving results.
            </p>
            <p className="font-newsreader text-xl leading-[30px] text-ink lg:leading-[38px]">
              In a digital-first world, a strong online presence is no longer optional —
              it's essential. Your website allows customers to discover you,
              understand what you offer, and connect with your purpose. It's your
              most powerful marketing tool.
            </p>
            <p className="font-newsreader text-xl leading-[30px] text-ink lg:leading-[38px]">
              Beyond just visuals, your website is a reflection of your values and
              vision. It shows that you're serious about your business, ready to
              grow, and committed to delivering quality. A beautiful, functional site
              gives you credibility and a competitive edge.
            </p>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="flex min-h-[50px] flex-col items-center justify-center bg-cover bg-center px-5 pb-10 pt-2 text-center md:px-[70px] md:pb-[70px]"
        style={{ backgroundImage: "url('/img/agua.jpeg')" }}
      >
        <p className="mb-5 mt-2 font-instrument text-[50px] font-normal md:mb-[35px] md:mt-10 md:text-[80px]">
          Our Services
        </p>
        <p className="mx-auto max-w-none px-2 text-left font-newsreader text-xl leading-snug md:max-w-[1200px] md:px-0 md:text-center md:text-[30px]">
          Whether you're just starting out, rebranding, or simply refining your
          digital presence, we offer thoughtful, handcrafted solutions tailored to your
          needs. From custom websites to detailed audits, we approach every project with
          care, creativity, and an obsession with quality.
        </p>
      </section>

      <section className="bg-white px-10 py-15 text-ink">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-stretch gap-5 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          <div className="flex h-full flex-col justify-between bg-white px-5 text-left">
            <h3 className="mb-1 font-instrument text-2xl font-normal text-ink">
              Design (UX/UI)
            </h3>
            <p className="font-newsreader text-[17px] leading-relaxed text-[#333]">
              Creating intuitive and engaging user experiences that drive conversion and
              satisfaction.
            </p>
          </div>
          <div className="flex h-full flex-col justify-between bg-white px-5 text-left">
            <h3 className="mb-1 font-instrument text-2xl font-normal text-ink">
              Fully Customized Website
            </h3>
            <p className="font-newsreader text-[17px] leading-relaxed text-[#333]">
              A custom-built website tailored to your brand&apos;s identity and goals.
              Responsive, fast, and optimized for every screen, desktop to mobile.
            </p>
          </div>
          <div className="flex h-full flex-col justify-between bg-white px-5 text-left">
            <h3 className="mb-1 font-instrument text-2xl font-normal text-ink">
              Copywriting
            </h3>
            <p className="font-newsreader text-[17px] leading-relaxed text-[#333]">
              Clear, engaging, and strategic copy that connects with your audience and
              turns visitors into clients.
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="flex flex-col bg-olive text-ink lg:flex-row lg:items-stretch"
      >
        <div className="flex flex-col justify-center px-5 py-15 lg:flex-[0_0_66.66%] lg:px-[50px] lg:py-16">
          <h2 className="mb-5 font-instrument text-[42px] font-normal text-ink lg:text-[60px]">
            Who's behind the Studio?
          </h2>
          <div className="flex flex-col gap-5">
            <p className="font-newsreader text-xl leading-[30px] text-ink lg:leading-[38px]">
              Hello, I'm Eduarda Magnago and I'm the creative mind behind E.M.
              Studio.
            </p>
            <p className="font-newsreader text-xl leading-[30px] text-ink lg:leading-[38px]">
              I'm 28 years old and originally graduated in Civil Engineering from
              Universidade Vila Velha (UVV), Brazil. Over time, I discovered a deep
              passion for design, digital experiences, and everything that lives at the
              intersection of art and technology.
            </p>
            <p className="font-newsreader text-xl leading-[30px] text-ink lg:leading-[38px]">
              In august of 2024, I began a new chapter by studying Systems Analysis and
              Development online at PUC Minas. I'm especially drawn to computer
              science topics, from logic and algorithms to interface design. Today, I
              combine this technical foundation with my artistic intuition to build
              beautiful and functional websites that help brands shine online.
            </p>
          </div>
        </div>
        <div className="relative aspect-[3/4] lg:aspect-auto lg:max-h-[600px] lg:flex-[0_0_33.33%]">
          <Image
            src="/img/computador.jpeg"
            alt="Imagem representando presença online"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-sage px-5 pb-[60px] pt-[25px] md:pt-[50px] text-ink md:px-10">
        <h2 className="mb-8 mt-5 text-left font-instrument text-[42px] font-normal text-ink md:mb-20 md:text-center md:text-[70px]">
          When I know it's time to change my website?
        </h2>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] md:gap-[60px]">
          {[
            {
              title: "Your website feels outdated",
              text: "If your design no longer represents your brand or looks stuck in the past, it's time for a refresh.",
            },
            {
              title: "It loads too slowly",
              text: "Slow websites frustrate users and hurt your rankings. If it takes more than a few seconds, you're losing visitors.",
            },
            {
              title: "It's not mobile-friendly",
              text: "Over 60% of web traffic comes from mobile. If your site isn't responsive, you're missing out.",
            },
            {
              title: "You're not getting results",
              text: "Lots of visits but no engagement or conversions? Your layout, messaging, or structure may need rethinking.",
            },
            {
              title: "Your business evolved",
              text: "New goals, new offerings, new audience — your website should reflect that transformation.",
            },
            {
              title: "Embarrassed to share",
              text: "If you hesitate to send people to your site because it doesn't reflect your current standards or aesthetic — that's your sign. Your website should be something you're proud to share.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="mb-5 font-instrument text-2xl font-normal text-ink md:text-[28px]">
                {item.title}
              </h3>
              <p className="font-newsreader text-xl leading-relaxed text-ink">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="flex items-center justify-center bg-cover bg-center px-5 py-[75px] text-center"
        style={{ backgroundImage: "url('/img/picnicnagrama.jpeg')" }}
      >
        <p className="max-w-[1200px] font-instrument text-2xl leading-[30px] md:text-[35px] md:leading-[40px]">
          "Let your website be your strongest storyteller."
        </p>
      </section>

      <section id="faq" className="faq-section bg-white px-3 pb-20 pt-[40px] text-ink md:px-[30px]">
        <h2 className="mb-[30px] mt-[15px] whitespace-nowrap text-center font-instrument text-[42px] font-normal tracking-tight text-ink md:whitespace-normal md:tracking-normal md:text-[70px]">
          Frequently Ask Questions
        </h2>
        <Faq />
      </section>

      <Footer />
    </>
  );
}