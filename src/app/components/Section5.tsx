import React from 'react'
import Reciepie from './Reciepie'

const Section5 = () => {
  return (
    <div className='w-[1920px] h-[469px] bg-[#0D0D0DF2] '>
        <div className='w-[1920px] h-[469px] flex ml-[300px] gap-[170px]'>
            <Reciepie imageSrc = "/food14.png" name = "Professional Chefs" items = "420"/>
            <Reciepie imageSrc = "/food15.png" name = "Items Of Food" items = "320"/>
            <Reciepie imageSrc = "/food16.png" name = "Years Of Experienced" items = "30+"/>
            <Reciepie imageSrc = "/food17.png" name = "Happy Customers" items = "220"/>
        </div>
    </div>
  )
}

export default Section5