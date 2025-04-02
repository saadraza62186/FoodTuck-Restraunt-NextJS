import Image from "next/image"
import CheckIcon from "@mui/icons-material/Check"
import { Great_Vibes } from 'next/font/google'

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

const Section2 = () => {
  return (
    <div className="w-full bg-[#0D0D0DF2] py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-0 max-w-[1320px]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-6 max-w-full lg:max-w-[526px] mb-12 lg:mb-0">
            <h2 className={`${greatVibes.className} text-[#FF9F0D] font-normal text-2xl sm:text-3xl`}>About us</h2>
            <div className="flex flex-col font-bold text-3xl sm:text-4xl lg:text-5xl gap-2 font-helvetica">
              <div className="flex gap-2 flex-wrap">
                <h1 className="text-[#FF9F0D]">We</h1>
                <div className="text-white">Create the best</div>
              </div>
              <div className="text-white">foody product</div>
            </div>
            <p className="font-normal text-base text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
              volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
              mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <div className="font-normal text-lg flex flex-col justify-center gap-4 text-white">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-[#FF9F0D] flex-shrink-0" /> 
                <span>Lacus nisi, et ac dapibus sit eu velit in consequat.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="text-[#FF9F0D] flex-shrink-0" /> 
                <span>Quisque diam pellentesque bibendum non dui volutpat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="text-[#FF9F0D] flex-shrink-0" /> 
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
              </div>
            </div>
            <div>
              <button className="w-full sm:w-[190px] h-[60px] bg-[#FF9F0D] text-white rounded-[30px] hover:bg-[#e08c0b] transition-colors">
                See Menu
              </button>
            </div>
          </div>
          <div className="w-full lg:w-auto lg:flex-1">
            <div className="w-full lg:max-w-[660px] mb-2">
              <Image
                src="/boiled.png"
                alt="Boiled food"
                width={660}
                height={330}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-1/2">
                <Image
                  src="/food3.png"
                  alt="Food 3"
                  width={322}
                  height={194}
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/food4.png"
                  alt="Food 4"
                  width={322}
                  height={194}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
