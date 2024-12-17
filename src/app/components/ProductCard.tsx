import React from "react";
import Image from "next/image";
const ProductCard = ({imageSrc, name, price} : any) => {
  return (
    <div>
      <div className="w-[252px] h-[67px] flex items-center">
        {/* Image */}
        <div className="w-[71.81px] h-full">
          <Image
          width={100}
          height={100}
            src={imageSrc} // Replace with your image path
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between pl-3 flex-grow">
          {/* Name */}
          <div className="font-bold text-[14px] text-gray-800">
          {name}
          </div>
          {/* Rating */}
          <div className="text-[12px] text-gray-600">★★★★★ 4.5</div>
          {/* Price */}
          <div className="text-[14px] font-bold text-[#FF9F0D]">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
