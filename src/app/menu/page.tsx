import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { ChevronRight } from 'lucide-react';
import Menu1 from "../components/Menu1";
import Menu2 from "../components/Menu2";
import Section5 from "../components/Section5";
import Reciepie from "../components/Reciepie";
import Menu3 from "../components/Menu3";
import Menu4 from "../components/Menu4";
import MainFooter from "../components/MainFooter";
import Partner from "../components/Partner";
export default function MenuPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Navbar Section */}
      <div className="w-full bg-[#0D0D0DF2]">
        <Navbar />
      </div>

      {/* Hero Banner */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] relative">
        {/* Background Image */}
        <Image
          src="/menu1.png"
          alt="Menu Image"
          fill
          className="object-cover"
          priority
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            Our Menu
          </h1>
          <div className="font-normal text-base md:text-lg text-white flex items-center gap-2 mt-2">
            Home <ChevronRight className="w-4 h-4" />{" "}
            <div className="text-[#FF9F0D]">Menu</div>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="w-full py-10 md:py-16">
        <div className="container mx-auto px-4">
          <Menu1 />
        </div>
      </div>

      <div className="w-full py-10 md:py-16">
        <div className="container mx-auto px-4">
          <Menu2 />
        </div>
      </div>

      {/* Recipe Stats Section */}
      <div className="w-full bg-[#0D0D0DF2] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            <Reciepie
              imageSrc="/food14.png"
              name="Professional Chefs"
              items="420"
            />
            <Reciepie 
              imageSrc="/food15.png" 
              name="Items Of Food" 
              items="320" 
            />
            <Reciepie
              imageSrc="/food16.png"
              name="Years Of Experienced"
              items="30+"
            />
            <Reciepie 
              imageSrc="/food17.png" 
              name="Happy Customers" 
              items="220" 
            />
          </div>
        </div>
      </div>

      <div className="w-full py-10 md:py-16">
        <div className="container mx-auto px-4">
          <Menu3 />
        </div>
      </div>

      <div className="w-full py-10 md:py-16">
        <div className="container mx-auto px-4">
          <Menu4 />
        </div>
      </div>

      {/* Partners Section */}
      <div className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Partner />
        </div>
      </div>

      {/* Footer */}
      <MainFooter />
    </div>
  );
}
