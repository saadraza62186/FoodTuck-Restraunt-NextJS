
// Navbar Component
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Link from 'next/link';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-transparent w-full h-[90px] flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-12 2xl:w-[1320px] 2xl:px-0'>
      {/* Logo */}
      <div className='flex-shrink-0 2xl:w-[109px] 2xl:h-[32px]'>
  <Image
    src='/Foodtuck.png'
    alt='Foodtuck'
    width={109}
    height={32}
    quality={100}
    placeholder='empty'
    className='w-auto h-auto 2xl:w-full 2xl:h-[30px]'
  />
</div>


      {/* Navigation Links */}
      <div className={`hidden md:flex text-white gap-4 lg:gap-6 text-sm lg:text-base 2xl:gap-10 2xl:font-bold 2xl:text-[16px]`}>
        <Link href='/'>
        <h2 className="cursor-pointer hover:text-yellow-500">Home</h2>
        </Link>
        <Link href="/menu">
          <h2 className='cursor-pointer hover:text-yellow-500'>Menu</h2>
        </Link>
        <Link href='/blog'>
        <h2 className='cursor-pointer hover:text-yellow-500'>Blog</h2>
        </Link>
        <h2 className='cursor-pointer hover:text-yellow-500'>Pages</h2>
        <Link href='/about'>
        <h2 className='cursor-pointer hover:text-yellow-500'>About</h2>
        </Link>
        <Link href='/shop'>
        <h2 className='cursor-pointer hover:text-yellow-500'>Shop</h2>
        </Link>
        <Link href='/CheckOut'>
        <h2 className='cursor-pointer hover:text-yellow-500'>Contact</h2>
        </Link>
      </div>

      {/* Icons */}
      <div className='text-white flex gap-3 sm:gap-4 lg:gap-5 2xl:gap-6'>
        <SearchIcon className='cursor-pointer hover:text-yellow-500 w-5 h-5 lg:w-6 lg:h-6 2xl:w-[24px] 2xl:h-[24px]' />
        <PersonIcon className='cursor-pointer hover:text-yellow-500 w-5 h-5 lg:w-6 lg:h-6 2xl:w-[24px] 2xl:h-[24px]' />
        <ShoppingBagIcon className='cursor-pointer hover:text-yellow-500 w-5 h-5 lg:w-6 lg:h-6 2xl:w-[24px] 2xl:h-[24px]' />
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden flex items-center'>
        <div className='text-white'>
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;