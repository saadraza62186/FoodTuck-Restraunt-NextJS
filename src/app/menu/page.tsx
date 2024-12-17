import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Menu1 from "../components/Menu1";
import Menu2 from "../components/Menu2";
import Section5 from "../components/Section5";
import Reciepie from "../components/Reciepie";
import Menu3 from "../components/Menu3";
import Menu4 from "../components/Menu4";
import MainFooter from "../components/MainFooter";
import Partner from "../components/Partner";

const page = () => {
  return (
    <div className="w-full flex flex-col ">
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
            Our Menu
          </h1>
          <div className="font-normal text-[20px] text-[#FFFFFF] flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-4 h-4" />{" "}
            <div className="text-[#FF9F0D]">Menu</div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center 2xl:w-[1920px] 2xl:h-[950px]">
        <div className="w-full max-w-[1320px] h-auto ml-0 ">
          <Menu1 />
        </div>
      </div>

      <div className="w-full flex justify-center 2xl:w-[1920px] 2xl:h-[850px]">
        <div className="w-full max-w-[1320px] h-auto ml-0 ">
          <Menu2 />
        </div>
      </div>

      <div className="w-[1923px] h-[468px] bg-[#0D0D0DF2]">
        <div className="w-[1920px] h-[469px] flex ml-[300px] gap-[170px] items-center">
          <Reciepie
            imageSrc="/food14.png"
            name="Professional Chefs"
            items="420"
          />
          <Reciepie imageSrc="/food15.png" name="Items Of Food" items="320" />
          <Reciepie
            imageSrc="/food16.png"
            name="Years Of Experienced"
            items="30+"
          />
          <Reciepie imageSrc="/food17.png" name="Happy Customers" items="220" />
        </div>
      </div>
      <div className="w-full flex justify-center 2xl:w-[1920px] 2xl:h-[950px]">
        <div className="w-full max-w-[1320px] h-auto ml-0 ">
          <Menu3 />
        </div>
      </div>

      <div className="w-full flex justify-center 2xl:w-[1920px] 2xl:h-[850px]">
        <div className="w-full max-w-[1320px] h-auto ml-0 ">
          <Menu4 />
        </div>
      </div>
      <div className="w-[1920px] h-[450px] flex justify-center">
        <Partner />
      </div>
      <div>
        <MainFooter />
      </div>
    </div>
  );
};

export default page;
