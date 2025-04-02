"use client"
import Navbar from "../components/Navbar"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import Image from "next/image"
import ShopCard from "../components/ShopCard"
import MainFooter from "../components/MainFooter"

const page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navbar Section */}
      <div className="w-full flex justify-center items-center bg-[#0D0D0DF2]">
        <Navbar />
      </div>

      {/* Image Section */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] relative">
        {/* Background Image */}
        <Image src="/menu1.png" alt="Menu Image" fill className="object-cover" quality={100} />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-helvetica font-bold text-3xl md:text-4xl lg:text-[48px] text-white">Our Shop</h1>
          <div className="font-normal text-base md:text-lg lg:text-xl text-white flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-3 h-3 md:w-4 md:h-4" /> <div className="text-[#FF9F0D]">Shop</div>
          </div>
        </div>
      </div>

      {/* Shop Content */}
      <div className="w-full flex-grow flex justify-center px-4 py-8 md:py-12 lg:py-16">
        <div className="w-full max-w-7xl">
          <ShopCard />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-auto">
        <MainFooter />
      </div>
    </div>
  )
}

export default page

