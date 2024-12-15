import React from "react";
import UpdateIcon from "@mui/icons-material/Update";
import Broast from "./Broast";

const MainFooter = () => {
  return (
    <div className="bg-[#0D0D0DF2] w-full h-auto py-10 2xl:w-[1920px] 2xl:h-[950px]">
      {/* Header Section */}
      <div className="w-full max-w-[1170px] mx-auto flex flex-col lg:flex-row lg:items-center lg:border-b-2 border-[#FF9F0D] pb-6 2xl:w-[1170px] 2xl:h-[142.62px] 2xl:ml-[359px]">
        <div className="flex flex-col gap-3 text-center lg:text-left">
          <div className="font-helvetica font-bold text-2xl md:text-[32px] flex justify-center lg:justify-start text-[#FFFFFF] 2xl:flex 2xl:text-[32px]">
            <div className="text-[#FF9F0D]">St</div>
            <div>ill You Need Our Support?</div>
          </div>
          <div className="font-normal text-sm md:text-[16px] text-[#FFFFFF]">
            Don&rsquo;t wait make a smart & logical quote here. It&rsquo;s pretty easy.
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
      </div>

      {/* Main Footer Content */}
      <div className="text-[#FFFFFF] flex flex-wrap justify-between gap-10 md:gap-20 lg:gap-[130px] w-full max-w-[1170px] mx-auto mt-10 2xl:ml-[300px] 2xl:mt-[100px]">
        {/* About Us Section */}
        <div className="flex flex-col gap-4 w-full sm:w-[300px] lg:w-[350px] 2xl:gap-[20px] 2xl:w-[350px]">
          <h1 className="font-helvetica font-bold text-xl md:text-2xl">About Us</h1>
          <p className="font-normal text-sm md:text-[16px] leading-6">
            Corporate clients and leisure travelers have been relying on
            Groundlink for dependable, safe, and professional chauffeured car
            service in major cities across the world.
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
        </div>

        {/* Useful Links Section */}
        <div className="flex flex-col gap-2 w-full sm:w-[300px] 2xl:gap-[10px]">
          <h1 className="font-helvetica font-bold text-xl md:text-2xl">Useful Links</h1>
          <div className="flex flex-col gap-4 mt-3 text-sm md:text-[20px] 2xl:mt-[15px]">
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">About</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">News</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">Partners</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">Team</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">Menu</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">Contact</a>
          </div>
        </div>

        {/* Help Section */}
        <div className="flex flex-col gap-2 w-full sm:w-[300px] 2xl:gap-[10px]">
          <h1 className="font-helvetica font-bold text-xl md:text-2xl">Help?</h1>
          <div className="flex flex-col gap-4 mt-3 text-sm md:text-[20px] 2xl:mt-[15px]">
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">FAQ</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">Terms & Conditions</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">Reporting</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">Documentation</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">Support Policy</a>
            <a href="#" className="hover:underline hover:text-[#FF9F0D]">Privacy</a>
          </div>
        </div>

        {/* Recent Posts Section */}
        <div className="flex flex-col gap-4 w-full sm:w-[300px] lg:w-[350px] 2xl:gap-[15px]">
          <h1 className="font-helvetica font-bold text-xl md:text-2xl">Recent Posts</h1>
          <div className="flex flex-col gap-4 mt-3 2xl:mt-[15px]">
            <Broast
              name="Keep Your Business"
              imageSrc="/food10.png"
              price="20 Feb 2022"
            />
            <Broast
              name="Keep Your Business"
              imageSrc="/food21.png"
              price="20 Feb 2022"
            />
            <Broast
              name="Keep Your Business"
              imageSrc="/food26.png"
              price="20 Feb 2022"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
