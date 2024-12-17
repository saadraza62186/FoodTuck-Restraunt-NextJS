import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MainFooter from '../components/MainFooter';
import Link from 'next/link';
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
          404 Error
          </h1>
          <div className="font-normal text-[20px] text-[#FFFFFF] flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-4 h-4" />{" "}
            <div className="text-[#FF9F0D]">404</div>
          </div>
        </div>
      </div>
      <div className='w-[1920px] h-[600px]'>
        <div className='w-[630px] h-[342px] flex flex-col justify-center items-center ml-[645px] mt-[80px]'>
            <div className='font-helvetica fonr-bold text-[96px] text-[#FF9F0D]'>
                404
            </div>
            <div className='font-helvetica font-bold text-[32px]'>
            Oops! Look likes something going wrong
            </div>
            <div className='font-normal text-[18px] flex justify-center items-center flex-col mt-3'>
            <div>Page Cannot be found! well have it figured out in no time.</div>
            <div>Menwhile, cheek out these fresh ideas:</div>
            </div>
            <div className='w-[197px] h-[58px] bg-[#FF9F0D] flex justify-center items-center mt-[30px]'>
                <Link href='/'>
                <div className='font-bold text-white'>
                    Go To Home
                </div>
                </Link>
            </div>
        </div>
      </div>
      <div>
        <MainFooter />
      </div>
    </div>
  )
}

export default page