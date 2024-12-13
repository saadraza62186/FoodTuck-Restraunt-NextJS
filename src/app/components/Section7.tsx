import React from 'react'
import { Great_Vibes } from "next/font/google";
import ChefCard from './ChefCard';
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // You can choose the weight as needed
});
const Section7 = () => {
  return (
    <div className='w-[1920px] h-[657px] bg-[#0D0D0DF2]'>
    <div className='w-[1764px] h-[657px]'>
        <div className={`${greatVibes.className} text-[#FF9F0D] font-normal text-[32px] flex justify-center`}>
            <h1>Chefs</h1>
        </div>
        <div className='font-helvetica font-bold text-5xl flex justify-center'>
            <div className='text-[#FF9F0D]'>
            Me
            </div>
            <div className='text-[#FFFFFF]'>
            et Our Chef
            </div>
        </div>
        <div className='flex ml-[300px] gap-[30px] mt-[40px]'>
            <ChefCard  imageSrc = '/chef1.png' name = 'D.Estwood' description = 'Chief Chef'/>
            <ChefCard  imageSrc = '/chef2.png' name = 'D.Scoriesh' description = 'Assistant Chef'/>
            <ChefCard  imageSrc = '/chef3.png' name = 'M. William' description = 'Advertising Chef'/>
            <ChefCard  imageSrc = '/chef4.png' name = 'W.Readfroad' description = 'Chef'/>
        </div>
        <div className='flex justify-center items-center mt-[50px]'>
        <div className='w-[155px] h-[50px]'>
            <input 
            type="text"
            placeholder='See More'
            className='w-full h-full border text-center flex justify-center items-center border-[#FF9F0D] text-white bg-transparent rounded-[25px]' 
            />
        </div>
        </div>
    </div>
    </div>
  )
}

export default Section7