import React from "react";
import Image from "next/image";
import Hero2 from "../components/Hero2";
import Navbar from "../components/Navbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Great_Vibes } from "next/font/google";
import AboutSection from "../components/AboutSection";
import ChefCard from "../components/ChefCard";
import OurChef from "../components/OurChef";
import Comment from "../components/Comment";
import Section6 from "../components/Section6";
import MiniCard from "../components/MiniCard";
import MainFooter from "../components/MainFooter";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // You can choose the weight as needed
});

const page = () => {
  return (
    <div>
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
            About Us
          </h1>
          <div className="font-normal text-[20px] text-[#FFFFFF] flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-4 h-4" />{" "}
            <div className="text-[#FF9F0D]">About</div>
          </div>
        </div>
      </div>
      <div className="w-[1920px] h-[950px] flex justify-center items-center">
        <div className="w-[1320px] h-[734px] mt-[100px] flex justify-center items-center">
          <div className="w-[669px] h-[734px] flex gap-3">
            <div className="w-[336px] h-[536px]">
              <Image
                src="/food9.png"
                alt=""
                width={322}
                height={194}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-[309px] h-[271px]">
                <Image
                  src="/item1.png"
                  alt=""
                  width={322}
                  height={194}
                  className="w-full h-full"
                />
              </div>
              <div className="w-[309px] h-[382px]">
                <Image
                  src="/food9.png"
                  alt=""
                  width={322}
                  height={194}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="ml-[100px]">
            <div
              className={`${greatVibes.className} text-5xl text-[#FF9F0D] font-normal text-[32px] font-helvetica`}
            >
              About us
            </div>
            <div className="font-helvetica font-bold text-5xl mt-3 ">
              Food is an important <br /> part Of a balanced Diet
            </div>
            <div className="font-normal font-helvetica text-[16px] w-[526px] h-[96px] mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </div>
            <div className="flex gap-5 mt-6">
              <div className="w-[195px] h-[58px] bg-[#FF9F0D] flex justify-center items-center rounded-lg">
                <div className="text-white font-normal ">Show More</div>
              </div>
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
      </div>
      <div className="w-[1320px] h-[865px] flex justify-center items-center">
        <div className="flex justify-center items-center">
          <AboutSection />
        </div>
      </div>
      <div className="mt-6">
        <MainFooter />
      </div>
    </div>
  );
};

export default page;
