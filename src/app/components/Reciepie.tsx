"use client"
import Image from "next/image"
import { ReactNode } from "react"

interface ReciepieProps {
  imageSrc: string
  name: string
  items: ReactNode // <-- change here
}

const Reciepie = ({ imageSrc, name, items  }: ReciepieProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-6 text-white py-6">
      <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 relative">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-contain" quality={100} unoptimized />
      </div>
      <div className="text-center">
        <h2 className="font-bold text-xl md:text-2xl mb-2">{name}</h2>
        <p className="font-bold text-3xl md:text-4xl">{items}</p>
      </div>
    </div>
  )
}

export default Reciepie
