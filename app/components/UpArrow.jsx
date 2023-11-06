"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const UpArrow = () => {
  const [opacity, setOpacity] = useState("none");
  useEffect(() => {
    const showArrow = () => {
      if (window.scrollY < 150) {
        setOpacity("none");
      } else {
        setOpacity("block");
      }
    };
    window.addEventListener("scroll", showArrow);
    return () => window.removeEventListener("scroll", showArrow);
  }, []);
  return (
    <div
      className="fixed sm:right-12 right-8 md:right-16 bottom-[5%] cursor-pointer text-blue-700 z-50"
      style={{ display: opacity }}
    >
      <Link href="/#home">
        <BsFillArrowUpSquareFill size={40} className="shadow-xl" />
      </Link>
    </div>
  );
};

export default UpArrow;
