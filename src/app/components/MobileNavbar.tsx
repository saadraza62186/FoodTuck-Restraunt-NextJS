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
                  <a className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">Home</a>
                </Link>
                <Link href="/menu">
                  <a className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">Menu</a>
                </Link>
                <Link href="/blog">
                  <a className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">Blog</a>
                </Link>
                <Link href="/pages">
                  <a className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">Pages</a>
                </Link>
                <Link href="/about">
                  <a className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">About</a>
                </Link>
                <Link href="/shop">
                  <a className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">Shop</a>
                </Link>
                <Link href="/contact">
                  <a className="cursor-pointer hover:text-yellow-500 border-b-2 pb-3">Contact</a>
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
