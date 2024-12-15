import React from "react";
import Image from "next/image";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import TextsmsIcon from "@mui/icons-material/Textsms";
import ShareIcon from "@mui/icons-material/Share";
const LargeCard = ({imageSrc, date, description} : any) => {
  return (
    <div className="w-[424px] h-[569px] bg-transparent shadow-lg rounded-lg overflow-hidden border border-white">
      {/* Image */}
      <div className="w-full h-[349px] relative">
        <Image
          src={imageSrc} // Replace with your image path
          alt="Card Image"
          width={424}
          height={349}
          className="w-full h-full object-cover"
          quality={100} // Ensures high-quality image rendering
          priority={true} // Loads the image with priority to improve loading time
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Date */}
        <div className="text-[#FF9F0D] text-sm mb-2 font-normal text-[16px] mt-[20px]">
          {date}
        </div>

        {/* Description */}
        <h1 className="text-[24px] font-bold font-helvetica text-[#FFFFFF] mb-4 ">
         {description}
        </h1>

        {/* Learn More + Icons */}
        <div className="flex items-center justify-between mt-[40px]">
          {/* Learn More Button */}
          <button className="text-[#FFFFFF] text-sm mb-2 font-normal text-[16px]">
            Learn More
          </button>

          {/* Icons */}
          <div className="flex gap-3">
            <div className="w-[32px] h-[32px] text-[#FFFFFF] bg- flex justify-center items-center">
              <ThumbUpIcon />
            </div>
            <div className="w-[32px] h-[32px] text-[#FF9F0D] flex justify-center items-center">
              <TextsmsIcon />
            </div>
            <div className="w-[32px] h-[32px] text-[#FFFFFF] flex justify-center items-center">
              <ShareIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
