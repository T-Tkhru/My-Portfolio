"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-gray-300 opacity-75 flex justify-between h-20 items-center">
      <Link href="/" className="h-20">
        <img src="/logo.png" alt="logo" className="max-h-full" />
      </Link>
      <ul className="md:flex space-x-10 mr-4 text-2xl hidden text-black">
        <li>
          <Link href="/" className="font-monomaniac">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="font-monomaniac">
            About
          </Link>
        </li>
        <li>
          <Link href="/works" className="font-monomaniac">
            works
          </Link>
        </li>
        <li>
          <Link href="/contact" className="font-monomaniac">
            Contact
          </Link>
        </li>
      </ul>
      <button className="md:hidden text-white h-full mr-2" onClick={toggleMenu}>
        <img src="/menu.png" alt="menu" className="h-full" />
      </button>
      {openMenu && (
        <div className="fixed inset-0 bg-gray-100 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-1.5 right-7 text-gray-700 text-6xl"
            onClick={toggleMenu}
          >
            &times;
          </button>
          <ul className="space-y-8 text-3xl text-gray-700">
            <li>
              <Link href="/" className="" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/works" className="" onClick={toggleMenu}>
                Works
              </Link>
            </li>

            <li>
              <Link href="/contact" className="" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
