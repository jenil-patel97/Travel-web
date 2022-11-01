import React from 'react'

import Paris from '../assets/paris.jpg';
import Maldives from '../assets/maldives.jpg'
import Frame from '../assets/dubai.jpg'
import sarengeti from '../assets/sarengeti.jpg'
import Norway from '../assets/norway.jpg'
import Himalayas from '../assets/himalayas.jpg'
import Egypt from '../assets/egypt.jpg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center '>
        <h1 className='md:text-3xl mb-2 text-[2.5rem] cursor-default font-dance'>Some of my favourite Destinations</h1>
        <div className='grid grid-rows-none md:grid-cols-6 py-4 gap-2 md:gap-4 '>
            <img className='w-full h-full object-cover hover:scale-105 duration-500 cursor-pointer col-span-2 md:col-span-3 row-span-2' src={Paris} alt="love" />
            <img className='w-full h-full object-cover hover:scale-105 duration-500 cursor-pointer' src={Norway} alt="/" />
            <img className='w-full h-full object-cover hover:scale-105 duration-500 cursor-pointer' src={Frame} alt="/" />
            <img className='w-full h-full object-cover hover:scale-105 duration-500 cursor-pointer' src={sarengeti} alt="/" />
            <img className='w-full h-full object-cover hover:scale-105 duration-500 cursor-pointer' src={Maldives} alt="/" />
            <img className='w-full h-full object-cover hover:scale-105 duration-500 cursor-pointer' src={Himalayas} alt="/" />
            <img className='w-full h-full object-cover hover:scale-105 duration-500 cursor-pointer' src={Egypt} alt="/" />
        </div>
    </div>
  )
} 

export default Destinations