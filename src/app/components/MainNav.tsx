import React from "react";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Link from "next/link";
const MainNav = () => {
  return (
    <div className="w-[1320px] h-[87px] top-[45px] left-[300px] bg-transparent ">
      <div className="flex justify-center">
        <Image src="/Foodtuck.png" alt="" width={100} height={100} />
      </div>
      <div className="flex justify-between">
        <div className="text-base font-normal flex gap-[40px] text-[#FFFFFF] mt-4 ">
          <Link href='/'>
          <p>Home</p>
          </Link>
          <Link href='/menu'>
          <p>Menu</p>
          </Link>
          <Link href='/blog'>
          <p>Blog</p>
          </Link>
          <p>Pages</p>
          <Link href='/about'>
          <p>About</p>
          </Link>
          <Link href='/shop'>
          <p>Shop</p>
          </Link>
          <p>Conatct</p>
        </div>  
        <div className="mr-[50px] flex">
          <div className="relative w-[310px] h-[54px]">
            <input
              type="text"
              placeholder="Search..."
              className="border-[1px] border-[#FF9F0D] p-5 w-full h-full rounded-[26px] pr-12 bg-transparent"
            />
            <SearchIcon className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#FFFFFF] cursor-pointer hover:text-black" />
          </div>
          <div className="text-[#FFFFFF] flex items-center ml-3 ">
            <LocalMallIcon className="w-6 h-6"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
