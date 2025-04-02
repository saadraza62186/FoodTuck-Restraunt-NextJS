"use client"
import Image from "next/image"

interface MiniCardProps {
  imageSrc: string
  name: string
  description: string
  price: string
}

const MiniCard = ({ imageSrc, name, description, price }: MiniCardProps) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 relative">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover rounded-md" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-bold text-lg md:text-xl text-[#FFFFFF]">
          <h1>{name}</h1>
        </div>
        <div className="font-normal text-xs md:text-sm text-[#FFFFFF] line-clamp-2">
          <h1>{description}</h1>
        </div>
        <div className="font-bold text-base md:text-lg text-[#FF9F0D]">
          <h1>{price}</h1>
        </div>
      </div>
    </div>
  )
}

export default MiniCard

