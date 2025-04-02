"use client"
import Image from "next/image"
import { ThumbsUp } from "lucide-react"
import AlderCard from "./AlderCard"

const Menu1 = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-16">
      {/* Left Image Section */}
      <div className="w-full lg:w-5/12 xl:w-4/12">
        <div className="relative aspect-[3/4] w-full">
          <Image src="/menu2.png" alt="Prawns Image" fill className="object-cover rounded-lg" priority />
        </div>
      </div>

      {/* Right Content Section */}
      <div className="w-full lg:w-7/12 xl:w-8/12 flex flex-col gap-6 md:gap-8">
        {/* Header Section */}
        <div className="flex flex-col gap-3">
          <ThumbsUp className="w-6 h-6 text-[#FF9F0D]" />
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#333333]">Starter Menu</h1>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-6">
          <AlderCard
            name="Alder Grilled Chinook Salmon"
            description1="Toasted French bread topped with romano, cheddar"
            description2="560 CAL"
            price="32$"
          />
          <AlderCard
            name="Berries and creme tart"
            description1="Gorgonzola, ricotta, mozzarella, taleggio"
            description2="700 CAL"
            price="43$"
            isYellow
          />
          <AlderCard
            name="Tormentoso Bush Pizza Pintoage"
            description1="Ground cumin, avocados, peeled and cubed"
            description2="1000 CAL"
            price="14$"
          />
          <AlderCard
            name="Spicy Vegan Potato Curry"
            description1="Spreadable cream cheese, crumbled blue cheese"
            description2="560 CAL"
            price="35$"
          />
        </div>
      </div>
    </div>
  )
}

export default Menu1

