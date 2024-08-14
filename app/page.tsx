import Link from "next/link";
import ReadmoreB from "./compornents/ReadmoreB";
import Workbox from "./compornents/Workbox";
import ReadmoreW from "./compornents/ReadmoreW";
import Footer from "./compornents/Footer";
import Animation from "./compornents/Animation";

export default function Home() {
  return (
    <>
      <div className="h-auto">
        <h1 className="text-7xl md:text-8xl text-center leading-relaxed mb-4">
          Takaharu T.
          <br /> Portfolio
        </h1>
      </div>

      <section className="About bg-black p-10 md:p-14">
        <Animation animation="animate__fadeInLeft">
          <h2 className="text-center md:text-left text-7xl text-white mb-8 border-b-2 ">
            About
          </h2>
        </Animation>
        <Animation animation="animate__fadeInUp" delay="0.2s">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-full md:w-2/5 flex items-center justify-center m-2">
              <img
                src="/profile.jpg"
                alt="profile"
                className="w-full rounded-full "
              />
            </div>
            <div className="textarea flex-1 flex flex-col justify-between">
              <h3 className="pt-4 md:pt-0 text-center md:text-left text-4xl text-white mb-4 ml-4 font-kosugimaru ">
                坪山貴晴
              </h3>
              <p className="items-center md:w-3/4 ml-4 text-white mb-4">
                2002年5月30日、大阪出身。2021年より大阪府立大学（現大阪公立大学）に入学、知能メディア処理研究グループ所属。2025年から大阪公立大学院に進学予定。
              </p>
              <ReadmoreB href="/about" />
            </div>
          </div>
        </Animation>
      </section>

      <section className="Works p-10 md:p-14">
        <Animation animation="animate__fadeInLeft">
          <h2 className="text-center md:text-left text-7xl text-black mb-8 border-b-2 border-black ">
            Works
          </h2>
        </Animation>
        <div className="flex-1 flex flex-col justify-between">
          <ul className="flex flex-col items-center md:flex-row flex-wrap h-auto">
            <Workbox
              href="/works/1"
              title="aaaaa"
              img="/silverratio.png"
              className=""
            />
            <Workbox
              href="/works/2"
              title="bbbbb"
              img="/silverratio.png"
              className=""
            />
            <Workbox
              href="/works/3"
              title="ccccc"
              img="/silverratio.png"
              className=""
            />
          </ul>
          <Animation
            animation="animate__fadeInUp"
            className="flex justify-end"
            rootMargin="-50px"
          >
            <ReadmoreW href="/Works&Researches" />
          </Animation>
        </div>
      </section>
      <section className="Contact bg-black p-10 md:p-14" id="contact">
        <Animation animation="animate__fadeInLeft">
          <h2 className="text-center md:text-left text-7xl text-white mb-8 border-b-2 ">
            Contact
          </h2>
        </Animation>
        <div className="flex justify-center">
          <Animation animation="animate__fadeInUp">
            <a
              href="mailto:ttkirua1@yahoo.co.jp"
              className="text-3xl text-white hover:underline md:text-5xl "
            >
              ttkirua1@yahoo.co.jp
            </a>
          </Animation>
        </div>
      </section>
      <Footer color="white" />
    </>
  );
}
