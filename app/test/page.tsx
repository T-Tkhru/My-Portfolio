"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Effect to trigger animation when component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-gray-50 opacity-75 flex justify-between h-20 items-center">
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
            Works
          </Link>
        </li>
        <li>
          <Link href="/contact" className="font-monomaniac">
            Contact
          </Link>
        </li>
      </ul>
      <button className="md:hidden text-white h-full mr-2">
        <img src="/menu.png" alt="menu" className="h-full" />
      </button>
      <div
        className={`fixed inset-0 bg-green-300 flex flex-col items-center justify-center z-50 transition-transform duration-500 ease-in-out transform ${
          isMounted ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ display: isMounted ? "flex" : "none" }}
      >
        <ul className="space-y-8 text-3xl text-gray-700">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/works">Works</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
