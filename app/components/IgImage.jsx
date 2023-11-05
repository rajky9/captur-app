import Image from "next/legacy/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const IgImage = ({ src }) => {
  return (
    <div className="relative lg:hover:scale-105 duration-150 ease-in">
      {/* OVERLAY */}
      <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 hover:bg-gray-500/30 z-10 flex justify-center items-center group cursor-pointer">
        <p className="hidden group-hover:block">
          <FaInstagram size={25} />
        </p>
      </div>
      <Image src={src} alt='/' className="w-full h-full" layout="responsive"/>
    </div>
  );
};

export default IgImage;
