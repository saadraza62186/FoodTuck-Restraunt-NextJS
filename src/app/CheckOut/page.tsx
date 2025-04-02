import Head from "next/head"
import Navbar from "../components/Navbar"
import Image from "next/image"
import FormCard from "../components/FormCard"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import EastIcon from "@mui/icons-material/East"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
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
          <h1 className="font-helvetica font-bold text-3xl md:text-4xl lg:text-[48px] text-white">Checkout Page</h1>
          <div className="font-normal text-base md:text-lg lg:text-xl text-white flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-3 h-3 md:w-4 md:h-4" />{" "}
            <div className="text-[#FF9F0D]">Checkout</div>
          </div>
        </div>
      </div>

      {/* Checkout Form */}
      <div className="flex justify-center px-4 py-8 md:py-12 lg:py-16">
        <Head>
          <title>Shipping and Billing Form</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
          {/* Left Section - Form */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <h1 className="text-xl md:text-2xl font-bold">Shipping Address</h1>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">First Name</label>
                <input type="text" className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Last Name</label>
                <input type="text" className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Email Address</label>
                <input type="email" className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Phone Number</label>
                <input type="tel" className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Company</label>
                <input type="text" className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Country</label>
                <input type="text" className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">City</label>
                <input type="text" className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Zip Code</label>
                <input type="text" className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Address 1</label>
                <input type="text" className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Address 2</label>
                <input type="text" className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded" />
              </div>
            </div>

            {/* Billing Address */}
            <h1 className="text-xl md:text-2xl font-bold mt-4">Billing Address</h1>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="same-as-shipping" className="h-4 w-4 md:h-5 md:w-5" />
              <label htmlFor="same-as-shipping" className="text-sm md:text-base">
                Same as shipping address
              </label>
            </div>

            {/* Navigation Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <button className="w-full h-12 md:h-14 border text-black rounded flex justify-center items-center gap-2">
                <ArrowBackIosIcon className="w-4 h-4" />
                Back to Cart
              </button>
              <button className="w-full h-12 md:h-14 bg-[#FF9F0D] text-white rounded flex justify-center items-center gap-2">
                Proceed to Shipping
                <ArrowForwardIosIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <div className="border rounded-md p-4 mb-6">
              {/* Order Items */}
              <div className="space-y-4 mb-6">
                <FormCard />
                <FormCard />
                <FormCard />
              </div>

              {/* Order Summary */}
              <div className="border border-gray-300 rounded-md p-4 flex flex-col gap-4">
                {/* Summary Items */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Subtotal</span>
                    <span className="text-sm font-medium">$130</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Shipping</span>
                    <span className="text-sm font-medium">Free</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Discount</span>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Tax</span>
                    <span className="text-sm font-medium">$54.76</span>
                  </div>

                  {/* Divider */}
                  <hr className="border-t border-gray-300 my-2" />

                  {/* Total */}
                  <div className="flex justify-between items-center">
                    <span className="text-base md:text-lg font-semibold">Total</span>
                    <span className="text-base md:text-lg font-semibold">$432.65</span>
                  </div>
                </div>

                {/* Place Order Button */}
                <button className="w-full h-12 md:h-14 bg-[#FF9F0D] text-white font-medium rounded-md hover:bg-[#e08c00] transition-colors flex justify-center items-center gap-2">
                  Place an order
                  <EastIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <MainFooter />
      </div>
    </div>
  )
}

export default page

