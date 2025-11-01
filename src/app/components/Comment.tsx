"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const Comment = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full bg-gray-100 p-6 md:p-8 flex flex-col justify-center items-center rounded-lg shadow-lg"
    >
      {/* User Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute -top-12 md:-top-16 flex justify-center"
      >
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <Image
            src="/comment1.png"
            alt="User Image"
            fill
            className="rounded-full object-cover shadow-md"
          />
        </div>
      </motion.div>

      {/* Secondary Image */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 md:mt-20 mb-4"
      >
        <div className="relative w-10 h-10 md:w-12 md:h-12">
          <Image
            src="/comment2.png"
            alt="Quote Icon"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Testimonial Text */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
        className="mb-6 text-center text-sm md:text-base lg:text-lg text-gray-700"
      >
        <p>
          &quot;Fantastic flavors and fast delivery — the seasoning is spot on and
          the portions are generous. I order the Crispy Chicken Burger at least
          once a week. Highly recommended for a quick, comforting meal.&quot;
        </p>
      </motion.div>

      {/* Rating Stars */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <div className="relative w-32 h-6">
          <Image
            src="/comment3.png"
            alt="Rating Stars"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* User Name */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-1"
      >
        <h2 className="text-lg md:text-xl font-bold text-gray-900">
          Alamin Hasan
        </h2>
      </motion.div>

      {/* User Description */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 text-sm md:text-base">Food Specialist</p>
      </motion.div>
    </motion.div>
  )
}

export default Comment
