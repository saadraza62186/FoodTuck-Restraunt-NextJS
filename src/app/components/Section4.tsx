import React from "react";
import FoodCard from "./FoodCard";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // You can choose the weight as needed
});

const Section4 = () => {
  return (
    <div className="w-[1920px] h-[950px] bg-[#0D0D0DF2]">
      <div className="w-[1320px] h-[716px] ml-[300px] flex">
        <div>
          <FoodCard />
        </div>
        <div>
          <div className="flex flex-col gap-6 ml-[100px]">
            <div>
              <h1
                className={`${greatVibes.className} text-[#FF9F0D] font-normal text-[32px]`}
              >
                Why Choose us
              </h1>
            </div>
            <div className="flex flex-col font-bold text-5xl w-[446px] gap-2 h-[110px] font-helvetica">
              <div className="flex">
                <div>
                  <h1 className="text-[#FF9F0D]">Ex</h1>
                </div>
                <div className="text-[#FFFFFF]">ta ordinary taste </div>
              </div>
              <div className="text-[#FFFFFF]"> And Experienced</div>
            </div>
            <div className="font-normal text-[16px] w-[526px] h-[130px] text-[#FFFFFF]">
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
                sit eu velit in consequat.
              </h1>
            </div>
            <div className="flex gap-[40px]">
              <div className="w-[102px] h-[100px] bg-[#FF9F0D] flex justify-center items-center">
                <Image
                  src="/burger.png"
                  alt="burger Icon"
                  width={322}
                  height={194}
                  className="w-[56px] h-[56px]"
                />
              </div>
              <div className="w-[102px] h-[100px] bg-[#FF9F0D] flex justify-center items-center">
                <Image
                  src="/cookie.png"
                  alt="burger Icon"
                  width={322}
                  height={194}
                  className="w-[56px] h-[56px]"
                />
              </div>
              <div className="w-[102px] h-[100px] bg-[#FF9F0D] flex justify-center items-center">
                <Image
                  src="/Wine.png"
                  alt="burger Icon"
                  width={322}
                  height={194}
                  className="w-[56px] h-[56px]"
                />
              </div>
            </div>
            <div className="w-[374px] h-[93px] mt-[40px]">
            <Image
                  src="/experienced.png"
                  alt="burger Icon"
                  width={322}
                  height={194}
                  className="w-full h-full"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
