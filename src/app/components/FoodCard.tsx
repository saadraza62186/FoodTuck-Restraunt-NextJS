import Image from "next/image"

const FoodCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="w-full sm:w-2/3">
          <Image 
            src="/food9.png" 
            alt="Food image" 
            width={362} 
            height={356} 
            className="w-full h-auto rounded-lg" 
            quality={100}
            unoptimized
          />
        </div>
        <div className="w-full sm:w-1/3 mt-3 sm:mt-[120px]">
          <Image 
            src="/food6.png" 
            alt="Food image" 
            width={281} 
            height={231} 
            className="w-full h-auto rounded-lg" 
            quality={100}
            unoptimized
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-3">
        <div className="w-full sm:w-[45%]">
          <Image 
            src="/food10.png" 
            alt="Food image" 
            width={244} 
            height={306} 
            className="w-full h-auto rounded-lg" 
            quality={100}
            unoptimized
          />
        </div>
        <div className="w-full sm:w-[40%]">
          <Image 
            src="/food11.png" 
            alt="Food image" 
            width={221} 
            height={226} 
            className="w-full h-auto rounded-lg" 
            quality={100}
            unoptimized
          />
        </div>
        <div className="hidden sm:flex sm:flex-col sm:w-[10%] gap-2">
          <div>
            <Image 
              src="/food12.png" 
              alt="Food image" 
              width={161} 
              height={168} 
              className="w-full h-auto rounded-lg" 
              quality={100}
              unoptimized
            />
          </div>
          <div>
            <Image 
              src="/food13.png" 
              alt="Food image" 
              width={161} 
              height={166} 
              className="w-full h-auto rounded-lg" 
              quality={100}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodCard

