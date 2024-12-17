import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Image from "next/image";
const UserCard = () => {
  return (
    <div className="w-[424px] h-[423px] bg-white shadow-lg rounded-md flex flex-col items-center mt-5 p-4 border border-gray-300">
      {/* User Image */}
      <Image
        src="/user2.png"
        alt="User"
        width={148} // Actual width matching the styled dimensions
        height={130} // Actual height matching the styled dimensions
        className="w-[147.7px] h-[129.43px] object-cover rounded-full mb-4"
        quality={100} // Ensures maximum image quality
      />

      {/* Description */}
      <h3 className="text-gray-800 font-semibold text-lg mb-2">
        Prince Miyako
      </h3>
      <h3 className="text-gray-800 font-normal text-[] mb-2">
        Blogger/Photographer
      </h3>

      {/* Reviews */}
      <p className="text-gray-600 text-sm mb-4 mt-4">
        <Image src="/comment3.png" alt="" width={100} height={200} />
      </p>

      {/* Paragraph */}
      <p className="text-gray-600 text-center text-sm mb-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        distinctio, odio eligendi suscipit reprehenderit atque.
      </p>

      {/* Icons Section */}
      <div className="flex justify-center gap-4">
        <FacebookIcon className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
        <TwitterIcon className=" w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
        <InstagramIcon className=" w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
        <PinterestIcon className=" w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
      </div>
    </div>
  );
};

export default UserCard;
