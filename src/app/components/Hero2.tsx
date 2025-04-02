"use client"

import React from 'react'
import Image from 'next/image';
import { Great_Vibes } from 'next/font/google';
import MiniCard from './MiniCard';

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Hero2 = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className={`${greatVibes.className} text-[#FF9F0D] font-normal text-2xl md:text-3xl flex justify-center`}>
        <h1>Choose & pick</h1>
      </div>
      <div className='font-bold text-3xl md:text-4xl lg:text-5xl flex justify-center text-center'>
        <div className='text-[#FF9F0D]'>
          Fr
        </div>
        <div className='text-[#FFFFFF]'>
          om Our Menu
        </div>
      </div>
      
      {/* Menu Categories - Scrollable on mobile */}
      <div className='w-full overflow-x-auto mt-7'>
        <div className='text-[#FFFFFF] font-bold text-lg md:text-xl flex space-x-4 md:space-x-8 lg:space-x-12 min-w-max md:justify-center px-4'>
          <h1 className='whitespace-nowrap'>Breakfast</h1>
          <h1 className='whitespace-nowrap'>Lunch</h1>
          <h1 className='whitespace-nowrap'>Dinner</h1>
          <h1 className='whitespace-nowrap'>Dessert</h1>
          <h1 className='whitespace-nowrap'>Drink</h1>
          <h1 className='whitespace-nowrap'>Snack</h1>
          <h1 className='whitespace-nowrap'>Soups</h1>
        </div>
      </div>
      
      {/* Food Display Section */}
      <div className='w-full mt-10 md:mt-16'>
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Featured Image - Hidden on small screens */}
          <div className='w-full lg:w-2/5 hidden md:block'>
            <div className='relative aspect-[5/4] w-full'>
              <Image 
                src='/food18.png' 
                alt='featured food item' 
                fill
                className='object-cover rounded-lg'
              />
            </div>
          </div>
          
          {/* Food Items Grid */}
          <div className='w-full lg:w-3/5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <MiniCard imageSrc='/food19.png' name='Lettuce Leaf' description='Lacus nisi, et ac dapibus velit in consequat.' price='12.5$'/>
              <MiniCard imageSrc='/food11.png' name='Lettuce Leaf' description='Lacus nisi, et ac dapibus velit in consequat.' price='12.5$'/>
              <MiniCard imageSrc='/food20.png' name='Lettuce Leaf' description='Lacus nisi, et ac dapibus velit in consequat.' price='12.5$'/>
              <MiniCard imageSrc='/food21.png' name='Lettuce Leaf' description='Lacus nisi, et ac dapibus velit in consequat.' price='12.5$'/>
              <MiniCard imageSrc='/food22.png' name='Lettuce Leaf' description='Lacus nisi, et ac dapibus velit in consequat.' price='12.5$'/>
              <MiniCard imageSrc='/food23.png' name='Lettuce Leaf' description='Lacus nisi, et ac dapibus velit in consequat.' price='12.5$'/>
              <MiniCard imageSrc='/food24.png' name='Lettuce Leaf' description='Lacus nisi, et ac dapibus velit in consequat.' price='12.5$'/>
              <MiniCard imageSrc='/food6.png' name='Lettuce Leaf' description='Lacus nisi, et ac dapibus velit in consequat.' price='12.5$'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2
