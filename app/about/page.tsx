import Link from "next/link";
import Footer from "../compornents/Footer";
import { Metadata } from "next";
import Animation from "../compornents/Animation";

export const metadata: Metadata = {
  title: "Takaharu T. Portfolio - About",
  description: "Learn more about Takaharu T.",
};

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
  const awards = [
    {
      year: "2025年8月",
      title: "プロトスプリントリーグ 最優秀賞",
      detail:
        "サイバーエージェントの夏季インターンシップ（ゲーム開発）で最優秀賞受賞。",
    },
    {
      year: "2025年3月",
      title: "Engineer Guild Hackathon 3位入賞",
      detail: "外資就活ドットコム主催のハッカソンで3位入賞。",
    },
    {
      year: "2020年1月",
      title: "近畿公立高等学校テニス大会 個人の部5位",
      detail: "近畿公立高等学校テニス大会のシングルスで5位入賞（ベスト8）。",
    },
  ];

  return (
    <>
      <div className="about bg-black text-white">
        <h1 className="text-7xl md:text-8xl text-center leading-relaxed py-8 ">
          About
        </h1>
        <section className="about p-10 md:p-14">
          <Animation animation="animate__fadeInUp">
            <div className="aboutwrapper w-full md:w-3/4 mx-auto">
              <img src="/profile.jpg" alt="profile" className="mb-6" />
              <div className="txt-wrapper text-center">
                <h2 className="font-kosugimaru text-2xl mb-4">
                  坪山貴晴 - Tsuboyama Takaharu
                </h2>
                <p className="text-xl">
                  2002年5月30日、大阪出身。2021年より大阪府立大学工学域電気電子系学類情報工学課程（現大阪公立大学）に入学。2025年3月に卒業後、大阪公立大学院に進学。知能メディア処理研究グループ所属。専攻は画像処理、生成AI。趣味はサイクリング、テニス、謎解き、ゲーム。
                </p>
              </div>
            </div>
          </Animation>
        </section>
        {/* 大会結果・受賞歴セクション */}
        <section className="awards bg-black p-10 md:p-14">
          <Animation animation="animate__fadeInLeft">
            <h2 className="text-center md:text-left text-5xl md:text-6xl text-white mb-8 border-b-2 ">
              Awards & Achievements
            </h2>
          </Animation>
          <ul className="w-full md:w-3/4 mx-auto text-white text-lg md:text-xl">
            {awards.map((award, idx) => (
              <li
                key={idx}
                className="mb-6 border-b border-gray-600 pb-4 font-kosugimaru"
              >
                <div className="font-bold text-xl md:text-2xl mb-1">
                  {award.title}
                </div>
                <div className="text-gray-300 mb-1">{award.year}</div>
                <div>{award.detail}</div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="skills bg-white p-10 md:p-14">
        <Animation animation="animate__fadeInLeft">
          <h2 className="text-center md:text-left text-7xl text-black mb-8 border-b-2 ">
            Skills
          </h2>
        </Animation>
        <div className="skillswrap flex flex-col md:flex-row md:space-x-4 w-full">
          <div className="front w-full md:w-1/2 ">
            <Animation animation="animate__fadeInUp">
              <h2 className="text-4xl text-black mb-4">Frontend</h2>
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
            </Animation>
          </div>

          <div className="backend w-full md:w-1/2 ">
            <Animation animation="animate__fadeInUp">
              <h2 className="text-4xl text-black mb-4">Backend</h2>
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
            </Animation>
          </div>
        </div>
      </section>

      <Footer color="black" />
    </>
  );
}
