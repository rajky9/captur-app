import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div id="home" className="custom-img w-full h-screen bg-fixed bg-center bg-cover">
      {/* OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-screen bg-black/60" />
      <div className="absolute top-[20%] w-full">
        <div className="md:max-w-[768px] lg:max-w-[1024px] w-full mx-auto z-20">
          <div className="text-white z-[2] p-5">
            <h2 className="lg:text-5xl text-4xl font-bold">{heading}</h2>
            <p className="py-4 font-medium text-xl">{message}</p>
            <button className="border-2 rounded px-8 py-2 hover:scale-105 duration-200 hover:bg-black">
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
