import React from 'react'
import Image from 'next/image';
import CheckIcon from '@mui/icons-material/Check';
import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // You can choose the weight as needed
});
const Section2 = () => {
  return (
    <div className='w-[1920px] h-[890px] bg-[#0D0D0DF2] flex'>
    <div className='w-[1320px] h-[562px] mt-[120px] ml-[300px] flex'>
        <div className='flex flex-col gap-6'>
            <div>
                <h1 className={`${greatVibes.className} text-[#FF9F0D] font-normal text-[32px]`}>About us</h1>
            </div>
            <div className='flex flex-col font-bold text-5xl w-[446px] gap-2 h-[110px] font-helvetica'>
                <div className='flex gap-2'>
                <div>
                    <h1 className='text-[#FF9F0D]'>
                        We
                    </h1>
                </div>
                <div className='text-[#FFFFFF]'>
                    Create the best 
                </div>
                </div>
                <div className='text-[#FFFFFF]'>
                foody product
                </div>
            </div>
            <div className='font-normal text-[16px] w-[526px] h-[130px] text-[#FFFFFF]'>
                <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </h1>
            </div>
            <div className='font-normal text-[18px] flex flex-col justify-center gap-4 text-[#FFFFFF]'>
                <div className='flex gap-2'><CheckIcon /> Lacus nisi, et ac dapibus sit eu velit in consequat.</div>
                <div className='flex gap-2'><CheckIcon /> Quisque diam pellentesque bibendum non dui volutpat</div>
                <div className='flex gap-2'><CheckIcon /> Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            </div>
            <div>
            <button className="w-[190px] h-[60px] bg-[#FF9F0D] text-white rounded-[30px]">
                See Menu
              </button>
            </div>
        </div>
        <div className='w-[660px] h-[330px] ml-[100px]'>
    <div>
        <Image 
            src='/boiled.png' 
            alt='Boiled food' 
            width={660} 
            height={330} 
            className='object-cover' 
        />
    </div>
    <div className='w-[644px] h-[194px] flex mt-2'>
        <div className='w-[322px] h-[194px]'>
            <Image 
                src='/food3.png' 
                alt='Food 3' 
                width={322} 
                height={194} 
                className='object-cover' 
            />
        </div>
        <div className='w-[322px] h-[194px] ml-[16px]'>
            <Image 
                src='/food4.png' 
                alt='Food 4' 
                width={322} 
                height={194} 
                className='object-cover' 
            />
        </div>
    </div>
</div>

    </div>
    </div>
  )
}

export default Section2