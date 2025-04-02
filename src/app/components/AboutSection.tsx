import Image from "next/image"
import AboutCard from "./AboutCard"

const AboutSection = () => {
  return (
    <div className="w-full flex flex-col items-center py-8 md:py-12 lg:py-16">
      <div className="font-helvetica font-bold text-3xl md:text-4xl lg:text-5xl text-center">Why Choose us</div>
      <div className="font-helvetica font-normal text-sm md:text-base mt-4 text-center max-w-xl px-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
          fringilla bibendum.
        </p>
      </div>

      <div className="w-full mt-8 md:mt-12">
        <Image
          src="/about1.png"
          alt="About Section Image"
          width={1320}
          height={386}
          className="w-full h-auto object-cover"
          quality={100}
        />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-12">
        <AboutCard imageSrc="/Student.png" name="Best Chef" />
        <AboutCard imageSrc="/Coffee.png" name="120 Item food" />
        <AboutCard imageSrc="/Person.png" name="Clean Environment" />
      </div>
    </div>
  )
}

export default AboutSection

