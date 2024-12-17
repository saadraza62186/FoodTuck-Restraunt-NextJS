import React from "react";
import Head from "next/head";
import MainNav from "../components/MainNav";
import Navbar from "../components/Navbar";
import Image from "next/image";
import FormCard from "../components/FormCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EastIcon from "@mui/icons-material/East";
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
            Cheekout Page
          </h1>
          <div className="font-normal text-[20px] text-[#FFFFFF] flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-4 h-4" />{" "}
            <div className="text-[#FF9F0D]">Cheekout</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <Head>
          <title>Shipping and Billing Form</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <div className="w-[1320px] h-[723px] flex gap-4  p-4">
          {/* Left Section */}
          <div className="flex-1 flex flex-col gap-4 p-4">
            <h1 className="text-2xl font-bold">Shipping Address</h1>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">First Name</label>
                <input
                  type="text"
                  className="w-[424px] h-14 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  className="w-[424px] h-14 p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-[424px] h-14 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  className="w-[424px] h-14 p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Company</label>
                <input
                  type="text"
                  className="w-[424px] h-14 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Country</label>
                <input
                  type="text"
                  className="w-[424px] h-14 p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">City</label>
                <input
                  type="text"
                  className="w-[424px] h-14 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Zip Code</label>
                <input
                  type="text"
                  className="w-[424px] h-14 p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Address 1</label>
                <input
                  type="text"
                  className="w-[424px] h-14 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Address 2</label>
                <input
                  type="text"
                  className="w-[424px] h-14 p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <h1 className="text-2xl font-bold">Billing Address</h1>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="same-as-shipping"
                className="h-5 w-5"
              />
              <label htmlFor="same-as-shipping" className="text-sm">
                Same as shipping address
              </label>
            </div>
            <div className="flex gap-4">
              <button className="w-[424px] h-[56px] border text-black rounded flex justify-center items-center">
                <ArrowBackIosIcon />
                Back to Cart
              </button>
              <button className="w-[424px] h-[56px] bg-[#FF9F0D] text-white rounded gap-3 flex justify-center items-center">
                Proceed to Shipping
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
          {/* Right Section */}
          <div className="w-[424px] h-[700px] border">
            <div className="p-5">
              <FormCard />
              <FormCard />
              <FormCard />
            </div>
            <div className="ml-3">
              <div className="w-[376px] h-[284px] border border-gray-300 rounded-md p-4 flex flex-col justify-between">
                {/* Card Content */}
                <div className="flex flex-col gap-2">
                  {/* Subtotal */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Subtotal</span>
                    <span className="text-sm font-medium">$130</span>
                  </div>
                  {/* Shipping */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Shipping</span>
                    <span className="text-sm font-medium">Free</span>
                  </div>
                  {/* Discount */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Discount</span>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  {/* Tax */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Tax</span>
                    <span className="text-sm font-medium">$54.76</span>
                  </div>
                  {/* Divider */}
                  <hr className="border-t border-gray-300 my-2" />
                  {/* Total */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-semibold">$432.65</span>
                  </div>
                </div>
                {/* Button */}
                <button className="flex justify-center items-center gap-3 w-[346px] h-[58px] bg-[#FF9F0D] text-white font-medium rounded-md hover:bg-[#FF9F0D]">
                  Place an order
                  <EastIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MainFooter />
      </div>
    </div>
  );
};

export default page;
