import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cardo: ["var(--nf-cardo)"],
        instrument: ["var(--nf-instrument)"],
        lato: ["var(--nf-lato)"],
        newsreader: ["var(--nf-newsreader)"],
      },
      colors: {
        ink: "#262620",
        olive: "#828843",
        sage: "#CDD8D8",
        charcoal: "#333333",
        brandgray: "#4B4B4B",
      },
    },
  },
};

export default config;