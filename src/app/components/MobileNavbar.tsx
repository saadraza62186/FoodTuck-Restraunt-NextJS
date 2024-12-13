'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuIcon from '@mui/icons-material/Menu';

const MobileNavbar = () => {
  return (
    <div>
      <Sheet>
        {/* Trigger Icon */}
        <SheetTrigger>
          <MenuIcon className="text-white cursor-pointer" />
        </SheetTrigger>

        {/* Drawer Content */}
        <SheetContent className="bg-white text-black">
          <SheetHeader>
            <SheetDescription>
              {/* Menu Links */}
              <div className="flex flex-col text-black gap-4 text-base font-bold mt-6">
                <h2 className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">
                  Home
                </h2>
                <Link href="/menu">
                <h2 className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">
                  Menu
                </h2>
                </Link>
                <h2 className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">
                  Blog
                </h2>
                <h2 className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">
                  Pages
                </h2>
                <h2 className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">
                  About
                </h2>
                <h2 className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">
                  Shop
                </h2>
                <h2 className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">
                  Contact
                </h2>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
