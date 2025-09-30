import Image from "next/image"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { Great_Vibes } from "next/font/google"
import AboutSection from "../components/AboutSection"
import Navbar from "../components/Navbar"
import MainFooter from "../components/MainFooter"

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

const Page = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Navbar Section */}
      <div className="w-full flex justify-center items-center bg-[#0D0D0DF2]">
        <Navbar />
      </div>

      {/* Hero Image Section */}
      <div className="w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] xl:h-[450px] relative">
        {/* Background Image */}
        <Image 
          src="/menu1.png" 
          alt="Menu Image" 
          fill 
          className="object-cover" 
          quality={100}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-helvetica font-bold text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-[48px] text-white leading-tight">
            About Us
          </h1>
          <div className="font-normal text-sm xs:text-base md:text-lg lg:text-xl text-white flex items-center gap-2 xs:gap-2 mt-4">
            Home <ArrowForwardIosIcon className="w-4 h-4 xs:w-4 xs:h-4" /> 
            <span className="text-[#FF9F0D]">About</span>
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <section className="w-full px-3 xs:px-4 sm:px-6 py-8 xs:py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16">
          
          {/* Images Grid */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-4 sm:gap-6">
            {/* Left Column - Main Image */}
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-[3/4] max-w-[400px] mx-auto">
                <Image 
                  src="/food9.png" 
                  alt="Food presentation" 
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
              </div>
            </div>
            
            {/* Right Column - Stacked Images */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6">
              <div className="relative w-full aspect-[4/3] max-w-[400px] mx-auto">
                <Image 
                  src="/item1.png" 
                  alt="Food item" 
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
              </div>
              <div className="relative w-full aspect-[4/5] max-w-[400px] mx-auto">
                <Image 
                  src="/food9.png" 
                  alt="Food preparation" 
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 lg:pl-0 xl:pl-8">
            <div className={`${greatVibes.className} text-2xl sm:text-3xl md:text-4xl text-[#FF9F0D] font-normal`}>
              About us
            </div>
            
            <h2 className="font-helvetica font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 sm:mt-3 leading-tight">
              Food is an important <br className="hidden sm:block" /> 
              part of a balanced Diet
            </h2>
            
            <p className="font-normal font-helvetica text-sm sm:text-base md:text-lg mt-4 sm:mt-6 text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque 
              bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat 
              pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac 
              dapibus sit eu velit in consequat.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8">
              {/* Show More Button */}
              <button className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#FF9F0D] hover:bg-[#e68e0c] flex justify-center items-center rounded-lg transition-colors duration-300 shadow-md">
                <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">
                  Show More
                </span>
              </button>
              
              {/* Play Video */}
              {/* <div className="flex items-center justify-center xs:justify-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FF9F0D] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#e68e0c] transition-colors duration-300 shadow-md">
                  <Image 
                    src="/video.png" 
                    alt="Play video" 
                    width={24} 
                    height={24} 
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-800 cursor-pointer hover:text-gray-600">
                  Play Video
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section Component */}
      <div className="w-full px-3 xs:px-4 sm:px-6">
        <AboutSection />
      </div>

      {/* Footer */}
      <div className="w-full">
        <MainFooter />
      </div>
    </div>
  )
}

export default Page