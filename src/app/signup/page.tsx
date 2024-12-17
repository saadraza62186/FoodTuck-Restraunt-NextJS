import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import HttpsIcon from "@mui/icons-material/Https";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
            Sign up page
          </h1>
          <div className="font-normal text-[20px] text-[#FFFFFF] flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-4 h-4" />{" "}
            <div className="text-[#FF9F0D]">Sign up </div>
          </div>
        </div>
      </div>
      <div className="w-[424px] h-[624px] rounded-lg shadow-lg flex flex-col items-center p-6 mt-[100px] ml-[743px]">
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>

        {/* Name Input */}
        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-3 flex items-center">
            <i className="fas fa-user">
              <PersonIcon />
            </i>
          </span>
          <input
            type="text"
            placeholder="Name"
            className="w-[360px] h-[44px] pl-10 pr-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email Input */}
        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-3 flex items-center ">
            <i className="fas fa-envelope">
              <MailIcon />
            </i>
          </span>
          <input
            type="email"
            placeholder="Email"
            className="w-[360px] h-[44px] pl-10 pr-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-3 flex items-center ">
            <i className="fas fa-lock">
              <HttpsIcon />
            </i>
          </span>
          <input
            type="password"
            placeholder="Password"
            className="w-[360px] h-[44px] pl-10 pr-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center mb-4 w-[360px]">
          <input
            type="checkbox"
            id="remember"
            className="mr-2 w-4 h-4 text-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="remember" className="text-sm ">
            Remember me?
          </label>
        </div>
        <div className="relative mb-4 flex justify-center items-center">
          <input
            type="password"
            placeholder="Sign Up"
            className="w-[360px] h-[44px] bg-[#FF9F0D] placeholder:text-white text-center rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Divider */}
        <div className="flex items-center mb-4 w-[360px]">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-sm ">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Sign Up with Google */}
        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-3 flex items-center">
            <GoogleIcon className="w-5 h-5" />
          </span>
          <input
            type="button"
            value="Sign Up with Google"
            className="w-[360px] h-[44px] pl-10 pr-4 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-400 cursor-pointer"
          />
        </div>

        {/* Sign Up with Apple */}
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center">
            <AppleIcon className="w-5 h-5" />
          </span>
          <input
            type="button"
            value="Sign Up with Apple"
            className="w-[360px] h-[44px] pl-10 pr-4 rounded-md border border-gray-300  bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-400 cursor-pointer"
          />
        </div>
      </div>
      <div className="mt-[70px]">
        <MainFooter />
      </div>
    </div>
  );
};

export default page;
