import MailIcon from "@mui/icons-material/Mail"
import HttpsIcon from "@mui/icons-material/Https"
import GoogleIcon from "@mui/icons-material/Google"
import AppleIcon from "@mui/icons-material/Apple"
import Image from "next/image"
import Navbar from "../components/Navbar"
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
          <h1 className="font-helvetica font-bold text-3xl md:text-4xl lg:text-[48px] text-white">404 Error</h1>
          <div className="font-normal text-base md:text-lg lg:text-xl text-white flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-3 h-3 md:w-4 md:h-4" /> <div className="text-[#FF9F0D]">404</div>
          </div>
        </div>
      </div>

      {/* Sign In Form */}
      <div className="w-full flex justify-center px-4 py-8 md:py-12">
        <div className="w-full max-w-md rounded-lg shadow-lg flex flex-col items-center p-6">
          {/* Heading */}
          <h1 className="text-2xl font-bold mb-6">Sign In</h1>

          {/* Email Input */}
          <div className="relative mb-4 w-full">
            <span className="absolute inset-y-0 left-3 flex items-center">
              <MailIcon className="text-gray-500" />
            </span>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-11 pl-10 pr-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-4 w-full">
            <span className="absolute inset-y-0 left-3 flex items-center">
              <HttpsIcon className="text-gray-500" />
            </span>
            <input
              type="password"
              placeholder="Password"
              className="w-full h-11 pl-10 pr-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-4 w-full">
            <input type="checkbox" id="remember" className="mr-2 w-4 h-4 text-blue-500 border-gray-300 rounded" />
            <label htmlFor="remember" className="text-sm text-gray-600">
              Remember me?
            </label>
          </div>

          {/* Sign Up Button */}
          <div className="relative mb-4 w-full">
            <input
              type="button"
              value="Sign Up"
              className="w-full h-11 bg-[#FF9F0D] text-white text-center rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 cursor-pointer"
            />
          </div>

          {/* Forget Password */}
          <div className="items-center mb-4 w-full flex justify-end">
            <label htmlFor="remember" className="text-sm text-gray-600">
              Forget password?
            </label>
          </div>

          {/* Divider */}
          <div className="flex items-center mb-4 w-full">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-sm text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Sign Up with Google */}
          <div className="relative mb-4 w-full">
            <span className="absolute inset-y-0 left-3 flex items-center">
              <GoogleIcon className="w-5 h-5 text-gray-500" />
            </span>
            <input
              type="button"
              value="Sign Up with Google"
              className="w-full h-11 pl-10 pr-4 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-400 cursor-pointer"
            />
          </div>

          {/* Sign Up with Apple */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-3 flex items-center">
              <AppleIcon className="w-5 h-5 text-gray-500" />
            </span>
            <input
              type="button"
              value="Sign Up with Apple"
              className="w-full h-11 pl-10 pr-4 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-400 cursor-pointer"
            />
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

