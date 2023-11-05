import React from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoGithub,
  BiLogoInstagram,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-gray-800 w-full">
      <div className="flex h-full py-4 flex-col justify-center items-center gap-2">
        <p className="text-white font-bold text-xl">Socials</p>
        <div className="flex justify-center items-center gap-2">
          <BiLogoFacebook
            className="text-blue-600 cursor-pointer hover:scale-[1.15] relative top-0 hover:top-[-7px] duration-200 ease-in"
            size={35}
          />
          <BiLogoTwitter
            className="text-blue-400 cursor-pointer hover:scale-[1.15] relative top-0 hover:top-[-7px] duration-200 ease-in"
            size={35}
          />
          <BiLogoYoutube
            className="text-red-600 cursor-pointer hover:scale-[1.15] relative top-0 hover:top-[-7px] duration-200 ease-in"
            size={35}
          />
          <BiLogoGithub
            className="text-black cursor-pointer hover:scale-[1.15] relative top-0 hover:top-[-7px] duration-200 ease-in"
            size={35}
          />
          <BiLogoInstagram
            className="text-pink-700 cursor-pointer hover:scale-[1.15] relative top-0 hover:top-[-7px] duration-200 ease-in"
            size={35}
          />
        </div>
      <p className="text-gray-300 text-sm" >&copy;2023 Rajky,Inc. All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
