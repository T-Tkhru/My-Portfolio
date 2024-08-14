"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="fixed top-0 left-0 w-full z-20 flex justify-between h-20 items-center">
      <div
        className={`absolute inset-0 bg-gray-50 ${
          openMenu ? "" : "opacity-75"
        }`}
      ></div>
      <div className="relative flex justify-between w-full h-full items-center z-10">
        <Link href="/" className="h-20">
          <img src="/logo.png" alt="logo" className="max-h-full" />
        </Link>
        <ul className="md:flex space-x-10 mr-4 text-2xl hidden text-black">
          <li>
            <Link
              href="/"
              className="relative group hover:opacity-70 duration-300"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="relative group hover:opacity-70 duration-300"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/Works&Researches"
              className="relative group hover:opacity-70 duration-300"
            >
              Works & Researches
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="relative group hover:opacity-70 duration-300"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
        <button
          className="md:hidden text-white h-full mr-2"
          onClick={toggleMenu}
        >
          <img src="/menu.png" alt="menu" className="h-full" />
        </button>
      </div>
      {openMenu && (
        <div className="fixed inset-0 bg-gray-300 flex flex-col items-center justify-center z-50 ">
          <button
            className="absolute top-1.5 right-7 text-gray-700 text-6xl"
            onClick={toggleMenu}
          >
            &times;
          </button>
          <ul className="space-y-8 text-3xl text-gray-700 animate-tracking-in-contract-bck-top">
            <li>
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/Works&Researches" onClick={toggleMenu}>
                Works & Researches
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={toggleMenu}>
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
