import React, { useState } from "react";
import Dropdown from "./Dropdown";
import ShopItems from "./ShopItems";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ProductCard from "./ProductCard";
const ShopCard = () => {
  return (
    <div className="w-[1320px] h-[1923px] flex flex-col ">
      <div className="flex gap-8">
        {/* Header Section */}
        <div className="">
          <div className="w-[332px] h-[46px] flex justify-between mt-4 items-center">
            <div className="font-normal text-[20px] mr-2">Sort By:</div>
            <div>
              <Dropdown />
            </div>
          </div>
        </div>
        {/* Additional Empty Section */}
        <div className="w-[350px] h-[46px] mt-4 flex justify-between items-center">
          <div className="font-normal text-[20px] mr-2">Sort By:</div>
          {/* Dropdown Component */}
          <div className="relative w-[236px] h-[46px]">
            <div>
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1320px] h-[1873px] mt-6 flex">
        <div className="w-[984px] h-[1820px]">
          <div className="w-[984px] h-[1810px] flex flex-wrap gap-3">
            <ShopItems
              imageSrc="/item1.png"
              description="Fresh Lime"
              price="$38.00"
            />
            <ShopItems
              imageSrc="/item2.png"
              description="Chocolate Muffin"
              price="$38.00"
            />
            <ShopItems
              imageSrc="/item3.png"
              description="Burger"
              price="$38.00"
            />
            <ShopItems
              imageSrc="/item4.png"
              description="Country Burger"
              price="$38.00"
            />
            <ShopItems
              imageSrc="/item5.png"
              description="Drink"
              price="$38.00"
            />
            <ShopItems
              imageSrc="/item6.png"
              description="Pizza"
              price="$38.00"
            />
            <ShopItems
              imageSrc="/item7.png"
              description="Cheese Butter"
              price="$38.00"
            />
            <ShopItems
              imageSrc="/item8.png"
              description="Sandwiches"
              price="$38.00"
            />
            <ShopItems
              imageSrc="/item9.png"
              description="Sandwiches"
              price="$38.00"
            />
            <ShopItems
              imageSrc="/item4.png"
              description="Country Burger"
              price="$38.00"
            />
            <ShopItems
              imageSrc="/item5.png"
              description="Drink"
              price="$38.00"
            />
            <ShopItems
              imageSrc="/item6.png"
              description="Pizza"
              price="$38.00"
            />
            <ShopItems
              imageSrc="/item7.png"
              description="Cheese Butter"
              price="$38.00"
            />
            <ShopItems
              imageSrc="/item8.png"
              description="Sandwiches"
              price="$38.00"
            />
            <ShopItems
              imageSrc="/item9.png"
              description="Sandwiches"
              price="$38.00"
            />
          </div>
          <div className="w-[984px] h-[53px] flex justify-center mt-2">
            <div className="w-[306px] h-[51px]">
              <Image
                src="/pagination.png"
                alt=""
                width={312} // Match actual display size
                height={267}
                quality={100}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="w-[312px] h-[1489px] p-4 ">
          {/* Input and Button Container */}
          <div className="flex items-center w-full h-[46px] mb-4 relative">
            {/* Input Field */}
            <input
              type="text"
              placeholder="Search Product"
              className="flex-grow h-full px-4 pl-10 placeholder:text-white bg-[#fee1b6] text-gray-800 outline-none border border-gray-300 rounded-md"
            />

            {/* Button */}
            <div className="absolute right-0 w-[46px] h-[46px] bg-[#FF9F0D] flex items-center justify-center cursor-pointer hover:bg-[#E68C00] border border-gray-300 rounded-r-md">
              <SearchIcon className="w-[20px] h-[20px] text-white" />
            </div>
          </div>

          {/* Empty Divs for Future Content */}
          <div className="w-[248px] h-[372px]">
            <div className="font-helvetica font-bold text-[20px]">
              <h1>Category</h1>
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-[14] h-[14]"
                />
                <h1 className="font-helvetica font-normal text-[18px]">
                  Sandwiches
                </h1>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-[14] h-[14]"
                />
                <h1 className="font-helvetica font-normal text-[18px]">
                  Burger
                </h1>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-[14] h-[14]"
                />
                <h1 className="font-helvetica font-normal text-[18px]">
                  Chicken Chup
                </h1>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-[14] h-[14]"
                />
                <h1 className="font-helvetica font-normal text-[18px]">
                  Drink
                </h1>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-[14] h-[14]"
                />
                <h1 className="font-helvetica font-normal text-[18px]">
                  Pizza
                </h1>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-[14] h-[14]"
                />
                <h1 className="font-helvetica font-normal text-[18px]">Thi</h1>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-[14] h-[14]"
                />
                <h1 className="font-helvetica font-normal text-[18px]">
                  Non Veg
                </h1>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-[14] h-[14]"
                />
                <h1 className="font-helvetica font-normal text-[18px]">
                  Uncategorized
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[248px] h-[286px] mt-[70px] relative">
            {/* Image */}
            <Image
              src="/salt.png"
              alt=""
              width={312} // Match actual display size
              height={267}
              quality={100}
              className="w-full h-full"
            />

            {/* Text Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div>
                <div className="font-bold text-[16px] text-[#FFFFFF]">
                  Perfect Taste
                </div>
                <div className="font-helvetica font-bold text-[20px] text-[#FFFFFF]">
                  Classic Restaurant
                </div>
                <div className="font-helvetica font-bold text-[16px] text-[#FF9F0D]">
                  45.00$
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#FFFFFF]">
                <h1 className="text-[16px] font-normal">Shop Now</h1>
                <ArrowCircleRightIcon />
              </div>
            </div>
          </div>

          <div className="w-[248px] h-[87px] mt-[37px]">
            <Image
              src='/filter.png'
              alt="filter Image"
              width={312} // Match actual display size
              height={267}
              quality={100}
              className="w-full h-full"
            />
          </div>
          <div className="w-[252px] h-[368px] mt-6">
            <div className="font-helvetica font-bold text-xl">
                <h1>Latest Products</h1>
            </div>
            <div className="flex flex-col gap-4 mt-2">
                <ProductCard  imageSrc = '/item1.png' name = 'Pizza' price = '$35.00'/>
                <ProductCard  imageSrc = '/item2.png' name = 'Cupchake' price = '$35.00'/>
                <ProductCard  imageSrc = '/item3.png' name = 'Cookies' price = '$35.00'/>
                <ProductCard  imageSrc = '/item4.png' name = 'Burger' price = '$35.00'/>  
            </div>
          </div>
          <div >
            <div className="font-helvetica font-bold text-xl mt-3">
                Product Tags
            </div>
            <div className="flex flex-wrap gap-5 mt-3 font-normal text-[16px]">
                <h1 className="hover:text-[#FF9F0D]">Services</h1>
                <h1 className="hover:text-[#FF9F0D]">Our Menu</h1>
                <h1 className="hover:text-[#FF9F0D]">Pizza</h1>
                <h1 className="hover:text-[#FF9F0D]">Cupcake</h1>
                <h1 className="text-[#FF9F0D]">Burger</h1>
                <h1 className="hover:text-[#FF9F0D]">Cookies</h1>
                <h1 className="hover:text-[#FF9F0D]">Cookies</h1>
                <h1 className="hover:text-[#FF9F0D]">Tandoori Chicken</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
