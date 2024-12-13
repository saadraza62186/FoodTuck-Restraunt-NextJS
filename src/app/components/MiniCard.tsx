import React from 'react'
import Image from 'next/image'
const MiniCard = ({imageSrc, name, description, price} : any) => {
  return (
    <div className='w-[376px] h-[79px] flex gap-1'>
        <div className='w-[80px] h-[79px]'>
            <Image src={imageSrc} alt={name} width={322} height={194}/>
        </div>
        <div className='w-[290px] h-[79px] flex flex-col gap-1'>
            <div className='font-bold text-xl text-[#FFFFFF]'>
                <h1>{name}</h1>
            </div>
            <div className='font-normal text-[14px] text-[#FFFFFF]'>
                <h1>
                {description}
                </h1>
            </div>
            <div className='font-bold text-[18px] text-[#FF9F0D]'>
                <h1>
                {price}
                </h1>
            </div>
        </div>
    </div>
  )
}

export default MiniCard