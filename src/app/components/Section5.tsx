import Reciepie from "./Reciepie"
import AnimatedCounter from "./AnimatedCounter"
const Section5 = () => {
  return (
    <div className="w-full bg-[#0D0D0DF2] py-16 md:py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-0 max-w-[1320px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-4">
          <Reciepie imageSrc="/food14.png" name="Professional Chefs" items={<AnimatedCounter to={420} start={true} />} />
          <Reciepie imageSrc="/food15.png" name="Items Of Food" items={<AnimatedCounter to={320} start={true} />} />
          <Reciepie imageSrc="/food16.png" name="Years Of Experienced" items={<AnimatedCounter to={30} start={true} />} />
          <Reciepie imageSrc="/food17.png" name="Happy Customers" items={<AnimatedCounter to={220} start={true} />} />
        </div>
      </div>
    </div>
  )
}

export default Section5

