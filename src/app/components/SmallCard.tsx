import React from "react";
import Image from "next/image";
const SmallCard = ({imageSrc,name,price} : any) => {
  return (
    <div className="w-[311px] h-[62px] flex items-center p-2 ">
      {/* Image Section */}
      <Image
      width={100}
      height={100}
        src={imageSrc}
        alt={name}
        className="w-[67px] h-[62px] object-cover rounded-md"
      />

      {/* Text Section */}
      <div className="flex-1 ml-4">
        <h1 className="text-gray-800 font-semibold text-base">{name}</h1>
      </div>

      {/* Price Section */}
      <h2 className="text-gray-700 font-bold text-base">{price}</h2>
    </div>
  );
};

export default SmallCard;