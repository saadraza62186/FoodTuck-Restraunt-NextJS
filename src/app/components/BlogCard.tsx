"use client";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ForumIcon from "@mui/icons-material/Forum";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";
import { motion } from "framer-motion";

const BlogCard = ({ imageSrc, name }: any) => {
  return (
    <motion.div
      className="w-full max-w-[872px] mx-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-full bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
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

        {/* Info Section */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 p-4 sm:p-5 md:p-6 border-b border-gray-100">
          <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
            <CalendarMonthIcon className="text-[#FF9F0D]" />
            <span>Feb 14, 2022</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
            <ForumIcon className="text-[#FF9F0D]" />
            <span>3</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
            <GroupAddIcon className="text-[#FF9F0D]" />
            <span>Admin</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-5 md:p-6 lg:p-8">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-helvetica font-bold text-gray-800 mb-3 sm:mb-4 md:mb-5 leading-tight">
            {name}
          </h1>

          <p className="text-sm sm:text-base md:text-[16px] text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
            Learn how to get the best results at home: short bakes at very high
            heat yield the most char and chew. Keep toppings light and focus on
            great dough — flavor comes from technique and quality ingredients.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base text-[#FF9F0D] rounded border-2 border-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white transition-all duration-300 font-medium inline-flex items-center gap-2"
          >
            <span>Read More</span>
            <ArrowOutwardIcon className="text-base sm:text-lg" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogCard;
