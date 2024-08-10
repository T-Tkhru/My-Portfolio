import { Advent_Pro, Noto_Sans_JP, Libre_Baskerville, Monomaniac_One } from "next/font/google";
//font導入には上のimport、下のexportを追加するほかに、tailwind.config.tsにもfontFamilyを追加して、layout.tsxのhtmlタグにもfontを追加する必要がある

export const notoJP = Noto_Sans_JP({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-notojp",
    display: "swap",
  });
  
  export const adventPro = Advent_Pro({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-adventpro",
    display: "swap",
  });
  
  export const libreBaskerville = Libre_Baskerville({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-libre",
    display: "swap",
  });

  　export const monomaniac= Monomaniac_One({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-monomaniac",
    display: "swap",
  });