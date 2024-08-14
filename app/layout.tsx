import type { Metadata } from "next";
import {
  Inter,
  Monomaniac_One,
  Hachi_Maru_Pop,
  Rampart_One,
} from "next/font/google";
import "./globals.css";
import Header from "./compornents/Header";
import {
  adventPro,
  libreBaskerville,
  notoJP,
  monomaniac,
  kosugimaru,
} from "./utiles/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Takaharu T. Portfolio",
  description: "坪山貴晴のポートフォリオです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${adventPro.variable} ${monomaniac.variable} ${kosugimaru.variable}`}
    >
      <body className={`bg-white`} id="top">
        <div className="h-20">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
