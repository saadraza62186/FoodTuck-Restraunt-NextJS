"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Great_Vibes } from "next/font/google";
import { motion } from "framer-motion";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Section2 = () => {
  return (
    <div className="w-full bg-[#0D0D0DF2] py-12 md:py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1320px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Side (Text) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-4 lg:gap-4"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`${greatVibes.className} text-[#FF9F0D] font-normal text-2xl md:text-4xl italic font-serif`}
            >
              About us
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col gap-2"
            >
              <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl leading-tight">
                <span className="text-[#FF9F0D]">We</span>{" "}
                <span className="text-white">Create the best</span>
              </h1>
              <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl leading-tight text-white">
                foody product
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-white text-base leading-relaxed opacity-90"
            >
              At our restaurant, we bring you fresh, flavorful dishes made with
              the highest quality ingredients. From classic meals to gourmet
              creations, our food is designed to delight your taste buds and
              make every dining experience unforgettable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col gap-4 text-white"
            >
              {[
                "Fresh ingredients sourced daily for quality meals.",
                "Fast and friendly service for a great experience.",
                "Delicious meals that keep you coming back for more.",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 1 + index * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-3"
                >
                  <Check className="text-white flex-shrink-0 w-5 h-5 mt-1" />
                  <span className="text-base md:text-base">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
              className="mt-2"
            >
              <button className="w-full sm:w-auto px-8 py-2 bg-[#FF9F0D] text-white text-lg font-semibold rounded-full hover:bg-[#e08c0b] transition-all duration-300 hover:shadow-lg">
                Read More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side (Images) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full"
          >
            <div className="grid grid-cols-1 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="w-full aspect-[2/1] relative rounded-lg overflow-hidden"
              >
                <Image
                  src="/boiled.png"
                  alt="Delicious boiled food"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="w-full aspect-[16/10] relative rounded-lg overflow-hidden"
                >
                  <Image
                    src="/food3.png"
                    alt="Fresh food item"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="w-full aspect-[16/10] relative rounded-lg overflow-hidden"
                >
                  <Image
                    src="/food4.png"
                    alt="Gourmet dish"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
