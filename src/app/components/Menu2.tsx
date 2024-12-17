import React from "react";
import Image from "next/image";
import AlderCard from "./AlderCard";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Menu2 = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row xl:justify-between gap-10 xl:gap-0 xl:w-[1320px] xl:h-[628px]">
      {/* Left Content Section */}
      <div className="flex flex-col gap-6 xl:gap-[25px]">
        {/* Header Section */}
        <div className="flex flex-col gap-3">
          <ThumbUpIcon className="w-6 h-6 sm:w-[24px] sm:h-[24px] text-[#FF9F0D]" />
          <h1 className="font-helvetica font-bold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-[#333333]">
            Main Course
          </h1>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-4 md:gap-6">
          <AlderCard
            name="Main Course"
            description1="Toasted French bread topped with romano, cheddar"
            description2="560 CAL"
            price="32$"
          />
          <AlderCard
            name="Cashew Chicken With Stir-Fry"
            description1="Gorgonzola, ricotta, mozzarella, taleggio"
            description2="700 CAL"
            price="43$"
          />
          <AlderCard
            name="Vegetables & Green Salad"
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

      {/* Right Image Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[500px] 2xl:w-[448px] 2xl:h-[626px]">
        <Image
          src="/menu4.png" // Ensure this path is correct
          alt="Prawns Image"
          layout="responsive"
          width={448} // Original image width
          height={626} // Original image height
          quality={100}
        />
      </div>
    </div>
  );
};

export default Menu2;
