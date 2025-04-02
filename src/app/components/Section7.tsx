"use client"
import { Great_Vibes } from "next/font/google"
import ChefCard from "./ChefCard"

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

const Section7 = () => {
  return (
    <div className="w-full bg-[#0D0D0DF2] py-16">
      <div className="container mx-auto px-4">
        <div className={`${greatVibes.className} text-[#FF9F0D] font-normal text-2xl md:text-3xl flex justify-center`}>
          <h1>Chefs</h1>
        </div>
        <div className="font-bold text-3xl md:text-4xl lg:text-5xl flex justify-center text-center">
          <div className="text-[#FF9F0D]">Me</div>
          <div className="text-[#FFFFFF]">et Our Chef</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
          <ChefCard imageSrc="/chef1.png" name="D.Estwood" description="Chief Chef" />
          <ChefCard imageSrc="/chef2.png" name="D.Scoriesh" description="Assistant Chef" />
          <ChefCard imageSrc="/chef3.png" name="M. William" description="Advertising Chef" />
          <ChefCard imageSrc="/chef4.png" name="W.Readfroad" description="Chef" />
        </div>

        <div className="flex justify-center mt-10 md:mt-12">
          <button className="px-8 py-3 border border-[#FF9F0D] text-white bg-transparent rounded-full hover:bg-[#FF9F0D]/10 transition-colors">
            See More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Section7

