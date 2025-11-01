"use client"
import { Great_Vibes } from "next/font/google"
import Comment from "./Comment"

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

const Section8 = () => {
  return (
    <div className="w-full bg-[#0D0D0DF2] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="font-normal text-2xl md:text-3xl text-[#FF9F0D] text-center">
            <h1 className={`${greatVibes.className}`}>Testimonials</h1>
          </div>
          <div className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#FFFFFF] text-center">
            <h1>What our client are saying</h1>
          </div>

          <div className="mt-16 md:mt-24">
            <Comment />
          </div>
{/* 
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF9F0D]"></div>
              <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
              <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
              <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Section8

