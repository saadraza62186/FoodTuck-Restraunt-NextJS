"use client"

import React from "react";
import { motion } from "framer-motion";
import { Great_Vibes } from 'next/font/google';
import LargeCard from "./LargeCard";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Section10 = () => {
  return (
    <div className="w-full bg-[#0D0D0DF2] py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`${greatVibes.className} text-[#FF9F0D] font-normal text-2xl md:text-3xl flex justify-center`}
        >
          <h1>Blog Post</h1>
        </motion.div>

        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="font-bold text-3xl md:text-4xl lg:text-5xl flex justify-center text-center"
        >
          <div className="text-[#FF9F0D]">La</div>
          <div className="text-[#FFFFFF]">&nbsp;test News & Blog</div>
        </motion.div>

        {/* Cards Animation */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10 md:mt-16"
        >
          <LargeCard 
            imageSrc="/food6.png" 
            date="10 February 2022" 
            description="Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis"
          />
          <LargeCard 
            imageSrc="/pizza.png" 
            date="10 February 2022" 
            description="Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A"
          />
          <LargeCard 
            imageSrc="/food9.png" 
            date="10 February 2022" 
            description="Curabitur rutrum velit ac congue malesuada"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Section10;
