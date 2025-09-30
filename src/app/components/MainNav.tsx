"use client";

import Image from "next/image";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MainNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-transparent">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="flex items-center justify-between">
          <div className="relative w-[120px] h-[40px] mt-2 sm:w-[80px] sm:h-[30px] lg:w-[150px] lg:h-[40px]">
            <Image
              src="/Foodtuck.png"
              alt="Foodtuck Logo"
              width={600}
              height={600}
            />
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
            <Link
              href="/"
              className="hover:text-[#FF9F0D] transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="hover:text-[#FF9F0D] transition-colors duration-200"
            >
              Menu
            </Link>
            <Link
              href="/blog"
              className="hover:text-[#FF9F0D] transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              href="/pages"
              className="hover:text-[#FF9F0D] transition-colors duration-200"
            >
              Pages
            </Link>
            <Link
              href="/about"
              className="hover:text-[#FF9F0D] transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/shop"
              className="hover:text-[#FF9F0D] transition-colors duration-200"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#FF9F0D] transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border border-[#FF9F0D] rounded-full px-6 py-2 w-64 bg-transparent text-white placeholder-white/70 focus:outline-none focus:border-[#FF9F0D] focus:ring-1 focus:ring-[#FF9F0D] transition-all"
              />
              <Search className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white w-5 h-5 cursor-pointer hover:text-[#FF9F0D] transition-colors" />
            </div>
            <button className="text-white hover:text-[#FF9F0D] transition-colors duration-200">
              <ShoppingBag className="w-6 h-6" />
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <button className="text-white hover:text-[#FF9F0D] transition-colors">
              <Search className="w-6 h-6" />
            </button>
            <button className="text-white hover:text-[#FF9F0D] transition-colors">
              <ShoppingBag className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#FF9F0D] transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4">
            <nav className="flex flex-col gap-4 text-white font-medium">
              <Link
                href="/"
                className="hover:text-[#FF9F0D] transition-colors duration-200 py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="hover:text-[#FF9F0D] transition-colors duration-200 py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/blog"
                className="hover:text-[#FF9F0D] transition-colors duration-200 py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/pages"
                className="hover:text-[#FF9F0D] transition-colors duration-200 py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pages
              </Link>
              <Link
                href="/about"
                className="hover:text-[#FF9F0D] transition-colors duration-200 py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/shop"
                className="hover:text-[#FF9F0D] transition-colors duration-200 py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#FF9F0D] transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="mt-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-[#FF9F0D] rounded-full px-6 py-2 w-full bg-transparent text-white placeholder-white/70 focus:outline-none focus:border-[#FF9F0D] focus:ring-1 focus:ring-[#FF9F0D]"
                />
                <Search className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white w-5 h-5" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainNav;
