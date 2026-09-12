import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#262620",        
        olive: "#828843",      // fundo da seção "Who's behind the Studio"
        sage: "#CDD8D8",       // fundo da seção "Website Refresh"
        charcoal: "#333333",   // footer
        brandgray: "#4B4B4B",  // seção de branding message
      },
      fontFamily: {
        cardo: ["var(--font-cardo)", "serif"],
        instrument: ["var(--font-instrument)", "serif"],
        lato: ["var(--font-lato)", "sans-serif"],
        newsreader: ["var(--font-newsreader)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;