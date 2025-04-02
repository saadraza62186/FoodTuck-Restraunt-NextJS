import Image from "next/image"
import SearchIcon from "@mui/icons-material/Search"
import LocalMallIcon from "@mui/icons-material/LocalMall"
import Link from "next/link"

const MainNav = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-transparent">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="mb-4 sm:mb-0">
          <Image src="/Foodtuck.png" alt="Foodtuck Logo" width={100} height={100} />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:w-auto">
          <nav className="text-sm sm:text-base font-normal flex flex-wrap justify-center gap-4 sm:gap-6 text-white mb-4 sm:mb-0 sm:mr-6">
            <Link href="/">
              <p className="hover:text-[#FF9F0D] transition-colors">Home</p>
            </Link>
            <Link href="/menu">
              <p className="hover:text-[#FF9F0D] transition-colors">Menu</p>
            </Link>
            <Link href="/blog">
              <p className="hover:text-[#FF9F0D] transition-colors">Blog</p>
            </Link>
            <p className="hover:text-[#FF9F0D] transition-colors cursor-pointer">Pages</p>
            <Link href="/about">
              <p className="hover:text-[#FF9F0D] transition-colors">About</p>
            </Link>
            <Link href="/shop">
              <p className="hover:text-[#FF9F0D] transition-colors">Shop</p>
            </Link>
            <Link href="/contact">
              <p className="hover:text-[#FF9F0D] transition-colors">Contact</p>
            </Link>
          </nav>
          <div className="flex items-center">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search..."
                className="border border-[#FF9F0D] p-2 w-full rounded-full pr-10 bg-transparent text-white placeholder-white"
              />
              <SearchIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white cursor-pointer hover:text-[#FF9F0D]" />
            </div>
            <div className="text-white flex items-center ml-3">
              <LocalMallIcon className="w-6 h-6 hover:text-[#FF9F0D] transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainNav

