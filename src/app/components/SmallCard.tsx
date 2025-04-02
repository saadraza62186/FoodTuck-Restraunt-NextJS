import Image from "next/image"

const SmallCard = ({ imageSrc, name, price }: any) => {
  return (
    <div className="w-full flex items-center p-2">
      {/* Image Section */}
      <Image
        width={67}
        height={62}
        src={imageSrc || "/placeholder.svg"}
        alt={name}
        className="w-16 h-16 object-cover rounded-md flex-shrink-0"
      />

      {/* Text Section */}
      <div className="flex-1 ml-4">
        <h1 className="text-gray-800 font-semibold text-sm sm:text-base">{name}</h1>
      </div>

      {/* Price Section */}
      <h2 className="text-gray-700 font-bold text-sm sm:text-base">${price}</h2>
    </div>
  )
}

export default SmallCard

