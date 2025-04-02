import Image from "next/image"

const BlogItems = ({ imageSrc, description1, description2, description3 }: any) => {
  return (
    <div className="w-full">
      <div className="flex items-center">
        {/* Image */}
        <div className="w-16 sm:w-20 h-16 sm:h-20 flex-shrink-0">
          <Image
            width={72}
            height={67}
            src={imageSrc || "/placeholder.svg"}
            alt={description1}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between pl-3 flex-grow">
          {/* Date */}
          <div className="font-bold text-xs sm:text-sm text-gray-800">{description1}</div>
          {/* Description */}
          <div className="text-xs text-gray-600">{description2}</div>
          {/* Additional Info */}
          <div className="text-xs sm:text-sm">{description3}</div>
        </div>
      </div>
    </div>
  )
}

export default BlogItems

