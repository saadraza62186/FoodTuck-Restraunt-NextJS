"use client"

import Image from "next/image"
import MainNav from "./MainNav"
import { Great_Vibes } from "next/font/google"
import Link from "next/link"
import { motion } from "framer-motion"

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

const Section1 = () => {
  return (
    <div className="w-full min-h-screen bg-[#0D0D0DF2] flex flex-col px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden">
      {/* Navbar */}
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 w-full max-w-7xl mx-auto">
        <MainNav />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between mt-8 sm:mt-10 md:mt-12 lg:mt-16 gap-8">
        {/* Left Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10">
          {/* Media Icon */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden lg:block w-4 sm:w-6 h-72 sm:h-96 flex-shrink-0"
          >
            <Image
              src="/media.png"
              alt="Media Icon"
              width={100}
              height={492}
              className="w-full h-full object-contain"
              quality={100}
              unoptimized
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full max-w-lg flex flex-col space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <h1
              className={`${greatVibes.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#FF9F0D] font-normal`}
            >
              Its Quick & Amusing!
            </h1>

            <div className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex justify-center lg:justify-start"
              >
                <h1 className="text-[#FF9F0D]">Th</h1>
                <span className="ml-1">e Art of</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex justify-center lg:justify-start"
              >
                speed food Quality
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="font-normal text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed"
            >
              Experience flavors crafted with passion where every bite tells a story.
            </motion.p>

            <Link href="/menu">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="flex justify-center lg:justify-start"
              >
                <button className="w-full sm:w-40 md:w-48 h-10 sm:h-12 md:h-14 lg:h-16 bg-[#FF9F0D] text-white rounded-full text-xs sm:text-sm md:text-base transition-transform duration-300 hover:scale-105">
                  See Menu
                </button>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Right Section (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
        >
          <Image
            src="/egg.png"
            alt="Food Image"
            width={878}
            height={670}
            className="w-full h-auto object-cover"
            quality={100}
            priority
            unoptimized
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Section1
