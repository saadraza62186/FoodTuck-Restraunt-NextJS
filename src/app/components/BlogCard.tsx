import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ForumIcon from "@mui/icons-material/Forum";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";
const BlogCard = ({imageSrc, name} : any) => {
  return (
    <div>
      <div className="2xl:w-[872px] 2xl:h-[830px] bg-white">
        {/* Image Section */}
         {/* Image Section */}
      <div className="relative">
      <Image
      src={imageSrc}
      alt={name}
      width={871}
      height={520}
      className="2xl:w-[871px] 2xl:h-[520px]"
      quality={90}
      objectFit="cover"
    />
        <div className="absolute bottom-[420px] left-[30px] w-[59.93px] h-[60px] bg-[#FF9F0D] font-normal text-white text-[16px] flex flex-col justify-center items-center">
            <h1>14</h1>
            <h1>Feb</h1>
        </div>
      </div>

        {/* Date, Message, and Admin Section */}
        <div className="2xl:flex p-4 items-center gap-[30px]">
          <h1 className="flex justify-center items-center gap-2">
            <CalendarMonthIcon className="text-[#FF9F0D]" />
            Feb 14, 2022
          </h1>
          <h1 className="flex justify-center items-center gap-2">
            <ForumIcon className="text-[#FF9F0D]" />3
          </h1>
          <h1 className="flex justify-center items-center gap-2">
            <GroupAddIcon className="text-[#FF9F0D]" />
            Admin
          </h1>
        </div>

        {/* Heading Section */}
        <div className="p-4">
          <h1 className="2xl:text-[20px] font-helvetica font-bold text-gray-800 mb-4">
            {name}
          </h1>

          {/* Paragraph Section */}
          <p className="2xl:text-base text-gray-600 mb-6">
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat.
          </p>

          {/* Read More Button */}
          <button className="2xl:px-6 2xl:py-2 text-[#FF9F0D] rounded border border-[#FF9F0D] ">
            Read More <ArrowOutwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
