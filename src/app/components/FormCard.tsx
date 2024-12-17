import React from 'react'
import Image from 'next/image'
const FormCard = () => {
  return (
    <div className='w-[376px] h-[104px] flex gap-3'>
        <div className='w-[82.72px] h-[88px]'>
            <Image src='/form.png' alt='' width={100} height={100} className='w-full h-full'/>
        </div>
        <div className='flex  flex-col mb-2'>
            <h1 className='font-helvetica font-bold text-[16px]'>
            Chicken Tikka Kabab
            </h1>
            <h1 className='font-helvetica font-normal text-[16px] text-[#4F4F4F]'>
            150 gm net
            </h1>
            <h1 className='font-helvetica text-[14px] text-[#4F4F4F]'>
            50$
            </h1>
        </div>
    </div>
  )
}

export default FormCard