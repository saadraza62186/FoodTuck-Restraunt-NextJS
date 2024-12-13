import React from 'react'
import Image from 'next/image'
import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // You can choose the weight as needed
});
const FoodItems = () => {
  return (
    <div className='w-[1320px] h-[489px]'>
        <div className='flex justify-center'> 
            <h1 className={`${greatVibes.className} text-[#FF9F0D] text-[32px] font-normal`}>Food Category</h1>
        </div>
        <div className='flex text-[48px] font-bold font-helvetica justify-center'>
            <div className='text-[#FF9F0D]'>
            Ch
            </div>
            <div className='text-[#FFFFFF]'>
            oose Food Iteam
            </div>
        </div>
        <div className='w-[1320px] h-[329px] flex gap-4 mt-8'>
            <div className='w-[306px] h-[329px]'>
            <Image src='/food5.png' alt='' width={322} height={194} className='w-full h-full'/>
            </div>
            <div className='w-[306px] h-[329px]'>
            <Image src='/food6.png' alt='' width={322} height={194} className='w-full h-full'/>
            </div>
            <div className='w-[306px] h-[329px]'>
            <Image src='/food7.png' alt='' width={322} height={194} className='w-full h-full'/>
            </div>
            <div className='w-[306px] h-[329px]'>
            <Image src='/food8.png' alt='' width={322} height={194} className='w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default FoodItems