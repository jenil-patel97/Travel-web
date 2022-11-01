import React, { useState } from "react";
import umb from "../assets/umbrella.png";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div onClick={handleNav} className="w-[60px] mt-2 md:w-[72px]">
        <img className={logo ? "hidden" : "block"} src={umb} alt="umb" />
      </div>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer hover:font-medium ">Home</li>
        <li className="p-4 cursor-pointer hover:font-medium">Destinations</li>
        <li className="p-4 cursor-pointer hover:font-medium">Travel</li>
        <li className="p-4 cursor-pointer hover:font-medium">View</li>
        <li className="p-4 cursor-pointer hover:font-medium">Book</li>
      </ul>
      <div className="hidden md:flex gap-2 cursor-pointer">
        <BiSearch size={23} />
        <BsPerson size={23} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose size={23} className="text-black" />
        ) : (
          <MdOutlineMenu size={23} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <img className="-mt-3" src={umb} alt="umb" width={59} />
          <li className="border-b p-4 text-xl">Home</li>
          <li className="border-b p-4 text-xl">Destinations</li>
          <li className="border-b p-4 text-xl">Travel</li>
          <li className="border-b p-4 text-xl">View</li>
          <li className="border-b p-4 text-xl">Book</li>
        </ul>
        <div className="flex flex-col">
          <button className="my-6 p-3 border bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-md">
            Search
          </button>
          <button className="p-3 border bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-md">
            Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
