"use client";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Great_Vibes } from "next/font/google";
import AboutSection from "../components/AboutSection";
import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter";
import Link from "next/link";
import { motion } from "framer-motion";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Navbar Section */}
      <div className="w-full flex justify-center items-center bg-[#0D0D0DF2]">
        <Navbar />
      </div>

      {/* Hero Image Section */}
      <div className="w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] xl:h-[450px] relative">
        <Image
          src="/menu1.png"
          alt="Menu Image"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-helvetica font-bold text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-[48px] text-white leading-tight"
          >
            About Us
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-normal text-sm xs:text-base md:text-lg lg:text-xl text-white flex items-center gap-2 xs:gap-2 mt-4"
          >
            Home <ArrowForwardIosIcon className="w-4 h-4 xs:w-4 xs:h-4" />
            <span className="text-[#FF9F0D]">About</span>
          </motion.div>
        </div>
      </div>

      {/* About Content Section */}
      <section className="w-full px-3 xs:px-4 sm:px-6 py-8 xs:py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16">
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col md:flex-row gap-4 sm:gap-6"
          >
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-[3/4] max-w-[400px] mx-auto">
                <Image
                  src="/food9.png"
                  alt="Food presentation"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6">
              <div className="relative w-full aspect-[4/3] max-w-[400px] mx-auto">
                <Image
                  src="/item1.png"
                  alt="Food item"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative w-full aspect-[4/5] max-w-[400px] mx-auto">
                <Image
                  src="/food9.png"
                  alt="Food preparation"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 lg:pl-0 xl:pl-8"
          >
            <div
              className={`${greatVibes.className} text-2xl sm:text-3xl md:text-4xl text-[#FF9F0D] font-normal`}
            >
              About us
            </div>

            <h2 className="font-helvetica font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 sm:mt-3 leading-tight">
              Food is an important <br className="hidden sm:block" />
              part of a balanced Diet
            </h2>

            <p className="font-normal font-helvetica text-sm sm:text-base md:text-lg mt-4 sm:mt-6 text-gray-700 leading-relaxed">
              We believe food is more than taste — it&apos;s an experience. Every
              dish is crafted with passion, using the finest ingredients and a
              touch of creativity. Our goal is to serve flavors that inspire,
              comfort, and bring people together.
            </p>

            <Link href="/shop">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="flex flex-col xs:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8"
              >
                <button className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#FF9F0D] hover:bg-[#e68e0c] flex justify-center items-center rounded-lg transition-colors duration-300 shadow-md">
                  <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">
                    Show More
                  </span>
                </button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section Component */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full px-3 xs:px-4 sm:px-6"
      >
        <AboutSection />
      </motion.div>

      {/* Footer */}
      <div className="w-full">
        <MainFooter />
      </div>
    </div>
  );
};

export default Page;
