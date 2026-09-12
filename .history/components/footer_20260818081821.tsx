import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 pb-[30px] pt-20 text-white md:px-[60px]">
      <div className="flex flex-wrap items-start">
        <div className="min-w-[200px] flex-[1.5] font-instrument text-[80px] md:text-[130px]">
          <Link href="/#home">E.M.</Link>
        </div>

        <div className="flex flex-wrap justify-end gap-10 text-left md:gap-[150px]">
          <div className="max-w-[300px]">
            <h4 className="mb-3 text-sm font-normal uppercase">Site map</h4>
            <ul className="m-0 list-none p-0">
              <li className="mb-2">
                <Link href="/#home" className="text-sm no-underline hover:opacity-80">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/#about" className="text-sm no-underline hover:opacity-80">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/#services" className="text-sm no-underline hover:opacity-80">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-sm no-underline hover:opacity-80">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="max-w-[350px]">
            <h4 className="mb-3 text-sm font-normal uppercase">Our purpose</h4>
            <p className="mb-2 text-xs leading-relaxed">
              Our purpose is to design and develop meaningful digital experiences that
              reflect each brand&apos;s unique story.
              <br />
              We believe that great design goes beyond aesthetics, it&apos;s about creating
              connection, clarity, and purpose.
            </p>
          </div>
        </div>
      </div>

      <div className="my-[30px] border-t border-[#aaa] md:my-[50px]" />

      <div className="flex flex-col flex-wrap gap-3 text-[13px] text-[#ccc] md:flex-row md:justify-between">
        <p className="text-left">Cergy, Île-de-France, France</p>
        <p className="text-left md:flex-1 md:text-center">
          © 2025 Eduarda Magnago - All the rights reserved.
        </p>
        <p className="text-left md:flex-1 md:text-right">
          <Link href="/privacy" className="text-[#ccc] no-underline hover:opacity-80">
            Privacy Policy & Terms & Conditions
          </Link>
        </p>
      </div>
    </footer>
  );
}