"use client";
import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Image from "next/legacy/image";

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
    <div
      id="gallery"
      className="max-w-[1240px] mx-auto scroll-m-20 overflow-hidden"
    >
      <h1 className="py-10 text-center text-5xl font-bold">Gallery</h1>
      <div className="flex justify-center p-2">
        {SliderData.map((item, index) => (
          <div className="relative" key={index}>
            <div
              className={
                currentSlide === index
                  ? "opacity-100 duration-500 ease-in"
                  : "opacity-0"
              }
            >
              {currentSlide === index && (
                <Image
                  src={item.image}
                  alt="/"
                  width={1440}
                  height={800}
                  className="object-cover"
                />
              )}
              <div
                onClick={prevSlide}
                className="absolute text-white/80 z-[2] hover:text-black/80 cursor-pointer top-[50%] ml-6 translate-y-[-50%]"
              >
                <BsFillArrowLeftCircleFill size={50} />
              </div>
              <div
                onClick={nextSlide}
                className="absolute text-white/80 z-[2] hover:text-black/80 cursor-pointer top-[50%] right-0 mr-6 translate-y-[-50%]"
              >
                <BsFillArrowRightCircleFill size={50} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
