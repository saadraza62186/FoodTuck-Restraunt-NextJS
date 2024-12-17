import React from 'react'
import Image from 'next/image'
const Partner = () => {
  return (
    <div className='w-[1322px] h-[275px] flex flex-col justify-center items-center '>
        <div className='font-normal text-[18px] text-[#333333]'>
        Partners & Clients
        </div>
        <div className='font-helvetica font-bold text-5xl mt-6'>
        We work with the best pepole
        </div>
        <div className='w-[1322px] h-[129.37px] flex justify-between items-center mt-[80px]'>
            <div className='w-[240.96px] h-[129.23px]'>
                <Image src='/partner1.png' alt='' width={100} height={200} className='w-full h-full'/>
            </div>
            <div className='w-[166.04px] h-[129.23px]'>
                <Image src='/partner2.png' alt='' width={100} height={200} className='w-full h-full'/>
            </div>
           <div className='w-[143.98px] h-[129.23px]'>
                <Image src='/partner3.png' alt='' width={100} height={200} className='w-full h-full'/>
            </div>
           <div className='w-[130.98px] h-[129.23px]'>
                <Image src='/partner4.png' alt='' width={100} height={200} className='w-full h-full'/>
            </div>
           <div className='w-[169.97px] h-[129.23px]'>
                <Image src='/partner5.png' alt='' width={100} height={200} className='w-full h-full'/>
            </div>
           <div className='w-[113.98px] h-[129.23px]'>
                <Image src='/partner6.png' alt='' width={100} height={200} className='w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default Partner