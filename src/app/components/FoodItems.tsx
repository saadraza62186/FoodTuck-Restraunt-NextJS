import Image from "next/image"
import { Great_Vibes } from 'next/font/google'

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

const FoodItems = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className={`${greatVibes.className} text-[#FF9F0D] text-2xl sm:text-3xl font-normal mb-4`}>
          Food Category
        </h2>
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-helvetica">
          <span className="text-[#FF9F0D]">Ch</span>
          <span className="text-white">oose Food Item</span>
        </div>
      </div>
      <div className="flex gap-6 sm:gap-3 items-center justify-center mt-2">
        {["/food5.png", "/food6.png", "/food7.png", "/food8.png"].map((src, index) => (
          <div key={index} className="w-[270px]">
            <Image
              src={src || "/placeholder.svg"}
              alt={`Food item ${index + 5}`}
              width={306}
              height={329}
              className="rounded-lg w-[280px] h-auto aspect-[306/329] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodItems
