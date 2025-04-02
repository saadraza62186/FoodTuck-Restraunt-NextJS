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

const page = () => {
  return (
    <div className="w-full">
      {/* Navbar Section */}
      <div className="w-full flex justify-center items-center bg-[#0D0D0DF2]">
        <Navbar />
      </div>
      
      {/* Image Section */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] relative">
        {/* Background Image */}
        <Image
          src="/menu1.png"
          alt="Menu Image"
          fill
          className="object-cover"
          quality={100}
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-helvetica font-bold text-3xl md:text-4xl lg:text-[48px] text-white">
            Blog List
          </h1>
          <div className="font-normal text-base md:text-lg lg:text-xl text-white flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-3 h-3 md:w-4 md:h-4" />{" "}
            <div className="text-[#FF9F0D]">Blog</div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row">
        {/* Blog Cards Section */}
        <div className="w-full lg:w-2/3 flex justify-center mt-8 lg:mt-16">
          <div className="flex flex-col justify-center items-center w-full max-w-3xl">
            <BlogCard imageSrc="/c1.png" name="10 Reasons To Do A Digital Detox Challenge" />
            <BlogCard imageSrc="/c2.png" name="Traditional Soft Pretzels with Sweet Beer Cheese" />
            <BlogCard imageSrc="/c3.png" name="The Ultimate Hangover Burger: Egg in a Hole Burger" />
            <BlogCard imageSrc="/c4.png" name="My Favorite Easy Black Pizza Toast Recipe" />
          </div>
        </div>
        
        {/* Sidebar Section */}
        <div className="w-full lg:w-1/3 mt-8 lg:mt-16 lg:ml-6">
          {/* Search Bar */}
          <div className="flex items-center w-full h-[60px] rounded-md border mb-6">
            <input
              type="text"
              placeholder="Search here..."
              className="flex-grow h-full px-4 bg-transparent focus:outline-none text-gray-700"
            />
            <button className="w-14 h-full bg-[#FF9F0D] text-white flex items-center justify-center hover:bg-orange-600">
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>
          
          {/* User Card */}
          <div className="w-full mb-8">
            <UserCard />
          </div>
          
          {/* Recent Posts */}
          <div className="w-full shadow-md border p-5 mb-8">
            <div className="font-helvetica font-bold text-xl mb-4">
              Recent Post
            </div>
            <div className="flex flex-col gap-6">
              <BlogItems
                imageSrc="/item1.png"
                description1="June 22, 2020"
                description2="Lorem ipsum dolor sit cing"
                description3="elit, sed do."
              />
              <BlogItems
                imageSrc="/item2.png"
                description1="June 22, 2020"
                description2="Lorem ipsum dolor sit cing"
                description3="elit, sed do."
              />
              <BlogItems
                imageSrc="/item3.png"
                description1="June 22, 2020"
                description2="Lorem ipsum dolor sit cing"
                description3="elit, sed do."
              />
              <BlogItems
                imageSrc="/item4.png"
                description1="June 22, 2020"
                description2="Lorem ipsum dolor sit cing"
                description3="elit, sed do."
              />
            </div>
          </div>
          
          {/* Filter By Menu */}
          <div className="w-full shadow-md border p-5 mb-8">
            <div className="font-helvetica font-bold text-xl mb-4">
              Filter By Menu
            </div>
            <div className="flex flex-col gap-4">
              <SmallCard imageSrc="/item1.png" name="Chicken Fry" price="26" />
              <SmallCard imageSrc="/item2.png" name="Burger Food" price="46" />
              <SmallCard imageSrc="/item3.png" name="Pizza" price="16" />
              <SmallCard imageSrc="/item4.png" name="Fresh Fruits" price="36" />
              <SmallCard imageSrc="/item5.png" name="Vegetables" price="83" />
            </div>
          </div>
          
          {/* Popular Tags */}
          <div className="w-full border p-4 mb-8">
            <div className="font-helvetica font-bold text-xl mb-4">
              Popular Tags
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <div className="font-helvetica font-normal text-sm p-2 border flex justify-center items-center">
                <h1>Sandwich</h1>
              </div>
              <div className="font-helvetica font-normal text-sm p-2 border flex justify-center items-center">
                <h1>Tikka</h1>
              </div>
              <div className="font-helvetica font-normal text-sm p-2 border flex justify-center items-center">
                <h1>Bbq</h1>
              </div>
              <div className="font-helvetica font-normal text-sm p-2 border flex justify-center items-center">
                <h1>Restaurant</h1>
              </div>
              <div className="font-helvetica font-normal text-sm p-2 border flex justify-center items-center">
                <h1>Health</h1>
              </div>
              <div className="font-helvetica font-normal text-sm p-2 border flex justify-center items-center">
                <h1>Fastfood</h1>
              </div>
              <div className="font-helvetica font-normal text-sm p-2 border flex justify-center items-center">
                <h1>Food</h1>
              </div>
              <div className="font-helvetica font-normal text-sm p-2 border flex justify-center items-center">
                <h1>Pizza</h1>
              </div>
              <div className="font-helvetica font-normal text-sm p-2 border flex justify-center items-center">
                <h1>Burger</h1>
              </div>
              <div className="font-helvetica font-normal text-sm p-2 border flex justify-center items-center">
                <h1>Chicken</h1>
              </div>
            </div>
          </div>
          
          {/* Blog Images */}
          <div className="w-full mb-6">
            <Image
              src="/blog1.png"
              alt="blog"
              width={422}
              height={316}
              className="w-full h-auto object-cover"
              quality={100}
            />
          </div>

          <div className="w-full mb-8">
            <Image
              src="/blog2.png"
              alt="blog"
              width={422}
              height={158}
              className="w-full h-auto object-cover"
              quality={100}
            />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-16">
        <MainFooter />
      </div>
    </div>
  );
};

export default page;
