import React from "react";
import Image from "next/image";
const OurChef = ({imageSrc, name} : any) => {
  return (
    <div className="w-[312px] h-[446px]">
      <div>
        <Image
          src={imageSrc}
          alt={name}
          width={322}
          height={194}
          className="w-full h-full"
          quality={100} // Quality range is 1-100
        />
      </div>

      <div className="flex flex-col justify-center items-center mt-3">
        <h1 className="font-helvetica font-bold text-xl">{name}</h1>
        <h1 className="font-normal text-[18px]">Chef</h1>
      </div>
    </div>
  );
};

export default OurChef;
