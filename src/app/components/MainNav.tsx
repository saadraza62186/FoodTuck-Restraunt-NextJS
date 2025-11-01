"use client";

import Image from "next/image";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/chef", label: "Chef" },
];

const MainNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full bg-transparent"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative w-[120px] h-[40px] mt-2 sm:w-[80px] sm:h-[30px] lg:w-[150px] lg:h-[40px]"
          >
            <Image
              src="/Foodtuck.png"
              alt="Foodtuck Logo"
              width={600}
              height={600}
            />
          </motion.div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + i * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={link.href}
                  className="hover:text-[#FF9F0D] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Search + Cart */}
          <motion.div
            className="hidden lg:flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
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
          </motion.div>

          {/* Mobile Menu Icons */}
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

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden mt-6 pb-4 overflow-hidden"
            >
              <nav className="flex flex-col gap-4 text-white font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-[#FF9F0D] transition-colors duration-200 py-2 border-b border-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MainNav;
