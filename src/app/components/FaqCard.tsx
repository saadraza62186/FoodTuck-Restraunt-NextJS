import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const FaqCard = ({name} : any) => {
  return (
    <div className='w-[648px] h-[170px] bg-[#FAF7F2] p-3'>
        <div className='flex justify-between p-3'>
            <h1 className='font-helvetica font-bold text-[18px] '>
            {name}
            </h1>
            <h1>
            <AddIcon  className='w-[24px] h-[24px]'/>
            </h1>
        </div>
        <div className='w-[600px] h-[72px] p-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
        </div>
    </div>
  )
}

export default FaqCard