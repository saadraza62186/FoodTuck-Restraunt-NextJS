import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ForumIcon from "@mui/icons-material/Forum";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";

const BlogCard = ({ imageSrc, name }: any) => {
  return (
    <div className="w-full max-w-[872px] mx-auto">
      <div className="w-full bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full aspect-[871/520]">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 872px"
          />
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 w-14 h-14 sm:w-16 sm:h-16 md:w-[60px] md:h-[60px] bg-[#FF9F0D] font-normal text-white text-sm sm:text-base flex flex-col justify-center items-center rounded shadow-lg">
            <span className="font-bold">14</span>
            <span className="text-xs sm:text-sm">Feb</span>
          </div>
        </div>

        {/* Date, Message, and Admin Section */}
        <div className="flex flex sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 p-4 sm:p-5 md:p-6 border-b border-gray-100">
          <div className="flex justify-start items-center gap-2 text-sm sm:text-base text-gray-700">
            <CalendarMonthIcon className="text-[#FF9F0D] text-lg sm:text-xl" />
            <span>Feb 14, 2022</span>
          </div>
          <div className="flex justify-start items-center gap-2 text-sm sm:text-base text-gray-700">
            <ForumIcon className="text-[#FF9F0D] text-lg sm:text-xl" />
            <span>3</span>
          </div>
          <div className="flex justify-start items-center gap-2 text-sm sm:text-base text-gray-700">
            <GroupAddIcon className="text-[#FF9F0D] text-lg sm:text-xl" />
            <span>Admin</span>
          </div>
        </div>

        {/* Heading Section */}
        <div className="p-4 sm:p-5 md:p-6 lg:p-8">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-helvetica font-bold text-gray-800 mb-3 sm:mb-4 md:mb-5 leading-tight">
            {name}
          </h1>

          {/* Paragraph Section */}
          <p className="text-sm sm:text-base md:text-[16px] text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
            Learn how to get the best results at home: short bakes at very high
            heat yield the most char and chew. Keep toppings light and focus on
            great dough — flavor comes from technique and quality ingredients.
          </p>

          {/* Read More Button */}
          <button className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base text-[#FF9F0D] rounded border-2 border-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white transition-all duration-300 font-medium inline-flex items-center gap-2">
            <span>Read More</span>
            <ArrowOutwardIcon className="text-base sm:text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
