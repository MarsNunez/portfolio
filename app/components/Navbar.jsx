"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex justify-center">
      <nav className="grid grid-cols-3 text-2xl py-7 navbar w-full md:gap-40 max-w-7xl">
        <Link href={"/"} className="title flex items-center justify-center">
          <p className="hover-line-animation px-2">MN</p>
        </Link>
        <div className="text-3xl flex items-center justify-center">
          {!menu ? (
            <i
              className="lni lni-menu my-auto cursor-pointer md:hidden"
              onClick={() => setMenu(true)}
            ></i>
          ) : (
            <i
              className="lni lni-close cursor-pointer md:hidden text-2xl"
              onClick={() => setMenu(false)}
            ></i>
          )}

          <ul className="hidden md:flex uppercase text-center text-sm tracking-widest font-medium gap-5">
            <a className="hover-underline-animation py-2" href="#home">
              Home
            </a>
            <a className="hover-underline-animation py-2" href="#about">
              About
            </a>
            <a className="hover-underline-animation py-2" href="#services">
              Services
            </a>
            <a className="hover-underline-animation py-2" href="#portfolio">
              Portfolio
            </a>
            {/* <a className="hover-underline-animation py-2" href="#feed">
              Feed
            </a> */}
            <a className="hover-underline-animation py-2" href="#contact">
              Contact
            </a>
          </ul>
        </div>
        <div className="text-3xl flex items-center justify-center">
          <p className="hidden">Login</p>
          <i className="lni lni-key"></i>
        </div>
      </nav>
      {menu && (
        <div className="new-menu-height backdrop-blur-md fixed w-full top-0">
          <ul className=" flex flex-col items-center pt-5 text-xl uppercase font-medium tracking-widest gap-5">
            <a
              className="hover-underline-animation"
              href="#home"
              onClick={() => setMenu(false)}
            >
              Home
            </a>
            <a
              className="hover-underline-animation"
              href="#about"
              onClick={() => setMenu(false)}
            >
              About
            </a>
            <a
              className="hover-underline-animation"
              href="#services"
              onClick={() => setMenu(false)}
            >
              Services
            </a>
            <a
              className="hover-underline-animation"
              href="#portfolio"
              onClick={() => setMenu(false)}
            >
              Portfolio
            </a>
            {/* <a
              className="hover-underline-animation"
              href="#feed"
              onClick={() => setMenu(false)}
            >
              Feed
            </a> */}
            <a
              className="hover-underline-animation"
              href="#contact"
              onClick={() => setMenu(false)}
            >
              Contact
            </a>
            {/* <li
              className="text-5xl mt-5 hover-underline-animation"
              onClick={() => setMenu(false)}
            >
              Login
            </li> */}
          </ul>

          {/* SOCIALS */}
          <div className="flex items-center justify-center text-3xl gap-5 py-12 mt-16">
            <i className="lni lni-instagram-original cursor-pointer"></i>
            <i className="lni lni-github-original cursor-pointer"></i>
            <i className="lni lni-twitter-original cursor-pointer"></i>
            <i className="lni lni-linkedin-original cursor-pointer"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
