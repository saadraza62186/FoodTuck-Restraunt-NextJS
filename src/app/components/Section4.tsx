"use client";
import { motion } from "framer-motion";
import FoodCard from "./FoodCard";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Section4 = () => {
  return (
    <div className="w-full bg-[#0D0D0DF2] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-0 max-w-[1320px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* 🍔 Left Side - Food Card Animation */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <FoodCard />
          </motion.div>

          {/* 🍕 Right Side - Text Animation */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`${greatVibes.className} text-[#FF9F0D] font-normal text-2xl sm:text-3xl`}
            >
              Why Choose us
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col font-bold text-3xl sm:text-4xl lg:text-5xl gap-2 font-helvetica"
            >
              <div className="flex flex-wrap">
                <h1 className="text-[#FF9F0D]">Ex</h1>
                <div className="text-[#FFFFFF]">tra ordinary taste </div>
              </div>
              <div className="text-[#FFFFFF]">And Experienced</div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="font-normal text-base text-[#FFFFFF] w-[500px]"
            >
              Our restaurant combines fresh ingredients, bold flavors, and
              experienced chefs to deliver extraordinary meals every time.
              From gourmet burgers to delectable desserts and fine wines, we
              ensure every bite is a memorable experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 sm:gap-6 md:gap-10"
            >
              {["/burger.png", "/cookie.png", "/Wine.png"].map((icon, i) => (
                <div
                  key={i}
                  className="w-[80px] h-[80px] sm:w-[102px] sm:h-[100px] bg-[#FF9F0D] flex justify-center items-center rounded-md"
                >
                  <Image
                    src={icon}
                    alt={`icon-${i}`}
                    width={56}
                    height={56}
                    className="w-[40px] h-[40px] sm:w-[56px] sm:h-[56px]"
                    quality={100}
                    unoptimized
                  />
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full sm:w-[374px] mt-6 md:mt-10"
            >
              <Image
                src="/experienced.png"
                alt="Experienced"
                width={374}
                height={93}
                className="w-full h-auto"
                quality={100}
                unoptimized
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
