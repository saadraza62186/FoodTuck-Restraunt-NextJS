import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import OurChef from '../components/OurChef';
import MainFooter from '../components/MainFooter';

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
            Our Chef
          </h1>
          <div className="font-normal text-base md:text-lg lg:text-xl text-white flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-3 h-3 md:w-4 md:h-4" />{" "}
            <div className="text-[#FF9F0D]">Chef</div>
          </div>
        </div>
      </div>
      
      {/* Chef Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          <OurChef imageSrc="/oc1.png" name="Tahmina Rumi" />
          <OurChef imageSrc="/oc2.png" name="Jorina Begum" />
          <OurChef imageSrc="/oc3.png" name="M.Mohammad" />
          <OurChef imageSrc="/oc4.png" name="Munna Kathy" />
          <OurChef imageSrc="/oc5.png" name="Tahmina Rumi" />
          <OurChef imageSrc="/oc6.png" name="Bisnu devgon" />
          <OurChef imageSrc="/oc7.png" name="Motin Molladsf" />
          <OurChef imageSrc="/oc8.png" name="William Rumi" />
          <OurChef imageSrc="/oc9.png" name="Kets william roy" />
          <OurChef imageSrc="/oc10.png" name="Mahmud kholil" />
          <OurChef imageSrc="/oc11.png" name="Ataur Rahman" />
          <OurChef imageSrc="/oc12.png" name="Monalisa holly" />
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-auto">
        <MainFooter />
      </div>
    </div>
  )
}

export default page
