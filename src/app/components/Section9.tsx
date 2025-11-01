"use client";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Section9 = () => {
  return (
    <div className="w-full relative overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[558px] relative"
      >
        <Image
          src="/food25.png"
          alt="Food Background"
          fill
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-lg md:max-w-2xl lg:max-w-3xl ml-auto text-white">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="font-normal text-xl md:text-2xl lg:text-3xl mb-2 md:mb-4"
            >
              <h1 className={`${greatVibes.className} text-[#FF9F0D]`}>
                Restaurant Active Process
              </h1>
            </motion.div>

            {/* Headings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-3 md:mb-6"
            >
              <div className="font-bold text-2xl md:text-3xl lg:text-5xl flex flex-wrap gap-2">
                <div className="text-[#FF9F0D]">We</div>
                <div>Document Every Food</div>
              </div>
              <div className="font-bold text-2xl md:text-3xl lg:text-5xl">
                <div>Bean Process until it is saved</div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="font-normal text-sm md:text-base mb-4 md:mb-6 max-w-md lg:max-w-2xl"
            >
              <p>
                Our team ensures that every dish is prepared with the highest
                quality ingredients, carefully monitored at each step. From
                selecting fresh produce to perfecting flavors, we maintain a
                seamless process to guarantee a delightful dining experience.
              </p>
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/about">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10">
                  <button className="px-6 py-3 border border-[#FF9F0D] text-white bg-transparent rounded-full hover:bg-[#FF9F0D]/10 transition-colors w-full sm:w-auto">
                    See More
                  </button>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
