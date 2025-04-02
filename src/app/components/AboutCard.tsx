import Image from "next/image"

const AboutCard = ({ imageSrc, name }: any) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-16 h-16 md:w-20 md:h-20">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} width={80} height={80} className="w-full h-full" />
      </div>
      <div className="font-helvetica font-bold text-xl md:text-2xl mt-3 text-center">{name}</div>
      <div className="font-helvetica font-normal text-sm md:text-base mt-3 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
      </div>
    </div>
  )
}

export default AboutCard

