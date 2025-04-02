import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Image from "next/image";

const UserCard = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded-md flex flex-col items-center p-4 border border-gray-300">
      {/* User Image */}
      <Image
        src="/user2.png"
        alt="User"
        width={148}
        height={130}
        className="w-32 h-32 sm:w-36 sm:h-36 md:w-[148px] md:h-[130px] object-cover rounded-full mb-4"
        quality={100}
      />

      {/* Description */}
      <h3 className="text-gray-800 font-semibold text-lg mb-2">
        Prince Miyako
      </h3>
      <h3 className="text-gray-800 font-normal mb-2">
        Blogger/Photographer
      </h3>

      {/* Reviews */}
      <div className="mb-4 mt-4 w-24 h-auto">
        <Image src="/comment3.png" alt="Reviews" width={100} height={20} className="w-full h-auto" />
      </div>

      {/* Paragraph */}
      <p className="text-gray-600 text-center text-sm mb-6 px-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        distinctio, odio eligendi suscipit reprehenderit atque.
      </p>

      {/* Icons Section */}
      <div className="flex justify-center gap-4">
        <FacebookIcon className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:scale-110 transition-transform" />
        <TwitterIcon className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:scale-110 transition-transform" />
        <InstagramIcon className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:scale-110 transition-transform" />
        <PinterestIcon className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:scale-110 transition-transform" />
      </div>
    </div>
  );
};

export default UserCard;
