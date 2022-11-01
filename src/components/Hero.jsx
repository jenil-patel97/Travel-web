import React from "react";
import BeachVid from "../assets/beachVid.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={BeachVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1 className="md:text-5xl text-[2.5rem] cursor-default font-dance">My Dream Travel Destinations !!</h1>
        <h2 className="py-5 md:text-5xl text-[2.5rem] cursor-default font-dance">Best Locations Worldwide</h2>
        <form
          className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90"
        >
          <div>
            <input
              className="bg-transparent w-[300px] sm:w-[400px] focus:outline-none"
              type="text"
              placeholder="Search Destinations"
            />
          </div>
          <div>
            <button className="text-white p-2 border bg-gradient-to-r from-[#5651e5] to-[#709dff] rounded-md">
              <AiOutlineSearch size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
