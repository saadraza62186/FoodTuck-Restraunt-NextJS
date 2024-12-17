import React from "react";
import Image from "next/image";
const ShopItems = ({ imageSrc, description, price }: any) => {
  return (
    <div className="w-[312px] h-[330px]">
      <div className="w-[312px] h-[267px]">
        <Image
          src={imageSrc} // Use WebP format for better quality
          alt={description}
          width={312} // Match actual display size
          height={267}
          quality={100} // Maximum quality
          className="w-full h-full object-cover"
        />
      </div>

      <div className="font-bold text-[18px] mt-2 flex flex-col gap-1">
        <h1>{description}</h1>
        <div className="font-normal text-[16px] flex gap-2">
          <div className="text-[#FF9F0D]">{price}</div>
          <div className="text-gray-500 line-through">$45.00</div>
        </div>
      </div>
    </div>
  );
};

export default ShopItems;
