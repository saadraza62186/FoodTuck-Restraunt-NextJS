"use client";
import React from "react";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import UserCard from "../components/UserCard";
import ShopCard from "../components/ShopCard";
import ProductCard from "../components/ProductCard";
import BlogItems from "../components/BlogItems";
import SmallCard from "../components/SmallCard";
import MainFooter from "../components/MainFooter";
const page = () => {
  return (
    <div>
      {/* Navbar Section */}
      <div className="w-full flex justify-center items-center 2xl:w-[1920px] bg-[#0D0D0DF2]">
        <Navbar />
      </div>
      {/* Image Section */}
      <div className="w-[1920px] h-[410px] relative">
        {/* Background Image */}
        <Image
          src="/menu1.png" // Ensure this path is correct
          alt="Menu Image"
          layout="fill" // Ensures the image covers the entire div
          objectFit="cover" // Maintains aspect ratio without distortion
          quality={100} // Optional: ensures high quality
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-helvetica font-bold text-[48px] text-[#FFFFFF]">
            Blog List
          </h1>
          <div className="font-normal text-[20px] text-[#FFFFFF] flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-4 h-4" />{" "}
            <div className="text-[#FF9F0D]">Blog</div>
          </div>
        </div>
      </div>
      <div className="w-[1300px] h-[3400px] flex ">
        <div className="w-[872px] h-[3350] flex justify-center items-center ml-[300px] mt-[150px]">
          <div className="flex flex-col justify-center items-center">
            <BlogCard imageSrc = '/c1.png' name = '10 Reasons To Do A Digital Detox Challenge'/>
            <BlogCard imageSrc = '/c2.png' name = 'Traditional Soft Pretzels with Sweet Beer Cheese'/>
            <BlogCard imageSrc = '/c3.png' name = 'The Ultimate Hangover Burger: Egg in a Hole Burger'/>
            <BlogCard imageSrc = '/c4.png' name = 'My Favorite Easy Black Pizza Toast Recipe'/>
          </div>
        </div>
        <div className="w-[424px] h-[2501px] flex mt-[115px] ml-[40px] flex-col">
          <div className="flex items-center 2xl:w-[421.82px] 2xl:h-[70px] rounded-md border ">
            <input
              type="text"
              placeholder="Search here..."
              className="flex-grow h-full px-4 bg-transparent focus:outline-none text-gray-700"
            />
            <button className="w-14 h-full bg-[#FF9F0D] text-white flex items-center justify-center hover:bg-blue-700">
              <SearchIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="w-[424px] h-[423px]">
            <UserCard />
          </div>
          <div className="w-[423px] h-[500px] mt-[70px] shadow-md border p-5">
            <div className="font-helvetica font-bold text-[20px]">
              Recent Post
            </div>
            <div className="flex flex-col justify-center mt-4 gap-[40px]">
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
          <div className="w-[423px] h-[500px] mt-[70px] shadow-md border p-5">
            <div className="font-helvetica font-bold text-[20px]">
              Filter By Menu
            </div>
            <div className="flex flex-col justify-center mt-4 gap-[20px]">
              <SmallCard imageSrc="/item1.png" name="Chicken Fry" price="26" />
              <SmallCard imageSrc="/item2.png" name="Burger Food" price="46" />
              <SmallCard imageSrc="/item3.png" name="Pizza" price="16" />
              <SmallCard imageSrc="/item4.png" name="Fresh Fruits" price="36" />
              <SmallCard imageSrc="/item5.png" name="Vegetables" price="83px" />
            </div>
          </div>
          <div className="w-[423px] h-[308px] border mt-6 p-4">
            <div className="font-helvetica font-bold text-[20px] ">
              Populer Tags
            </div>
            <div className="flex  flex-wrap gap-4">
              <div className="font-helvetica font-normal mt-4 text-[14px] w-[115px] h-[38px] border flex justify-center items-center">
                <h1>Sandwich</h1>
              </div>
              <div className="font-helvetica mt-4 font-normal text-[14px] w-[115px] h-[38px] border flex justify-center items-center">
                <h1>Tikka</h1>
              </div>
              <div className="font-helvetica mt-4 font-normal text-[14px] w-[115px] h-[38px] border flex justify-center items-center">
                <h1>Bbq</h1>
              </div>
              <div className="font-helvetica font-normal text-[14px] w-[115px] h-[38px] border flex justify-center items-center">
                <h1>Restaurant</h1>
              </div>
              {/* <div className="font-helvetica font-normal text-[14px] w-[158px] h-[38px] border flex justify-center items-center">
              <h1>Chicken Sharma</h1>
            </div> */}
              <div className="font-helvetica font-normal text-[14px] w-[115px] h-[38px] border flex justify-center items-center">
                <h1>Health</h1>
              </div>
              <div className="font-helvetica font-normal text-[14px] w-[115px] h-[38px] border flex justify-center items-center">
                <h1>Fastfood</h1>
              </div>
              <div className="font-helvetica font-normal text-[14px] w-[115px] h-[38px] border flex justify-center items-center">
                <h1>Food</h1>
              </div>
              <div className="font-helvetica font-normal text-[14px] w-[115px] h-[38px] border flex justify-center items-center">
                <h1>Pizza</h1>
              </div>
              <div className="font-helvetica font-normal text-[14px] w-[115px] h-[38px] border flex justify-center items-center">
                <h1>Burger</h1>
              </div>
              <div className="font-helvetica font-normal text-[14px] w-[115px] h-[38px] border flex justify-center items-center">
                <h1>Chicken</h1>
              </div>
            </div>
          </div>
          <div className="w-[422px] h-[316px] mt-[30px]">
            <Image
              src="/blog1.png"
              alt="blog"
              width={422}
              height={316}
              className="w-full h-full object-cover"
              quality={100} // Ensures the image quality is as high as possible
            />
          </div>

          <div className="w-[422px] f-[158px] mt-6">
          <Image
              src="/blog2.png"
              alt="blog"
              width={422}
              height={316}
              className="w-full h-full object-cover"
              quality={100} // Ensures the image quality is as high as possible
            />
          </div>
        </div>
      </div>
      <div className="mt-[200px]">
        <MainFooter />
      </div>
    </div>
  );
};

export default page;
