import Image from "next/image"

const ProductCard = ({ imageSrc, name, price }: any) => {
  return (
    <div className="w-full">
      <div className="flex items-center">
        {/* Image */}
        <div className="w-16 sm:w-20 h-16 sm:h-20 flex-shrink-0">
          <Image
            width={72}
            height={72}
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between pl-3 flex-grow">
          {/* Name */}
          <div className="font-bold text-sm md:text-base text-gray-800">{name}</div>
          {/* Rating */}
          <div className="text-xs text-gray-600">★★★★★ 4.5</div>
          {/* Price */}
          <div className="text-sm md:text-base font-bold text-[#FF9F0D]">{price}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

