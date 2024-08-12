import type { Config } from "tailwindcss";
import { kosugimaru } from "./app/utiles/font";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notoJP: ["var(--font-notojp)"],
        adventPro: ["var(--font-adventpro)"],
        libreBaskerville: ["var(--font-libre)"],
        monomaniac: ["var(--font-monomaniac)"],
        kosugimaru: ["var(--font-kosugimaru)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "tracking-in-contract-bck-top":
          "tracking-in-contract-bck-top 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)    ",
      },
      keyframes: {
        "tracking-in-contract-bck-top": {
          "0%": {
            "letter-spacing": "1em",
            transform: "translateZ(400px) translateY(-300px)",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            transform: "translateZ(0) translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
