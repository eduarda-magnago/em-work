"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded border border-[#ccc] bg-[#fafafa] p-3 font-lato text-base transition-colors focus:border-ink focus:outline-none";
  const labelClasses = "mb-1 text-base text-ink";

  return (
    <>
      <form
        action="https://formspree.io/f/mvgqaayb"
        method="post"
        onSubmit={handleSubmit}
        className="mt-[30px] flex w-full flex-col gap-4 font-newsreader"
      >
        <label htmlFor="name" className={labelClasses}>
          Name <span className="text-sm text-[#888]">(required)</span>
        </label>
        <input type="text" id="name" name="name" required className={inputClasses} />

        <label htmlFor="email" className={labelClasses}>
          E-mail <span className="text-sm text-[#888]">(required)</span>
        </label>
        <input type="email" id="email" name="email" required className={inputClasses} />

        <label htmlFor="service" className={labelClasses}>
          Which service are you interested in?{" "}
          <span className="text-sm text-[#888]">(required)</span>
        </label>
        <select id="service" name="service" required className={inputClasses}>
          <option value="" disabled defaultValue="">
            Select an option
          </option>
          <option value="design">Design (UX/UI)</option>
          <option value="custom-website">Fully Customized Website</option>
          <option value="copywriting">Copywriting</option>
        </select>

        <label htmlFor="website" className={labelClasses}>
          Business website or Instagram (if you already have one)
        </label>
        <input type="text" id="website" name="website" className={inputClasses} />

        <label className={labelClasses}>
          Do you already have something done in your project? (logo, colors,
          branding..) <span className="text-sm text-[#888]">(required)</span>
        </label>
        <div className="flex flex-col gap-2 text-base text-ink">
          <label className="font-lato">
            <input type="radio" name="project_status" value="yes" required className="mr-2" />
            Yes, I do
          </label>
          <label className="font-lato">
            <input type="radio" name="project_status" value="no" className="mr-2" />
            No, I&apos;m starting everything from zero
          </label>
        </div>

        <label htmlFor="vision" className={labelClasses}>
          Could you describe the vision of your project?{" "}
          <span className="text-sm text-[#888]">(required)</span>
        </label>
        <textarea id="vision" name="vision" rows={5} required className={inputClasses} />

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-[30px] w-full rounded-[30px] bg-ink py-3.5 font-lato text-base text-white transition-colors hover:bg-[#444] disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Enviar"}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-5 rounded-md border border-[#b6e3b4] bg-[#e4fbe2] p-4 text-center font-newsreader text-base text-ink">
          Your message was sent successfully. We are going to get back as soon as
          possible!
        </p>
      )}

      {status === "error" && (
        <p className="mt-5 rounded-md border border-red-300 bg-red-50 p-4 text-center font-newsreader text-base text-ink">
          Something went wrong sending your message. Please try again or email us
          directly.
        </p>
      )}
    </>
  );
}