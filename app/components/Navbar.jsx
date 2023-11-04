"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navItems = ["Home", "Gallery", "Work", "Contact"];

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNavClick = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 90) {
        setColor("white");
        setTextColor("black");
      } else {
        setColor("transparent");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
    console.log(window.scrollY);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full duration-300 ease-in z-10" style={{color: textColor, backgroundColor: color}}>
      <div className="flex justify-between items-center  p-4 max-w-[1240px] mx-auto">
        <h2 className="text-2xl font-bold cursor-pointer">
          <Link href="/">Captur</Link>
        </h2>
        <ul className="hidden md:flex gap-4">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-indigo-400 border-b-4 ease-linear duration-300 border-b-transparent hover:border-indigo-300"
            >
              <Link href="/" className="w-full p-4 block">
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="md:hidden z-10 cursor-pointer p-2"
          onClick={handleNavClick}
        >
          {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
        <div
          onClick={handleNavClick}
          className={
            !nav
              ? `md:hidden text-white absolute top-0 left-0 bottom-0 text-center duration-300 ease-in
            right-0 bg-black/90 flex flex-col justify-center items-center w-full h-screen`
              : `md:hidden text-white absolute top-0 left-[-100%] bottom-0 text-center duration-300 ease-in
            right-0 bg-black/90 flex flex-col justify-center items-center w-full h-screen`
          }
        >
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li key={index} className="w-full">
                <Link className="p-4 text-4xl px-16 w-full block" href="/">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* MOBILE MENU */}
    </div>
  );
};

export default Navbar;
