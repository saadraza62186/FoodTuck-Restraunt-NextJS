import React from "react";
import Image from "next/image";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AlderCard from "./AlderCard";

const Menu1 = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row xl:justify-between mt-[30px] sm:mt-[50px] xl:mt-[100px] gap-10 2xl:w-[1320px] 2xl:h-[628px]">
      {/* Left Image Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[500px] 2xl:w-[448px] 2xl:h-[626px]">
        <Image
          src="/menu2.png" // Ensure this path is correct
          alt="Prawns Image"
          layout="responsive"
          width={448} // Original image width
          height={626} // Original image height
          quality={100}
        />
      </div>

      {/* Right Content Section */}
      <div className="flex flex-col gap-6 md:gap-8 2xl:gap-[25px]">
        {/* Header Section */}
        <div className="flex flex-col gap-3">
          <ThumbUpIcon className="w-6 h-6 sm:w-[24px] sm:h-[24px] text-[#FF9F0D]" />
          <h1 className="font-helvetica font-bold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-[#333333]">
            Starter Menu
          </h1>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-4 md:gap-6">
          <AlderCard
            name="Alder Grilled Chinook Salmon"
            description1="Toasted French bread topped with romano, cheddar"
            description2="560 CAL"
            price="32$"
          />
          <AlderCard
            name="Berries and creme tart"
            description1="Gorgonzola, ricotta, mozzarella, taleggio"
            description2="700 CAL"
            price="43$"
            isYellow // Add this prop for yellow text
          />
          <AlderCard
            name="Tormentoso Bush Pizza Pintoage"
            description1="Ground cumin, avocados, peeled and cubed"
            description2="1000 CAL"
            price="14$"
          />
          <AlderCard
            name="Spicy Vegan Potato Curry"
            description1="Spreadable cream cheese, crumbled blue cheese"
            description2="560 CAL"
            price="35$"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu1;
