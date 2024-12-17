import React from "react";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Navbar from "../components/Navbar";
import FaqCard from "../components/FaqCard";
import MainFooter from "../components/MainFooter";
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
            FAQ Page
          </h1>
          <div className="font-normal text-[20px] text-[#FFFFFF] flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-4 h-4" />{" "}
            <div className="text-[#FF9F0D]">FAQ</div>
          </div>
        </div>
      </div>
      <div className="w-[1320px] h-[702px] flex flex-col justify-center items-center ml-[300px] mt-[80px]">
        <div className="font-helvetica font-bold text-5xl">Questions Looks Here</div>
        <div className="font-normal text-[16px] mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </div>
        <div className="w-[1320px] h-[558px]">
            <div className="flex flex-wrap gap-4 mt-[50px]">
                <FaqCard name = 'How we serve food?'/>
                <FaqCard name = 'How can we get in touch with you?'/>
                <FaqCard name = 'How is our food quality?'/>
                <FaqCard name = 'What will be delivered? And When?'/>
                <FaqCard name = 'How do we give home delivery?'/>
                <FaqCard name = 'Is this restaurant 24 hours open?'/>  
            </div>
        </div>
      </div>
      <div className="mt-[200px]">
        <MainFooter />
      </div>
    </div>
  );
};

export default page;
