"use client"
import { Great_Vibes } from "next/font/google"
import ChefCard from "./ChefCard"
import Link from "next/link"
import { motion } from "framer-motion"

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

const Section7 = () => {
  return (
    <div className="w-full bg-[#0D0D0DF2] py-16">
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`${greatVibes.className} text-[#FF9F0D] font-normal text-2xl md:text-3xl flex justify-center`}
        >
          <h1>Chefs</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="font-bold text-3xl md:text-4xl lg:text-5xl flex justify-center text-center"
        >
          <div className="text-[#FF9F0D]">Me</div>
          <div className="text-[#FFFFFF]">et Our Chef</div>
        </motion.div>

        {/* Chef Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
          {[
            { src: "/chef1.png", name: "D.Estwood", desc: "Chief Chef" },
            { src: "/chef2.png", name: "D.Scoriesh", desc: "Assistant Chef" },
            { src: "/chef3.png", name: "M. William", desc: "Advertising Chef" },
            { src: "/chef4.png", name: "W.Readfroad", desc: "Chef" },
          ].map((chef, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <ChefCard
                imageSrc={chef.src}
                name={chef.name}
                description={chef.desc}
              />
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10 md:mt-12"
        >
          <Link href="/chefs">
            <button className="px-8 py-3 border border-[#FF9F0D] text-white bg-transparent rounded-full hover:bg-[#FF9F0D]/10 transition-colors">
              See More
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Section7
