"use client";

import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import { motion } from "framer-motion";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const FoodItems = () => {
  const foodImages = ["/food5.png", "/food6.png", "/food7.png", "/food8.png"];

  return (
    <div className="w-full">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-8"
      >
        <h2
          className={`${greatVibes.className} text-[#FF9F0D] text-2xl sm:text-3xl font-normal mb-4`}
        >
          Food Category
        </h2>

        <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-helvetica">
          <span className="text-[#FF9F0D]">Ch</span>
          <span className="text-white">oose Food Item</span>
        </div>
      </motion.div>

      {/* Food Images */}
      <div className="flex flex-wrap gap-6 sm:gap-3 items-center justify-center mt-2">
        {foodImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.3 + index * 0.2,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-[270px]"
          >
            <Image
              src={src}
              alt={`Food item ${index + 5}`}
              width={306}
              height={329}
              className="rounded-lg w-[280px] h-auto aspect-[306/329] object-cover hover:scale-105 transition-transform duration-300"
              quality={100}
              unoptimized
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FoodItems;
