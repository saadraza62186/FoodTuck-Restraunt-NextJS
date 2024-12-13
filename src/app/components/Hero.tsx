import React from 'react'
import Image from 'next/image'
import MainNav from "./MainNav";
import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // You can choose the weight as needed
});
const Hero = () => {
  return (
    <div>
          
          <div className="w-[472px] h-[356px] mt-[293px] ml-[300px] flex flex-col justify-between">
            <h1
              className={`${greatVibes.className} text-5xl text-[#FF9F0D] font-normal text-[32px]`}
            >
              Its Quick & Amusing!
            </h1>
            <div className="font-bold text-6xl flex-col text-white">
              <div className="flex">
                <h1 className="text-[#FF9F0D]">Th</h1>
                <div className="flex">e Art of</div>
              </div>
              <h1 className="flex">speed food Quality</h1>
            </div>
            <p className="font-normal text-[16px] text-[#FFFFFF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
            <div>
              <button className="w-[190px] h-[60px] bg-[#FF9F0D] text-white rounded-[30px]">
                See Menu
              </button>
            </div>
          </div>
        </div>
  )
}

export default Hero