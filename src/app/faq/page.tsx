import Image from "next/image"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import Navbar from "../components/Navbar"
import FaqCard from "../components/FaqCard"
import MainFooter from "../components/MainFooter"

const page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navbar Section */}
      <div className="w-full flex justify-center items-center bg-[#0D0D0DF2]">
        <Navbar />
      </div>

      {/* Image Section */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] relative">
        {/* Background Image */}
        <Image src="/menu1.png" alt="Menu Image" fill className="object-cover" quality={100} />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-helvetica font-bold text-3xl md:text-4xl lg:text-[48px] text-white">FAQ Page</h1>
          <div className="font-normal text-base md:text-lg lg:text-xl text-white flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-3 h-3 md:w-4 md:h-4" /> <div className="text-[#FF9F0D]">FAQ</div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="w-full flex justify-center px-4 py-8 md:py-12 lg:py-16">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="font-helvetica font-bold text-3xl md:text-4xl lg:text-5xl text-center">
            Questions Looks Here
          </div>
          <div className="font-normal text-sm md:text-base mt-4 text-center max-w-2xl">
            Have a question about ordering, delivery, or our menu? We answer the
            most common questions here — if you still need help, contact our
            support team and we&apos;ll get back to you quickly.
          </div>
          <div className="w-full mt-8 md:mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <FaqCard name="How we serve food?" />
              <FaqCard name="How can we get in touch with you?" />
              <FaqCard name="How is our food quality?" />
              <FaqCard name="What will be delivered? And When?" />
              <FaqCard name="How do we give home delivery?" />
              <FaqCard name="Is this restaurant 24 hours open?" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-auto">
        <MainFooter />
      </div>
    </div>
  )
}

export default page
