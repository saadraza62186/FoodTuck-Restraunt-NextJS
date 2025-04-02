import React from "react";
import Image from "next/image";

const OurChef = ({imageSrc, name} : any) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full aspect-[3/4] relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center items-center mt-3 py-2">
        <h1 className="font-helvetica font-bold text-lg md:text-xl">{name}</h1>
        <h1 className="font-normal text-base md:text-lg text-gray-600">Chef</h1>
      </div>
    </div>
  );
};

export default OurChef;
