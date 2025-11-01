"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})


const Section2 = () => {
  return (
    <div className="w-full bg-[#0D0D0DF2] py-12 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1320px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="flex flex-col gap-4 lg:gap-4">
            <h2 className={`${greatVibes.className} text-[#FF9F0D] font-normal text-2xl md:text-4xl italic font-serif`}>
              About us
            </h2>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl leading-tight">
                <span className="text-[#FF9F0D]">We</span>{" "}
                <span className="text-white">Create the best</span>
              </h1>
              <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl leading-tight text-white">
                foody product
              </h1>
            </div>

            <p className="text-white text-base leading-relaxed opacity-90">
              At our restaurant, we bring you fresh, flavorful dishes made with
              the highest quality ingredients. From classic meals to gourmet
              creations, our food is designed to delight your taste buds and
              make every dining experience unforgettable.
            </p>
            <div className="flex flex-col gap-4 text-white">
              <div className="flex items-start gap-3">
                <Check className="text-white flex-shrink-0 w-5 h-5 mt-1" />
                <span className="text-base md:text-base">
                  Fresh ingredients sourced daily for quality meals.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-white flex-shrink-0 w-5 h-5 mt-1" />
                <span className="text-base md:text-base">
                  Fast and friendly service for a great experience.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-white flex-shrink-0 w-5 h-5 mt-1" />
                <span className="text-base md:text-base">
                  Delicious meals that keep you coming back for more.
                </span>
              </div>
            </div>

            <div className="mt-2">
              <button className="w-full sm:w-auto px-8 py-2 bg-[#FF9F0D] text-white text-lg font-semibold rounded-full hover:bg-[#e08c0b] transition-all duration-300 hover:shadow-lg">
                Read More
              </button>
            </div>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 gap-4">
              <div className="w-full aspect-[2/1] relative rounded-lg overflow-hidden">
                <Image
                  src="/boiled.png"
                  alt="Delicious boiled food"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 660px"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="w-full aspect-[16/10] relative rounded-lg overflow-hidden">
                  <Image
                    src="/food3.png"
                    alt="Fresh food item"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 322px"
                  />
                </div>
                <div className="w-full aspect-[16/10] relative rounded-lg overflow-hidden">
                  <Image
                    src="/food4.png"
                    alt="Gourmet dish"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 322px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
