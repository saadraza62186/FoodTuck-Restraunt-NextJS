import React from 'react'
import Image from 'next/image'
const Reciepie = ({imageSrc,name,items} : any) => {
  return (
    <div className='w-[218px] h-[247px] text-[#FFFFFF] flex flex-col gap-6 justify-center items-center'>
        <div className='w-[120px] h-[120px] flex justify-center items-center'>
            <Image src={imageSrc} alt={name} width={322} height={194} className='w-full h-full'/>
        </div>
        <div className='w-[300px] h-[32px] font-helvetica font-bold text-2xl flex justify-center'>
            <h1>{name}</h1>
        </div>
        <div className='w-[67px] h-[48px] font-helvetica font-bold flex justify-center text-[40px]'>
            <h1>
                {items}
            </h1>
        </div>
    </div>
  )
}

export default Reciepie