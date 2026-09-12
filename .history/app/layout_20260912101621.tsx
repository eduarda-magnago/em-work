import type { Metadata } from "next";
import { Cardo, Instrument_Serif, Lato, Newsreader } from "next/font/google";
import "./globals.css";

const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--nf-cardo",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--nf-instrument",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--nf-lato",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--nf-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "E.M Studio - Web Design & Development",
  description: "Web Design & Development Studio",
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cardo.variable} ${instrumentSerif.variable} ${lato.variable} ${newsreader.variable} font-lato text-white`}
      >
        {children}
      </body>
    </html>
  );
}