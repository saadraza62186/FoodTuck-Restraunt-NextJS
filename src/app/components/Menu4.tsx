"use client"
import Image from "next/image"
import AlderCard from "./AlderCard"
import { ThumbsUp } from "lucide-react"

const Menu4 = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-16">
      {/* Left Content Section */}
      <div className="w-full lg:w-7/12 xl:w-8/12 flex flex-col gap-6 md:gap-8 order-2 lg:order-1">
        {/* Header Section */}
        <div className="flex flex-col gap-3">
          <ThumbsUp className="w-6 h-6 text-[#FF9F0D]" />
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#333333]">Drinks</h1>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-6">
          <AlderCard
            name="Caffè macchiato"
            description1="Toasted French bread topped with romano, cheddar"
            description2="560 CAL"
            price="32$"
          />
          <AlderCard
            name="Aperol Spritz Capacianno"
            description1="Gorgonzola, ricotta, mozzarella, taleggio"
            description2="700 CAL"
            price="43$"
          />
          <AlderCard
            name="Caffe Latte Campuri"
            description1="Ground cumin, avocados, peeled and cubed"
            description2="1000 CAL"
            price="14$"
          />
          <AlderCard
            name="Tormentoso BushTea Pintoage"
            description1="Spreadable cream cheese, crumbled blue cheese"
            description2="560 CAL"
            price="35$"
          />
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-5/12 xl:w-4/12 order-1 lg:order-2">
        <div className="relative aspect-[3/4] w-full">
          <Image src="/menu6.png" alt="Drinks Image" fill className="object-cover rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default Menu4

