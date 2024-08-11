import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl md:text-8xl text-center">
        Takaharu T. Portfolio
      </h1>
      <section className="About bg-black p-4">
        <h2 className="text-center md:text-left text-7xl text-white mb-4 border-b-2">
          About
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-2/5 flex items-center justify-center m-2">
            <img
              src="/profile.jpg"
              alt="profile"
              className="w-full rounded-full "
            />
          </div>

          <div className="textarea flex-1 flex flex-col justify-between">
            <p className="items-center md:w-3/4 ml-4 text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptate, quos, quod, quibusdam doloremque dolorum quae
              repudiandae voluptates quia magnam autem. Quisquam voluptate,
              quos, quod, quibusdam doloremque dolorum quae repudiandae
              voluptates quia magnam autem.
            </p>
            <div className="text-right relative w-32 h-32 bg-white rounded-full overflow-hidden group border-2 border-white self-end mr-4">
              <Link
                href="/about"
                className="absolute inset-0 flex items-center justify-center text-black text-center transition-colors duration-500 z-10 group-hover:text-white"
              >
                Read More
              </Link>
              <div className="absolute inset-0 bg-black transition-transform duration-500 transform translate-x-full group-hover:translate-x-0 z-0"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="Works ">
        <h2 className="text-center md:text-left text-7xl text-black mb-4 border-b-2">
          Works
        </h2>
        <ul>
          <li>
            <Link href="/works/1">Work 1</Link>
          </li>
          <li>
            <Link href="/works/2">Work 2</Link>
          </li>
          <li>
            <Link href="/works/3">Work 3</Link>
          </li>
        </ul>
      </section>
      <section className="Contact bg-black">
        <h2 className="text-center md:text-left text-7xl text-white mb-4 border-b-2">
          Contact
        </h2>
      </section>
    </div>
  );
}
