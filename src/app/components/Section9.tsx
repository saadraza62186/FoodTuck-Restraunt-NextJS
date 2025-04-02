"use client"
import Image from "next/image"
import { Great_Vibes } from "next/font/google"
import { Play } from "lucide-react"

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

const Section9 = () => {
  return (
    <div className="w-full relative">
      {/* Background Image */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[558px] relative">
        <Image src="/food25.png" alt="Food Background" fill className="object-cover" priority={true} />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-lg md:max-w-2xl lg:max-w-3xl ml-auto text-white">
            {/* Title */}
            <div className="font-normal text-xl md:text-2xl lg:text-3xl mb-2 md:mb-4">
              <h1 className={`${greatVibes.className} text-[#FF9F0D]`}>Restaurant Active Process</h1>
            </div>

            {/* Headings */}
            <div className="mb-3 md:mb-6">
              <div className="font-bold text-2xl md:text-3xl lg:text-5xl flex flex-wrap gap-2">
                <div className="text-[#FF9F0D]">We</div>
                <div>Document Every Food</div>
              </div>
              <div className="font-bold text-2xl md:text-3xl lg:text-5xl">
                <div>Bean Process until it is saved</div>
              </div>
            </div>

            {/* Description */}
            <div className="font-normal text-sm md:text-base mb-4 md:mb-6 max-w-md lg:max-w-2xl">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
                volutpat fringilla bibendum. Urna, elit augue urna,
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10">
              {/* See More Button */}
              <button className="px-6 py-3 border border-[#FF9F0D] text-white bg-transparent rounded-full hover:bg-[#FF9F0D]/10 transition-colors w-full sm:w-auto">
                See More
              </button>

              {/* Play Video Button */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FF9F0D] rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-base md:text-lg font-bold">Play Video</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section9

