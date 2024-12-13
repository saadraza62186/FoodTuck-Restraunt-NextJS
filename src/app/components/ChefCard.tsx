import React from 'react'
import Image from 'next/image'
const ChefCard = ({imageSrc, name, description} : any) => {
  return (
    <div>
         <div className="relative w-[312px] h-[391px]">
      {/* Image */}
      <Image
        src={imageSrc} // Replace with your image path
        alt="Chef Card"
        width={322} 
        height={194}
        className="absolute top-0 left-0"
      />

      {/* White div */}
      <div className="absolute bottom-0 w-[181px] h-[67px] bg-white flex flex-col gap-1">
        <h1 className='font-bold text-[18px] text-[#333333] ml-3'>
        {name}
        </h1>
        <h1 className='font-normal text-[14px] text-[#333333] ml-3'>
        {description}
        </h1>
      </div>
    </div>
    </div>
  )
}

export default ChefCard