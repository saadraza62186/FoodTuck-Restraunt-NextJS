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

const page = () => {
  return (
    <div className="w-full">
      {/* Navbar Section */}
      <div className="w-full flex justify-center items-center bg-[#0D0D0DF2]">
        <Navbar />
      </div>

      {/* Image Section */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] relative">
        {/* Background Image */}
        <Image src="/menu1.png" alt="Menu Image" fill className="object-cover" quality={100} />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-helvetica font-bold text-3xl md:text-4xl lg:text-[48px] text-white">About Us</h1>
          <div className="font-normal text-base md:text-lg lg:text-xl text-white flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-3 h-3 md:w-4 md:h-4" /> <div className="text-[#FF9F0D]">About</div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="w-full px-4 py-12 md:py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-3 mb-8 lg:mb-0">
          <div className="w-full md:w-1/2">
            <Image src="/food9.png" alt="Food" width={336} height={536} className="w-full h-auto object-cover" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 mt-4 md:mt-0">
            <div className="w-full h-auto">
              <Image src="/item1.png" alt="Food Item" width={309} height={271} className="w-full h-auto object-cover" />
            </div>
            <div className="w-full h-auto">
              <Image src="/food9.png" alt="Food" width={309} height={382} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-16">
          <div className={`${greatVibes.className} text-3xl md:text-4xl text-[#FF9F0D] font-normal`}>About us</div>
          <div className="font-helvetica font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3">
            Food is an important <br className="hidden md:block" /> part Of a balanced Diet
          </div>
          <div className="font-normal font-helvetica text-sm md:text-base mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
            fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae
            mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </div>
          <div className="flex flex-col sm:flex-row gap-5 mt-6">
            <div className="w-full sm:w-auto px-6 py-3 bg-[#FF9F0D] flex justify-center items-center rounded-lg">
              <div className="text-white font-normal">Show More</div>
            </div>
            <div className="flex gap-2 items-center mt-4 sm:mt-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] bg-[#FF9F0D] rounded-full flex justify-center items-center">
                <Image src="/video.png" alt="Play Icon" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-sm md:text-base font-bold">Play Video</div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section Component */}
      <div className="w-full px-4">
        <AboutSection />
      </div>

      {/* Footer */}
      <div className="mt-8">
        <MainFooter />
      </div>
    </div>
  )
}

export default page

