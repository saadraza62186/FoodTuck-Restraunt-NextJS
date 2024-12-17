import React from "react";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Section9 = () => {
  return (
    <div className="w-[1920px] h-[558px] relative">
      {/* Background Image */}
      <div className="w-full h-full relative">
        <Image
          src="/food25.png"
          alt="Food Slide"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
        />
      </div>

      {/* Content Inside the Image */}
      <div className="absolute bottom-16 right-52 text-white">
        {/* Title */}
        <div className="font-normal text-[32px] mb-4">
          <h1 className={`${greatVibes.className} text-[#FF9F0D]`}>
            Restaurant Active Process
          </h1>
        </div>

        {/* Headings */}
        <div className="mb-6">
          <div className="font-helvetica font-bold text-5xl flex gap-2">
            <div className="text-[#FF9F0D]">We</div>
            <div>Document Every Food</div>
          </div>
          <div className="font-helvetica font-bold text-5xl">
            <div>Bean Process until it is saved</div>
          </div>
        </div>

        {/* Description */}
        <div className="font-normal text-[16px] mb-6">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque <br /> bibendum non dui volutpat fringilla
            bibendum. Urna, elit augue urna,
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex gap-10">
          {/* See More Button */}
          <div className="w-[155px] h-[50px] mb-4 mt-3">
            <input
              type="text"
              placeholder="See More"
              className="w-full h-full border text-center flex justify-center items-center border-[#FF9F0D] text-white bg-transparent rounded-[25px]"
            />
          </div>

          {/* Play Video Button */}
          <div className="flex gap-2 items-center">
            <div className="w-[60px] h-[60px] bg-[#FF9F0D] rounded-[50%] flex justify-center items-center">
              <Image
                src="/video.png"
                alt="Play Icon"
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
            </div>
            <div className="text-[16px] font-bold">Play Video</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
