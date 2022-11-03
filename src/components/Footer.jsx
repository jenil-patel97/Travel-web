import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-300 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-center items-center">
          <h1 className="font-dance text-3xl md:mr-[50rem] cursor-default">Travel</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook size={25}/>
            <FaTwitter size={25}/>
            <FaInstagram size={25}/>
            <FaPinterest size={25}/>
            <FaYoutube size={25}/>
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="md:flex font-dance md:space-x-8 space-y-2 md:text-xl font-bold cursor-default">
            <li className="mt-2">About</li>
            <li>Careers</li>
            <li>News</li>
            <li>Join</li>
          </ul>
          <ul className="text-right font-dance md:flex md:space-x-8 md:text-xl font-bold space-y-2 cursor-default">
            <li className="mt-2">Home</li>
            <li>Destinations</li>
            <li>Gallary</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm font-dance cursor-default md:text-xl font-bold md:mt-12 mt-4">© 2022 Travel by Jenil.  All Rights reserved.</p>
    </div>
  );
};

export default Footer;
