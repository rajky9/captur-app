import React from "react";
import igImg1 from "@/public/ig-img-1.jpeg";
import igImg2 from "@/public/ig-img-2.jpeg";
import igImg3 from "@/public/ig-img-3.jpeg";
import igImg4 from "@/public/ig-img-4.jpeg";
import igImg5 from "@/public/ig-img-5.jpeg";
import igImg6 from "@/public/ig-img-6.jpeg";
import IgImage from "./IgImage";

const Instagram = () => {
  return (
    <div id="work" className="scroll-m-20 max-w-[1240px] mx-auto p-2 text-center">
      <h2 className="pt-8 pb-4 text-4xl font-bold">Follow me on Instagram</h2>
      <p className="pb-6 text-gray-600 cursor-pointer w-fit mx-auto hover:scale-150 hover:translate-y-1 duration-200 ease-in">@Captur</p>
      <div className="grid lg:grid-cols-6 lg:gap-3 md:grid-cols-3 md:gap-3 grid-cols-2 gap-1">
        <IgImage src={igImg1} />
        <IgImage src={igImg2} />
        <IgImage src={igImg3} />
        <IgImage src={igImg4} />
        <IgImage src={igImg5} />
        <IgImage src={igImg6} />
      </div>
    </div>
  );
};

export default Instagram;
