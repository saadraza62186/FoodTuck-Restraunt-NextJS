import React from "react";
import Image from "next/image";
import AlderCard from "./AlderCard";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Menu4 = () => {
  return (
    <div className="w-full 2xl:w-[1320px] h-auto flex flex-col 2xl:flex-row justify-between">
      {/* Left Content Section */}
      <div className="flex flex-col gap-[25px] 2xl:gap-[25px] w-full 2xl:w-[880px]">
        <div className="flex flex-col gap-3">
          <div>
            <ThumbUpIcon className="w-[24px] h-[24px] text-[#FF9F0D]" />
          </div>
          <div className="font-helvetica font-bold text-3xl sm:text-4xl lg:text-5xl 2xl:text-5xl text-[#333333]">
            <h1>Drinks</h1>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6 2xl:gap-6">
            <AlderCard
              name="Caffè macchiato"
              description1="Toasted French bread topped with romano, cheddar"
              description2="560 CAL"
              price="32$"
            />
            <AlderCard
              name="Aperol Spritz Capacianno"
              description1="Gorgonzola, ricotta, mozzarella, taleggio"
              description2="700 CAL"
              price="43$"
            />
            <AlderCard
              name="Caffe Latte Campuri"
              description1="Ground cumin, avocados, peeled and cubed"
              description2="1000 CAL"
              price="14$"
            />
            <AlderCard
              name="Tormentoso BushTea Pintoage"
              description1="Spreadable cream cheese, crumbled blue cheese"
              description2="560 CAL"
              price="35$"
            />
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full sm:w-[300px] md:w-[400px] 2xl:w-[448px] h-auto 2xl:h-[626px]">
        <Image
          src="/menu6.png" // Ensure this path is correct
          alt="Drinks Image"
          layout="responsive"
          width={448}
          height={626}
          quality={100}
        />
      </div>
    </div>
  );
};

export default Menu4;
