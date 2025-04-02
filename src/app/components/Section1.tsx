import Image from "next/image"
import MainNav from "./MainNav"
import { Great_Vibes } from "next/font/google"

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

const Section1 = () => {
  return (
    <div className="w-full min-h-screen bg-[#0D0D0DF2] flex flex-col px-4 md:px-8 lg:px-16">
      <div className="mt-4 md:mt-8 lg:mt-12 w-full max-w-7xl mx-auto">
        <MainNav />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between mt-8 lg:mt-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="hidden lg:block w-6 h-96 mr-8">
            <Image src="/media.png" alt="Media Icon" width={100} height={492} className="w-full h-full" />
          </div>
          <div className="w-full max-w-lg flex flex-col justify-between space-y-6 lg:space-y-8">
            <h1 className={`${greatVibes.className} text-3xl md:text-4xl lg:text-5xl text-[#FF9F0D] font-normal`}>
              Its Quick & Amusing!
            </h1>
            <div className="font-bold text-4xl md:text-5xl lg:text-6xl flex-col text-white">
              <div className="flex">
                <h1 className="text-[#FF9F0D]">Th</h1>
                <div className="flex">e Art of</div>
              </div>
              <h1 className="flex">speed food Quality</h1>
            </div>
            <p className="font-normal text-sm md:text-base lg:text-lg text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
            </p>
            <div>
              <button className="w-full md:w-48 h-12 md:h-14 lg:h-16 bg-[#FF9F0D] text-white rounded-full text-sm md:text-base">
                See Menu
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-2xl mt-8 lg:mt-0">
          <Image
            src="/egg.png"
            alt="Image"
            width={878}
            height={670}
            className="w-full h-auto object-cover"
            quality={100}
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Section1

