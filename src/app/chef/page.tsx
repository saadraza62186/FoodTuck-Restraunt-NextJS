"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import OurChef from "../components/OurChef";
import MainFooter from "../components/MainFooter";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const page = () => {
  const chefs = [
    { imageSrc: "/oc1.png", name: "Tahmina Rumi" },
    { imageSrc: "/oc2.png", name: "Jorina Begum" },
    { imageSrc: "/oc3.png", name: "M.Mohammad" },
    { imageSrc: "/oc4.png", name: "Munna Kathy" },
    { imageSrc: "/oc5.png", name: "Tahmina Rumi" },
    { imageSrc: "/oc6.png", name: "Bisnu devgon" },
    { imageSrc: "/oc7.png", name: "Motin Molladsf" },
    { imageSrc: "/oc8.png", name: "William Rumi" },
    { imageSrc: "/oc9.png", name: "Kets william roy" },
    { imageSrc: "/oc10.png", name: "Mahmud kholil" },
    { imageSrc: "/oc11.png", name: "Ataur Rahman" },
    { imageSrc: "/oc12.png", name: "Monalisa holly" },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navbar Section */}
      <div className="w-full flex justify-center items-center bg-[#0D0D0DF2]">
        <Navbar />
      </div>

      {/* Image Section */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] relative">
        <Image
          src="/menu1.png"
          alt="Menu Image"
          fill
          className="object-cover"
          quality={100}
        />
        <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">
                    Our Chef
                  </h1>
                  <div className="font-normal text-base md:text-lg text-white flex items-center gap-2 mt-2">
                    Home <ChevronRight className="w-4 h-4" />{" "}
                    <div className="text-[#FF9F0D]">Chef</div>
                  </div>
                </motion.div>
      </div>

      {/* Chef Grid Section with animation */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {chefs.map((chef, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <OurChef imageSrc={chef.imageSrc} name={chef.name} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <MainFooter />
      </div>
    </div>
  );
};

export default page;
