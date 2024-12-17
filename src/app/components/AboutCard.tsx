import React from 'react'
import Image from 'next/image'
const AboutCard = ({imageSrc, name} : any) => {
  return (
    <div className='w-[359px] h-[225px] flex flex-col justify-center items-center'>
        <div className='w-[80px] h-[80px]'>
            <Image src={imageSrc} alt={name} width={100} height={100} className='w-full h-full'/>
        </div>
        <div className='font-helvetica font-bold text-2xl mt-3'>
        {name}
        </div>
        <div className='w-[359px] h-[76px] font-helvetica font-normal text-[16px] flex justify-center mt-3 items-center ml-[100px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat 
        </div>
    </div>
  )
}

export default AboutCard