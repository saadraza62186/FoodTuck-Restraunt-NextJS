import React from "react";

interface AlderCardProps {
  name: string;
  description1: string;
  description2: string;
  price: string;
  isYellow?: boolean; // Optional prop for yellow text
}

const AlderCard: React.FC<AlderCardProps> = ({ name, description1, description2, price, isYellow }) => {
  return (
    <div className="w-[760px] h-[111px] flex flex-col gap-2">
      <div className="font-helvetica font-bold text-[24px] flex justify-between">
        {/* Apply conditional styling for name */}
        <div className={`${isYellow ? 'text-[#FF9F0D]' : 'text-black'}`}>{name}</div>
        <div className="text-[#FF9F0D]">{price}</div>
      </div>
      <div>
        <div className="font-normal text-[16px] text-[#4F4F4F]">{description1}</div>
        <div className="font-helvetica font-normal text-[16px] text-[#828282]">{description2}</div>
      </div>
    </div>
  );
};

export default AlderCard;
