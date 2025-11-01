"use client";

import React from "react";
import { motion } from "framer-motion";
import FoodItems from "./FoodItems";

const Section3 = () => {
  return (
    <div className="w-full bg-[#0D0D0DF2]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-0 max-w-[1320px] py-16 md:py-24 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <FoodItems />
        </motion.div>
      </div>
    </div>
  );
};

export default Section3;
