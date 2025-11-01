"use client";

import React from "react";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import MiniCard from "./MiniCard";
import { motion } from "framer-motion";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Hero2 = () => {
  return (
    <div className="w-full flex flex-col py-12 md:py-20 lg:py-28 overflow-hidden">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`${greatVibes.className} text-[#FF9F0D] font-normal text-2xl md:text-3xl flex justify-center`}
      >
        <h1>Choose & pick</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-bold text-3xl md:text-4xl lg:text-5xl flex justify-center text-center"
      >
        <div className="text-[#FF9F0D]">Fr</div>
        <div className="text-[#FFFFFF]">om Our Menu</div>
      </motion.div>

      {/* Scrollable Menu Categories */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full overflow-x-auto mt-7"
      >
        <div className="text-[#FFFFFF] font-bold text-lg md:text-xl flex space-x-4 md:space-x-8 lg:space-x-12 min-w-max md:justify-center px-4">
          {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map((item, i) => (
            <h1 key={i} className="whitespace-nowrap cursor-pointer hover:text-[#FF9F0D] transition-colors duration-300">
              {item}
            </h1>
          ))}
        </div>
      </motion.div>

      {/* Food Display Section */}
      <div className="w-full mt-10 md:mt-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5 hidden md:block"
          >
            <div className="relative aspect-[5/4] w-full rounded-lg overflow-hidden">
              <Image
                src="/food18.png"
                alt="featured food item"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
          </motion.div>

          {/* Food Items Grid */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "/food19.png",
                "/food11.png",
                "/food20.png",
                "/food21.png",
                "/food22.png",
                "/food23.png",
                "/food24.png",
                "/food6.png",
              ].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <MiniCard
                    imageSrc={src}
                    name="Lettuce Leaf"
                    description="Lacus nisi, et ac dapibus velit in consequat."
                    price="12.5$"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
