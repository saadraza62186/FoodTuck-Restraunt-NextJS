"use client"

import React from "react";
import Image from "next/image";
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

interface LargeCardProps {
  imageSrc: string;
  date: string;
  description: string;
}

const LargeCard = ({ imageSrc, date, description }: LargeCardProps) => {
  return (
    <div className="w-full bg-transparent shadow-lg rounded-lg overflow-hidden border border-white/20 h-full flex flex-col">
      {/* Image */}
      <div className="w-full aspect-[4/3] relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt="Blog Image"
          fill
          className="object-cover"
          priority={true}
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        {/* Date */}
        <div className="text-[#FF9F0D] text-sm mb-2">
          {date}
        </div>

        {/* Description */}
        <h1 className="text-xl md:text-2xl font-bold text-[#FFFFFF] mb-4">
          {description}
        </h1>

        {/* Spacer to push the footer to the bottom */}
        <div className="flex-grow"></div>

        {/* Learn More + Icons */}
        <div className="flex items-center justify-between mt-4">
          {/* Learn More Button */}
          <button className="text-[#FFFFFF] text-sm hover:text-[#FF9F0D] transition-colors">
            Learn More
          </button>

          {/* Icons */}
          <div className="flex gap-3">
            <button className="text-[#FFFFFF] hover:text-[#FF9F0D] transition-colors">
              <ThumbsUp className="w-5 h-5" />
            </button>
            <button className="text-[#FF9F0D]">
              <MessageSquare className="w-5 h-5" />
            </button>
            <button className="text-[#FFFFFF] hover:text-[#FF9F0D] transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
