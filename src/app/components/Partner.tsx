"use client"
import Image from "next/image"

const Partner = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="text-center">
        <p className="text-base md:text-lg text-[#333333] mb-2">Partners & Clients</p>
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-10 md:mb-16">
          We work with the best people
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 w-full">
        <div className="aspect-[2/1] relative">
          <Image src="/partner1.png" alt="Partner 1" fill className="object-contain" />
        </div>
        <div className="aspect-[2/1] relative">
          <Image src="/partner2.png" alt="Partner 2" fill className="object-contain" />
        </div>
        <div className="aspect-[2/1] relative">
          <Image src="/partner3.png" alt="Partner 3" fill className="object-contain" />
        </div>
        <div className="aspect-[2/1] relative">
          <Image src="/partner4.png" alt="Partner 4" fill className="object-contain" />
        </div>
        <div className="aspect-[2/1] relative">
          <Image src="/partner5.png" alt="Partner 5" fill className="object-contain" />
        </div>
        <div className="aspect-[2/1] relative">
          <Image src="/partner6.png" alt="Partner 6" fill className="object-contain" />
        </div>
      </div>
    </div>
  )
}

export default Partner

