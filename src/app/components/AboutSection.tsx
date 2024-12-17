import React from "react";
import Image from "next/image";
import AboutCard from "./AboutCard";
const AboutSection = () => {
  return (
    <div className="w-[1320px] h-[865px] flex flex-col justify-center items-center mt-4 ml-[500px]">
      <div className="font-helvetica font-bold text-5xl">Why Choose us</div>
      <div className="font-helvetica font-normal text-[16px] w-[579px] h-[48px] mt-4 flex justify-center items-center flex-col">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        </div>
        <div>pellentesque bibendum non dui volutpat fringilla bibendum.</div>
      </div>
      <div className="w-[1320px] h-[386px] mt-4">
        <Image
          src="/about1.png"
          alt="About Section Image"
          width={1320}
          height={386}
          className="w-full h-full object-cover"
          quality={100} // Ensures maximum image quality
        />
      </div>
      <div className="w-[1320px] h-[253px] flex justify-between mt-5">
        <AboutCard  imageSrc = '/Student.png' name = 'Best Chef'/>
        <AboutCard  imageSrc = '/Coffee.png' name = '120 Item food'/>
        <AboutCard  imageSrc = '/Person.png' name = 'Clean Environment'/>
      </div>
      
    </div>
  );
};

export default AboutSection;
