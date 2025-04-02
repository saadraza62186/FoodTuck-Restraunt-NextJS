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
                <Link href="/">
                  <div className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">Home</div>
                </Link>
                <Link href="/menu">
                  <div className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">Menu</div>
                </Link>
                <Link href="/blog">
                  <div className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">Blog</div>
                </Link>
                <Link href="/pages">
                  <div className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">Pages</div>
                </Link>
                <Link href="/about">
                  <div className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">About</div>
                </Link>
                <Link href="/shop">
                  <div className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">Shop</div>
                </Link>
                <Link href="/contact">
                  <div className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">Contact</div>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
