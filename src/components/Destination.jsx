import React from 'react'

import Paris from '../assets/paris.jpg';
import Bali from '../assets/bali.jpg';
import Frame from '../assets/dubai.jpg';
import sarengeti from '../assets/sarengeti.jpg';
import Norway from '../assets/norway.jpg';
import Himalayas from '../assets/himalayas.jpg';
import Egypt from '../assets/egypt.jpg';

const Destinations = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 text-center '>
            <h1 className='md:text-3xl mb-2 text-[2.5rem] cursor-default font-dance'>Some of my favourite Destinations</h1>
            <div className='grid grid-rows-none md:grid-cols-6 py-4 gap-2 md:gap-4 '>
                <img className='relative w-full h-full object-cover cursor-default col-span-2 md:col-span-3 row-span-2  hover:scale-105 duration-500' src={Paris} alt="love" />
                <p className='absolute md:left-[23%] left-[42%] mt-[5rem] md:mt-[14rem] font-dance text-white md:text-5xl text-3xl cursor-default hover:scale-105 duration-500'>Paris</p>
                <p className='absolute md:left-[11%] left-[3rem] mt-[7rem] md:mt-[17rem] font-dance text-black md:text-2xl cursor-default hover:scale-105 duration-500'>Paris is the capital & most beautiful <span className='md:text-white'>city</span>  of France .</p>

                <img className='w-full h-full object-cover hover:scale-105 duration-500 cursor-default' src={Norway} alt="/" />
                <p className='absolute md:left-[46rem] left-[16%] mt-[22rem] md:mt-[6rem] font-dance text-white md:text-3xl text-3xl cursor-default hover:scale-105 duration-500'>Norway</p>

                <img className='w-full h-full object-cover hover:scale-105 duration-500 cursor-default' src={Frame} alt="/" />
                <p className='absolute md:left-[57rem] left-[57%] mt-[22rem] md:mt-[6rem] font-dance text-white md:text-[28px] text-[25px] cursor-default hover:scale-105 duration-500'>Dubai-Frame</p>

                <img className='w-full h-full object-cover hover:scale-105 duration-500 cursor-default' src={sarengeti} alt="/" />
                <p className='absolute md:left-[71rem] left-[15%] mt-[38rem] md:mt-[6rem] font-dance text-white md:text-[28px] text-[25px] cursor-default hover:scale-105 duration-500'>Serengeti</p>

                <img className='w-full h-full object-cover hover:scale-105 duration-500 cursor-default' src={Bali} alt="/" />
                <p className='absolute md:left-[47rem] left-[66%] mt-[38rem] md:mt-[24rem] font-dance text-white md:text-[28px] text-[26px] cursor-default hover:scale-105 duration-500'>Bali</p>

                <img className='w-full h-full object-cover hover:scale-105 duration-500 cursor-default' src={Himalayas} alt="/" />
                <p className='absolute md:left-[58rem] left-[15%] mt-[50rem] md:mt-[24rem] font-dance text-black md:text-[29px] text-[25px] cursor-default hover:scale-105 duration-500'>Himalayas</p>

                <img className='w-full h-full object-cover hover:scale-105 duration-500 cursor-default' src={Egypt} alt="/" />
                <p className='absolute md:left-[72rem] left-[66%] mt-[50rem] md:mt-[24rem] font-dance text-black md:text-[30px] text-[26px] cursor-default hover:scale-105 duration-500'>Egypt</p>

            </div>
        </div>
    )
}

export default Destinations