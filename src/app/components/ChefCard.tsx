"use client"
import Image from "next/image"

interface ChefCardProps {
  imageSrc: string
  name: string
  description: string
}

const ChefCard = ({ imageSrc, name, description }: ChefCardProps) => {
  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-[312px] aspect-[4/5]">
        {/* Image */}
        <div className="w-full h-full relative">
          <Image src={imageSrc || "/placeholder.svg"} alt={`Chef ${name}`} fill className="object-cover" />
        </div>

        {/* Info box */}
        <div className="absolute bottom-0 left-0 w-3/5 bg-white py-3 px-4">
          <h1 className="font-bold text-base md:text-lg text-[#333333]">{name}</h1>
          <h2 className="font-normal text-sm text-[#333333]">{description}</h2>
        </div>
      </div>
    </div>
  )
}

export default ChefCard

