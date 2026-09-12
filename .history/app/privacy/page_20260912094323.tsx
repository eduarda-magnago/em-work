import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Privacy() {
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

      {/* PRIVACY POLICY & TERMS */}
      <section className="mx-auto max-w-[800px] bg-white px-5 py-[60px] text-ink">
        <h1 className="mb-5 font-instrument text-[36px] text-ink">Privacy Policy</h1>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          Effective Date: 19/07/2025
        </p>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          At EM Studio, we respect your privacy and are committed to protecting any
          personal information you provide. This Privacy Policy outlines how we
          collect, use, and safeguard your data.
        </p>

        <h2 className="mb-2.5 mt-[30px] font-newsreader text-xl font-medium text-ink">
          1. Information We Collect
        </h2>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          We may collect the following information through our contact forms:
        </p>
        <ul className="mb-5 list-disc pl-5 font-newsreader text-lg text-ink">
          <li className="mb-2">Name</li>
          <li className="mb-2">Email address</li>
          <li className="mb-2">Project details or message content</li>
        </ul>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          We do not use cookies, tracking tools, or analytics platforms.
        </p>

        <h2 className="mb-2.5 mt-[30px] font-newsreader text-xl font-medium text-ink">
          2. How We Use Your Information
        </h2>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          Your data is used solely to:
        </p>
        <ul className="mb-5 list-disc pl-5 font-newsreader text-lg text-ink">
          <li className="mb-2">Respond to your inquiries</li>
          <li className="mb-2">Provide you with information about our services</li>
        </ul>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          We do not share, sell, or rent your information to third parties.
        </p>

        <h2 className="mb-2.5 mt-[30px] font-newsreader text-xl font-medium text-ink">
          3. Data Storage & Security
        </h2>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          Your information is stored securely and only for as long as necessary to
          fulfill the purpose for which it was collected.
        </p>

        <h2 className="mb-2.5 mt-[30px] font-newsreader text-xl font-medium text-ink">
          4. International Access
        </h2>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          As we operate globally, your data may be accessed from outside your country
          of residence. By submitting your information, you consent to this transfer.
        </p>

        <h2 className="mb-2.5 mt-[30px] font-newsreader text-xl font-medium text-ink">
          5. Your Rights
        </h2>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          You have the right to:
        </p>
        <ul className="mb-5 list-disc pl-5 font-newsreader text-lg text-ink">
          <li className="mb-2">Request access to the data we hold about you</li>
          <li className="mb-2">Ask for your data to be corrected or deleted</li>
          <li className="mb-2">Withdraw your consent at any time</li>
        </ul>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          To exercise any of these rights, please contact us at [your email].
        </p>

        <h1 className="mb-5 mt-16 font-instrument text-[36px] text-ink">
          Terms & Conditions
        </h1>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the EM
          Studio website. By accessing or using this website, you agree to comply with
          and be bound by these Terms.
        </p>

        <h2 className="mb-2.5 mt-[30px] font-newsreader text-xl font-medium text-ink">
          1. Services
        </h2>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          EM Studio provides creative services including but not limited to:
        </p>
        <ul className="mb-5 list-disc pl-5 font-newsreader text-lg text-ink">
          <li className="mb-2">Website Design & Redesign</li>
          <li className="mb-2">Branding & Visual Strategy</li>
          <li className="mb-2">Copywriting</li>
          <li className="mb-2">Squarespace & Shopify Setup</li>
        </ul>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          All services are provided with care and professionalism. Detailed
          agreements may be created separately with clients upon project initiation.
        </p>

        <h2 className="mb-2.5 mt-[30px] font-newsreader text-xl font-medium text-ink">
          2. Intellectual Property
        </h2>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          The visual content on this website may include images and assets licensed
          from third-party sources such as Dupe Photos. These materials are used in
          accordance with their respective licensing terms.
          <br />
          <br />
          Unless otherwise specified, EM Studio does not claim authorship or ownership
          over third-party visuals.
          <br />
          <br />
          All other elements including branding, layout, and written content are the
          intellectual property of EM Studio.
          <br />
          <br />
          No part of this website may be copied, reproduced, or distributed without
          prior permission or appropriate attribution where required.
        </p>

        <h2 className="mb-2.5 mt-[30px] font-newsreader text-xl font-medium text-ink">
          3. Client Responsibility
        </h2>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          By contacting us, you agree that all information you provide is accurate.
          Project outcomes depend on collaborative efforts and timely communication.
        </p>

        <h2 className="mb-2.5 mt-[30px] font-newsreader text-xl font-medium text-ink">
          4. Limitation of Liability
        </h2>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          We strive to deliver high-quality services, but we are not liable for:
        </p>
        <ul className="mb-5 list-disc pl-5 font-newsreader text-lg text-ink">
          <li className="mb-2">Delays caused by external tools or platforms</li>
          <li className="mb-2">Losses due to misuse of the site or services</li>
          <li className="mb-2">Third-party website issues (e.g., hosting platforms)</li>
        </ul>

        <h2 className="mb-2.5 mt-[30px] font-newsreader text-xl font-medium text-ink">
          5. Governing Law
        </h2>
        <p className="mb-4 font-newsreader text-lg leading-relaxed text-ink">
          These Terms are governed by the laws of France and the EU, unless otherwise
          agreed upon in a separate client contract.
        </p>
      </section>

      <Footer />
    </>
  );
}