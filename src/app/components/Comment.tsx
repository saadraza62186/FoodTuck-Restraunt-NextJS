"use client"
import Image from "next/image"

const Comment = () => {
  return (
    <div className="relative w-full bg-gray-100 p-6 md:p-8 flex flex-col justify-center items-center rounded-lg">
      {/* User Image */}
      <div className="absolute -top-12 md:-top-16 flex justify-center">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <Image src="/comment1.png" alt="User Image" fill className="rounded-full object-cover" />
        </div>
      </div>

      {/* Secondary Image */}
      <div className="mt-16 md:mt-20 mb-4">
        <div className="relative w-10 h-10 md:w-12 md:h-12">
          <Image src="/comment2.png" alt="Quote Icon" fill className="object-contain" />
        </div>
      </div>

      {/* Testimonial Text */}
      <div className="mb-6 text-center text-sm md:text-base lg:text-lg text-gray-700">
        <p>
          &quot;Fantastic flavors and fast delivery — the seasoning is spot on and the portions are generous. I order the
          Crispy Chicken Burger at least once a week. Highly recommended for a quick, comforting meal.&quot;
        </p>
      </div>

      {/* Rating Stars */}
      <div className="mb-6">
        <div className="relative w-32 h-6">
          <Image src="/comment3.png" alt="Rating Stars" fill className="object-contain" />
        </div>
      </div>

      {/* User Name */}
      <div className="mb-1">
        <h2 className="text-lg md:text-xl font-bold text-gray-900">Alamin Hasan</h2>
      </div>

      {/* User Description */}
      <div>
        <p className="text-gray-600 text-sm md:text-base">Food Specialist</p>
      </div>
    </div>
  )
}

export default Comment
