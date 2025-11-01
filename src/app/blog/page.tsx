"use client";

import React from "react";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import UserCard from "../components/UserCard";
import BlogItems from "../components/BlogItems";
import SmallCard from "../components/SmallCard";
import MainFooter from "../components/MainFooter";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Navbar Section */}
      <motion.div
        className="w-full flex justify-center items-center bg-[#0D0D0DF2]"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />
      </motion.div>

      {/* Hero Image Section */}
      <motion.div
        className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
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
            Blog List
          </h1>
          <div className="font-normal text-base md:text-lg text-white flex items-center gap-2 mt-2">
            Home <ChevronRight className="w-4 h-4" />{" "}
            <div className="text-[#FF9F0D]">Blog</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row">
        {/* Blog Cards Section */}
        <motion.div
          className="w-full lg:w-2/3 flex justify-center mt-8 lg:mt-16"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col justify-center items-center w-full max-w-3xl">
            {[ 
              { img: "/c1.png", title: "10 Reasons To Do A Digital Detox Challenge" },
              { img: "/c2.png", title: "Traditional Soft Pretzels with Sweet Beer Cheese" },
              { img: "/c3.png", title: "The Ultimate Hangover Burger: Egg in a Hole Burger" },
              { img: "/c4.png", title: "My Favorite Easy Black Pizza Toast Recipe" },
            ].map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <BlogCard imageSrc={b.img} name={b.title} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sidebar Section */}
        <motion.div
          className="w-full lg:w-1/3 mt-8 lg:mt-16 lg:ml-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Search Bar */}
          <motion.div
            className="flex items-center w-full h-[60px] rounded-md border mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Search here..."
              className="flex-grow h-full px-4 bg-transparent focus:outline-none text-gray-700"
            />
            <button className="w-14 h-full bg-[#FF9F0D] text-white flex items-center justify-center hover:bg-orange-600">
              <SearchIcon className="w-5 h-5" />
            </button>
          </motion.div>

          {/* User Card */}
          <motion.div
            className="w-full mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <UserCard />
          </motion.div>

          {/* Recent Posts */}
          <motion.div
            className="w-full shadow-md border p-5 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="font-bold text-xl mb-4">Recent Post</div>
            <div className="flex flex-col gap-6">
              {[1, 2, 3, 4].map((i) => (
                <BlogItems
                  key={i}
                  imageSrc={`/item${i}.png`}
                  description1="June 22, 2020"
                  description2="Lorem ipsum dolor sit cing"
                  description3="elit, sed do."
                />
              ))}
            </div>
          </motion.div>

          {/* Filter By Menu */}
          <motion.div
            className="w-full shadow-md border p-5 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="font-bold text-xl mb-4">Filter By Menu</div>
            <div className="flex flex-col gap-4">
              {[
                { img: "/item1.png", name: "Chicken Fry", price: "26" },
                { img: "/item2.png", name: "Burger Food", price: "46" },
                { img: "/item3.png", name: "Pizza", price: "16" },
                { img: "/item4.png", name: "Fresh Fruits", price: "36" },
                { img: "/item5.png", name: "Vegetables", price: "83" },
              ].map((item, i) => (
                <SmallCard key={i} imageSrc={item.img} name={item.name} price={item.price} />
              ))}
            </div>
          </motion.div>

          {/* Blog Images */}
          <motion.div
            className="w-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/blog1.png"
              alt="blog"
              width={422}
              height={316}
              className="w-full h-auto object-cover"
              quality={100}
            />
          </motion.div>

          <motion.div
            className="w-full mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src="/blog2.png"
              alt="blog"
              width={422}
              height={158}
              className="w-full h-auto object-cover"
              quality={100}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <MainFooter />
      </motion.div>
    </div>
  );
};

export default page;
