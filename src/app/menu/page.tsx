"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Menu1 from "../components/Menu1";
import Menu2 from "../components/Menu2";
import Section5 from "../components/Section5";
import Reciepie from "../components/Reciepie";
import Menu3 from "../components/Menu3";
import Menu4 from "../components/Menu4";
import ProductsSection from "../components/ProductsSection";
import MainFooter from "../components/MainFooter";
import Partner from "../components/Partner";
import AnimatedCounter from "../components/AnimatedCounter";
import { motion } from "framer-motion";

export default function MenuPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Navbar Section */}
      <div className="w-full bg-[#0D0D0DF2]">
        <Navbar />
      </div>

      {/* Hero Banner */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/menu1.png"
            alt="Menu Image"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            Our Menu
          </h1>
          <div className="font-normal text-base md:text-lg text-white flex items-center gap-2 mt-2">
            Home <ChevronRight className="w-4 h-4" />{" "}
            <div className="text-[#FF9F0D]">Menu</div>
          </div>
        </motion.div>
      </div>

      {/* Menu 1 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full py-10 md:py-16"
      >
        <div className="container mx-auto px-4">
          <Menu1 />
        </div>
      </motion.div>

      {/* Menu 2 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full py-10 md:py-16"
      >
        <div className="container mx-auto px-4">
          <Menu2 />
        </div>
      </motion.div>

      {/* Recipe Stats Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full bg-[#0D0D0DF2] py-12 md:py-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            <Reciepie
              imageSrc="/food14.png"
              name="Professional Chefs"
              items={<AnimatedCounter to={420} start={true} />}
            />
            <Reciepie
              imageSrc="/food15.png"
              name="Items Of Food"
              items={<AnimatedCounter to={320} start={true} />}
            />
            <Reciepie
              imageSrc="/food16.png"
              name="Years Of Experienced"
              items={<AnimatedCounter to={30} start={true} />}
            />
            <Reciepie
              imageSrc="/food17.png"
              name="Happy Customers"
              items={<AnimatedCounter to={220} start={true} />}
            />
          </div>
        </div>
      </motion.div>

      {/* Menu 3 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full py-10 md:py-16"
      >
        <div className="container mx-auto px-4">
          <Menu3 />
        </div>
      </motion.div>

      {/* Product Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full py-10 md:py-16"
      >
        <div className="container mx-auto px-4">
          <ProductsSection />
        </div>
      </motion.div>

      {/* Menu 4 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full py-10 md:py-16"
      >
        <div className="container mx-auto px-4">
          <Menu4 />
        </div>
      </motion.div>

      {/* Partners Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full py-12 md:py-16"
      >
        <div className="container mx-auto px-4">
          <Partner />
        </div>
      </motion.div>

      {/* Footer */}
      <MainFooter />
    </div>
  );
}
