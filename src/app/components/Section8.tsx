import React from "react";
import { Great_Vibes } from "next/font/google";
import ChefCard from "./ChefCard";
import Comment from "./Comment";
import Image from "next/image";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // You can choose the weight as needed
});
const Section8 = () => {
  return (
    <div className="w-[1920px] h-[1150px] bg-[#0D0D0DF2] flex">
      <div className="w-[1273px] h-[770px] ml-[300px] mt-[150px]">
        <div className="font-normal text-[32px] text-[#FF9F0D]">
          <h1 className={`${greatVibes.className}`}>Testimonials</h1>
        </div>
        <div className="font-bold font-helvetica text-5xl text-[#FFFFFF]">
          <h1>What our client are saying</h1>
        </div>
        <div className="mt-[150px] flex justify-center">
          <div>
            <Comment />
          </div>
        </div>
        <div className="w-[86px] h-[16px] flex justify-center mt-[40px]">
            <div className="flex justify-center">
            <Image src='/comment4.png' alt="Dot Image" width={322} height={194} className="w-full h-full flex justify-center ml-[1200px] mt-[40px]"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
