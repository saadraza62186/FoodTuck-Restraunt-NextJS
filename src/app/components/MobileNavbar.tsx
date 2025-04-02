"use client";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

const MobileNavbar = () => {
  return (
    <div>
      <Sheet>
        {/* Trigger Icon */}
        <SheetTrigger className="flex items-center justify-center">
          <Menu className="h-6 w-6 text-white cursor-pointer" />
        </SheetTrigger>

        {/* Drawer Content */}
        <SheetContent side="left" className="bg-white w-[300px]">
          <SheetHeader className="mb-4">
            <div className="h-14 flex items-center bg-black justify-center rounded-tl-lg rounded-tr-lg">
              {/* You can add your logo here */}
              <Image
                src="/Foodtuck.png"
                alt="Foodtuck"
                width={109}
                height={32}
                quality={100}
                placeholder="empty"
                className="w-auto h-auto 2xl:w-full 2xl:h-[30px]"
              />
            </div>
          </SheetHeader>

          {/* Menu Links */}
          <div className="flex flex-col text-black gap-4 text-base font-bold mt-6 ">
            <Link href="/" className="w-full">
              <div className="cursor-pointer hover:text-yellow-500 border-b border-gray-200 pb-3 text-black">
                Home
              </div>
            </Link>
            <Link href="/menu" className="w-full">
              <div className="cursor-pointer hover:text-yellow-500 border-b border-gray-200 pb-3 text-black">
                Menu
              </div>
            </Link>
            <Link href="/blog" className="w-full">
              <div className="cursor-pointer hover:text-yellow-500 border-b border-gray-200 pb-3 text-black">
                Blog
              </div>
            </Link>
            <Link href="/pages" className="w-full">
              <div className="cursor-pointer hover:text-yellow-500 border-b border-gray-200 pb-3 text-black">
                Pages
              </div>
            </Link>
            <Link href="/about" className="w-full">
              <div className="cursor-pointer hover:text-yellow-500 border-b border-gray-200 pb-3 text-black">
                About
              </div>
            </Link>
            <Link href="/shop" className="w-full">
              <div className="cursor-pointer hover:text-yellow-500 border-b border-gray-200 pb-3 text-black">
                Shop
              </div>
            </Link>
            <Link href="/contact" className="w-full">
              <div className="cursor-pointer hover:text-yellow-500 border-b border-gray-200 pb-3 text-black">
                Contact
              </div>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
