"use client";

import React from "react";
import { motion } from "framer-motion";
import UpdateIcon from "@mui/icons-material/Update";
import Broast from "./Broast";

const MainFooter = () => {
  return (
    <div className="bg-[#0D0D0DF2] w-full h-auto py-10 sm:py-12 lg:py-16 overflow-hidden">
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-[1170px] mx-auto flex flex-col lg:flex-row lg:items-center lg:border-b-2 border-[#FF9F0D] pb-6 sm:pb-8 lg:pb-10"
      >
        <div className="flex flex-col gap-3 text-center lg:text-left">
          <div className="font-helvetica font-bold text-2xl md:text-[32px] flex justify-center lg:justify-start text-[#FFFFFF]">
            <span className="text-[#FF9F0D]">St</span>
            <span>ill You Need Our Support?</span>
          </div>
          <div className="font-normal text-sm md:text-[16px] text-[#FFFFFF]">
            Don’t wait; make a smart & logical quote here. It’s pretty easy.
          </div>
        </div>
        <div className="mt-6 lg:mt-0 lg:ml-auto">
          <div className="flex items-center w-full max-w-[459px] h-[56px] border mx-auto lg:mx-0">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="flex-grow h-full bg-[#FF9F0D] px-4 text-[#FFFFFF] placeholder-white"
            />
            <button className="w-[163px] h-full bg-[#FFFFFF] text-[#FF9F0D]">
              Subscribe Now
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="text-[#FFFFFF] flex flex-wrap justify-between gap-10 md:gap-20 lg:gap-[130px] w-full max-w-[1170px] mx-auto mt-10">

        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 w-full sm:w-[300px] lg:w-[350px]"
        >
          <h1 className="font-helvetica font-bold text-xl md:text-2xl">About Us</h1>
          <p className="font-normal text-sm md:text-[16px] leading-6">
            Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.
          </p>
          <div className="flex items-start gap-4 mt-4">
            <div className="bg-[#FF9F0D] w-[50px] h-[70px] flex justify-center items-center rounded-lg">
              <UpdateIcon className="text-white text-[50px]" />
            </div>
            <div>
              <p className="font-normal text-[18px]">Opening Hours</p>
              <p className="font-normal text-[14px]">Mon - Sat (8.00 - 6.00)</p>
              <p className="font-normal text-[14px]">Sunday - Closed</p>
            </div>
          </div>
        </motion.div>

        {/* Useful Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 w-full sm:w-[300px] lg:w-[300px]"
        >
          <h1 className="font-helvetica font-bold text-xl md:text-2xl flex justify-center lg:justify-start">
            Useful <span className="ml-2 text-[#FFFFFF]">Links</span>
          </h1>
          <div className="flex flex-col gap-4 mt-3 text-sm md:text-[20px]">
            <a href="/about" className="hover:underline hover:text-[#FF9F0D]">About</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">News</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">Partners</a>
            <a href="/chef" className="hover:underline hover:text-[#FF9F0D]">Team</a>
            <a href="/menu" className="hover:underline hover:text-[#FF9F0D]">Menu</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">Contact</a>
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 w-full sm:w-[300px] lg:w-[300px]"
        >
          <h1 className="font-helvetica font-bold text-xl md:text-2xl">Help?</h1>
          <div className="flex flex-col gap-4 mt-3 text-sm md:text-[20px]">
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">FAQ</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">Terms & Conditions</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">Reporting</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">Documentation</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">Support Policy</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">Privacy</a>
          </div>
        </motion.div>

        {/* Recent Posts Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 w-full sm:w-[300px] lg:w-[350px]"
        >
          <h1 className="font-helvetica font-bold text-xl md:text-2xl">Recent Posts</h1>
          <div className="flex flex-col gap-4 mt-3">
            <Broast name="Keep Your Business" imageSrc="/food10.png" price="20 Feb 2022" />
            <Broast name="Keep Your Business" imageSrc="/food21.png" price="20 Feb 2022" />
            <Broast name="Keep Your Business" imageSrc="/food26.png" price="20 Feb 2022" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainFooter;
