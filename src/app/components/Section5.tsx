import Reciepie from "./Reciepie"

const Section5 = () => {
  return (
    <div className="w-full bg-[#0D0D0DF2] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-0 max-w-[1320px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-4">
          <Reciepie imageSrc="/food14.png" name="Professional Chefs" items="420" />
          <Reciepie imageSrc="/food15.png" name="Items Of Food" items="320" />
          <Reciepie imageSrc="/food16.png" name="Years Of Experienced" items="30+" />
          <Reciepie imageSrc="/food17.png" name="Happy Customers" items="220" />
        </div>
      </div>
    </div>
  )
}

export default Section5

