'use client'
import React from "react";
import Navbar from "../components/Navbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import ShopCard from "../components/ShopCard";
import MainFooter from "../components/MainFooter";
const page = () => {
  return (
    <div className="w-[1920px] h-[950px]">
      {/* Navbar Section */}
      <div className="w-full flex justify-center items-center 2xl:w-[1920px] bg-[#0D0D0DF2]">
        <Navbar />
      </div>
      {/* Image Section */}
      <div className="w-[1920px] h-[410px] relative">
        {/* Background Image */}
        <Image
          src="/menu1.png" // Ensure this path is correct
          alt="Menu Image"
          layout="fill" // Ensures the image covers the entire div
          objectFit="cover" // Maintains aspect ratio without distortion
          quality={100} // Optional: ensures high quality
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-helvetica font-bold text-[48px] text-[#FFFFFF]">
            Our Shop
          </h1>
          <div className="font-normal text-[20px] text-[#FFFFFF] flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-4 h-4" />{" "}
            <div className="text-[#FF9F0D]">Shop</div>
          </div>
        </div>
      </div>
      <div className="w-[1920px] h-[2000px] flex justify-center items-center">
        <div className="w-[1320px] h-[1950px] flex justify-center items-center">
        <ShopCard />
        </div>
      </div>
      <div className="mt-[80px]">
        <MainFooter />
      </div>
    </div>
  );
};

export default page;
