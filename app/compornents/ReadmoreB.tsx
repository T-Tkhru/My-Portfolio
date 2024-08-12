"use client";

import Link from "next/link";
import { useState } from "react";

interface ReadmoreProps {
  href: string;
}

const ReadmoreB = (props: ReadmoreProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="text-right relative w-32 h-32 bg-white rounded-full overflow-hidden group border-2 border-white self-end mr-4">
      <Link
        href={props.href}
        className="absolute inset-0 flex items-center justify-center text-black text-center transition-colors duration-500 z-10 group-hover:text-white"
      >
        Read More⇒
      </Link>
      <div className="absolute inset-0 bg-black transition-transform duration-500 transform translate-x-full group-hover:translate-x-0 z-0"></div>
    </div>
  );
};

export default ReadmoreB;
