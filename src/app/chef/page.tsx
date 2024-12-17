import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import OurChef from '../components/OurChef';
import MainFooter from '../components/MainFooter';
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
          Our Chef
          </h1>
          <div className="font-normal text-[20px] text-[#FFFFFF] flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-4 h-4" />{" "}
            <div className="text-[#FF9F0D]">Chef</div>
          </div>
        </div>
      </div>
      <div className='w-[1320px] h-[1386px] ml-[300px] mt-[200px]'>
        <div className='flex flex-wrap justify-center items-center gap-5'>
            <OurChef  imageSrc = '/oc1.png' name = 'Tahmina Rumi'/>
            <OurChef imageSrc = '/oc2.png' name = 'Jorina Begum'/>
            <OurChef imageSrc = '/oc3.png' name = 'M.Mohammad'/>
            <OurChef imageSrc = '/oc4.png' name = 'Munna Kathy'/>
            <OurChef imageSrc = '/oc5.png' name = 'Tahmina Rumi'/>
            <OurChef imageSrc = '/oc6.png' name = 'Bisnu devgon'/>
            <OurChef imageSrc = '/oc7.png' name = 'Motin Molladsf'/>
            <OurChef imageSrc = '/oc8.png' name = 'William Rumi '/>
            <OurChef imageSrc = '/oc9.png' name = 'Kets william roy'/>
            <OurChef imageSrc = '/oc10.png' name = 'Mahmud kholil'/>
            <OurChef imageSrc = '/oc11.png' name = 'Ataur Rahman'/>
            <OurChef imageSrc = '/oc12.png' name = 'Monalisa holly'/>
        </div>
      </div>
      <div className='mt-[100px]'>
        <MainFooter />
      </div>
    </div>
  )
}

export default page