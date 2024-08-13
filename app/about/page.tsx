import Link from "next/link";
import Footer from "../compornents/Footer";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Takaharu T. Portfolio - About",
//   description: "Learn more about Takaharu T.",
// };

export default function About() {
  const frontSkills = [
    "HTML",
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
  ];
  const backSkills = ["Python", "C++"];
  return (
    <>
      <head>
        <title>About</title>
      </head>
      <div className="about bg-black text-white">
        <h1 className="text-7xl md:text-8xl text-center leading-relaxed py-8 ">
          About
        </h1>
        <section className="about p-10 md:p-14">
          <div className="aboutwrapper w-full md:w-3/4 mx-auto">
            <img src="/profile.jpg" alt="profile" className="mb-6" />
            <div className="txt-wrapper text-center">
              <h2 className="font-kosugimaru text-2xl mb-4">
                坪山貴晴 - Tsuboyama Takaharu
              </h2>
              <p className="text-xl">
                2002年5月30日、大阪出身。2021年より大阪府立大学工学域電気電子系学類情報工学課程（現大阪公立大学）に入学、知能メディア処理研究グループ所属。専攻は画像処理、生成AI。2025年から大阪公立大学院に進学予定。趣味はサイクリング、テニス、謎解き、ゲーム。
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="skills bg-white p-10 md:p-14">
        <h2 className="text-center md:text-left text-7xl text-black mb-8 border-b-2 ">
          Skills
        </h2>
        <div className="skillswrap flex flex-col md:flex-row md:space-x-4 w-full">
          <div className="front w-full md:w-1/2 ">
            <h3 className="text-4xl text-black mb-4">Frontend</h3>
            <ul className="front flex justify-center space-x-4 flex-wrap pt-4 bg-gray-500 rounded-xl">
              {frontSkills.map((skill) => (
                <li
                  key={skill}
                  className="text-2xl bg-white text-black p-2 mb-4 rounded-md"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="backend w-full md:w-1/2 ">
            <h3 className="text-4xl text-black mb-4">Backend</h3>
            <ul className="back flex justify-center space-x-4 flex-wrap pt-4 bg-gray-300 rounded-xl">
              {backSkills.map((skill) => (
                <li
                  key={skill}
                  className="text-2xl bg-black text-white p-2 mb-4 rounded-md "
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer color="black" />
    </>
  );
}
