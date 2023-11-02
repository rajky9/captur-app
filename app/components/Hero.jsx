import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div className="custom-img w-full h-screen flex items-center justify-center bg-fixed bg-center bg-cover">
      {/* OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-screen bg-black/60" />
      <div className="text-white z-[2] p-5 md:ml-[-10rem] lg:mt-[-20rem] mt-[-10rem]">
        <h2 className="text-4xl font-bold">{heading}</h2>
        <p className="py-4 font-medium text-xl">{message}</p>
        <button className="border-2 rounded px-8 py-2 hover:scale-105 duration-200 hover:bg-black">Book</button>
      </div>
    </div>
  );
};

export default Hero;
