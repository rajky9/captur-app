"use client";
import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Image from "next/image";

const Slider = ({ SliderData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide + 1 < length ? currentSlide + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide - 1 >= 0 ? currentSlide - 1 : length - 1
    );
  };
  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="py-10 text-center text-5xl font-bold">Gallery</h1>
      <div className="relative flex justify-center">
        {SliderData.map((item, index) => (
          <div
            key={index}
            className={
              currentSlide === index
                ? "opacity-100 duration-500 ease-in"
                : "opacity-0"
            }
          >
            <div
              onClick={prevSlide}
              className="absolute text-white/80 z-[2] hover:text-white cursor-pointer top-[50%] ml-6"
            >
              <BsFillArrowLeftCircleFill size={50} />
            </div>
            {currentSlide === index && (
              <Image src={item.image} alt="/" width="1440" height="600" className="w-[1440px] h-[600px]" />
            )}
            <div
              onClick={nextSlide}
              className="absolute text-white/80 z-[2] hover:text-white cursor-pointer top-[50%] right-0 mr-6"
            >
              <BsFillArrowRightCircleFill size={50} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
