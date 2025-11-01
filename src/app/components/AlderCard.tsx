"use client";
import React from "react";
import { motion } from "framer-motion";

interface AlderCardProps {
  name: string;
  description1: string;
  description2: string;
  price: string;
  isYellow?: boolean; // Optional prop for yellow text
}

const AlderCard: React.FC<AlderCardProps> = ({
  name,
  description1,
  description2,
  price,
  isYellow,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full max-w-full min-h-[100px] sm:min-h-[110px] md:min-h-[111px] flex flex-col gap-2 sm:gap-2.5 md:gap-3 py-2 sm:py-3 border-b border-gray-100 last:border-b-0"
    >
      <div className="font-helvetica font-bold text-base sm:text-lg md:text-xl lg:text-2xl flex xs:flex-row xs:justify-between xs:items-start gap-1 xs:gap-2">
        <div
          className={`${
            isYellow ? "text-[#FF9F0D]" : "text-black"
          } flex-1 leading-tight pr-2`}
        >
          {name}
        </div>
        <div className="text-[#FF9F0D] font-bold whitespace-nowrap flex-shrink-0">
          {price}
        </div>
      </div>

      <div className="flex flex-col gap-0.5 sm:gap-1">
        <div className="font-normal text-sm sm:text-base md:text-[16px] text-[#4F4F4F] leading-relaxed">
          {description1}
        </div>
        <div className="font-helvetica font-normal text-xs sm:text-sm md:text-[16px] text-[#828282]">
          {description2}
        </div>
      </div>
    </motion.div>
  );
};

export default AlderCard;
