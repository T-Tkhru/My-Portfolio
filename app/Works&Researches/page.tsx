import Link from "next/link";
import Workbox from "../compornents/Workbox";
import { Metadata } from "next";
import Animation from "../compornents/Animation";
import Footer from "../compornents/Footer";

// export const metadata: Metadata = {
//   title: "Takaharu T. Portfolio - Works & Researches",
//   description: "Explore the works and researches.",
// };

export default function Works() {
  const ResearchList = [
    {
      title:
        "Video Watermarking Method Based on 3D U-Net Robust Against Re-shooting",
      link: "/research/1",
      year: 2024,
      conference: "EMM研究会",
    },
  ];
  const WorkList = [
    { href: "/works/1", title: "aaaaa", img: "/silverratio.png" },
    { href: "/works/2", title: "bbbbb", img: "/silverratio.png" },
    { href: "/works/3", title: "ccccc", img: "/silverratio.png" },
    { href: "/works/4", title: "ddddd", img: "/silverratio.png" },
    { href: "/works/5", title: "eeeee", img: "/silverratio.png" },
    { href: "/works/6", title: "fffff", img: "/silverratio.png" },
  ];

  return (
    <>
      <div className=" bg-black h-auto py-8 ">
        <h1 className="hidden md:block  whitespace-normal text-8xl text-center mb-4 text-white">
          Works & Researches
        </h1>
        <h1 className="md:hidden text-6xl  text-center mb-4 text-white">
          Works & <br />
          Researches
        </h1>
      </div>
      <section className="works bg-white p-10 md:p-14 text-black">
        <Animation animation="animate__fadeInLeft">
          <h2 className="text-center md:text-left text-7xl mb-8 border-b-2 ">
            Works
          </h2>
        </Animation>
        <ul className="flex flex-col md:flex-row flex-wrap items-center h-auto">
          {WorkList.map((work, index) => (
            <Workbox
              key={work.href}
              href={work.href}
              title={work.title}
              img={work.img}
              className=""
            />
          ))}
        </ul>
      </section>
      <section className="Research bg-black p-10 md:p-14 text-white">
        <Animation animation="animate__fadeInLeft">
          <h2 className="text-center md:text-left text-6xl md:text-7xl mb-8 border-b-2 ">
            Researches
          </h2>
        </Animation>

        <ul className="flex flex-col h-auto space-y-2 list-disc">
          {ResearchList.map((research, index) => (
            <Animation animation="animate__fadeInLeft">
              <li
                key={index}
                className="w-auto h-auto border-b-2 border-gray-400"
              >
                <Link
                  href={research.link}
                  className="text-base md:text-xl hover:opacity-70 duration-300"
                >
                  <p className="mt-2  text-white">
                    {research.title} ({research.conference} {research.year})
                  </p>
                </Link>
              </li>
            </Animation>
          ))}
        </ul>
      </section>
      <Footer color="white" />
    </>
  );
}
