import React from "react";
import Image from "next/image";
import MainNav from "./MainNav";
import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // You can choose the weight as needed
});

const Section1 = () => {
  return (
    <div className="w-[1920px] h-[950px] bg-[#0D0D0DF2] flex flex-col">
      <div className="mt-[45px] ml-[300px]">
        <MainNav />
      </div>
      <div className="flex">
        <div className="flex">
          <div className="w-[25.28px] h-[492px] ml-[242px] mt-[191px]">
            <Image
              src="/media.png"
              alt="Media Icon"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
          <div className="w-[472px] h-[356px] mt-[293px] ml-[40px] flex flex-col justify-between mr-[100px]">
            <h1
              className={`${greatVibes.className} text-5xl text-[#FF9F0D] font-normal text-[32px] font-helvetica`}
            >
              Its Quick & Amusing!
            </h1>
            <div className="font-bold text-6xl flex-col text-white">
              <div className="flex">
                <h1 className="text-[#FF9F0D]">Th</h1>
                <div className="flex">e Art of</div>
              </div>
              <h1 className="flex">speed food Quality</h1>
            </div>
            <p className="font-normal text-[16px] text-[#FFFFFF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
            <div>
              <button className="w-[190px] h-[60px] bg-[#FF9F0D] text-white rounded-[30px]">
                See Menu
              </button>
            </div>
          </div>
        </div>
        <div className="w-[877.8px] h-[670px] mt-[140px]">
          <Image
            src="/egg.png"
            alt="Image"
            width={877.8} // Keep the width same as div's width
            height={670} // Keep the height same as div's height
            className="w-full h-full object-cover" // Make sure the image covers the full div without distortion
            quality={100} // Ensure highest quality image
            priority // Loads the image sooner for better performance
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
