import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { HiOutlinePlayCircle } from "react-icons/hi2";
import headerImg from '../assets/header image.png';
import boltShift from '../assets/Boltshift logo.png';
import lightBox from '../assets/lightbox logo.png';
import featherBox from '../assets/Featherdev logo.png';
import spherule from '../assets/spherule logo.png';
import globalBank from '../assets/globalbank logo.png';
import nietzsche from '../assets/nietzsche logo.png';


const HeroHeaderSection = () => {
  return (
    <> 
<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 ">
        <a href="#" className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-purpleText bg-headerBg border border-headerBorder rounded-full">
            <span className="text-xs border border-headerBorder bg-white rounded-full  text-purpleText px-4 py-1.5 me-3 font-semibold">New Features</span> <span className="text-sm font-semibold flex gap-1 items-center ">Check out the team dashboard <FaArrowRight/> </span> 
            
        </a>
        <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-6xl">Beautiful analytics to grow smarter</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.Trusted by over 4,000 startups.</p>
        <div className="flex flex-col gap-3 space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
           
            <button  className="flex justify-center items-center gap-1 py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:text-purpleText hover:border-headerBorder hover:bg-headerBg ">
                <HiOutlinePlayCircle className='text-lg'/>Demo
            </button>  
            <button className="inline-flex justify-center items-center gap-1 py-3 px-5 text-base font-medium text-center  text-white rounded-lg bg-purpleText hover:bg-hoverBtn  ">
                Sign up 
                
            </button>
        </div>
        <div className="p-2 border-b md:relative">
        <div className="flex justify-center m-5 mt-10">
            <img src={headerImg} alt="headerImage" className="w-4/5 border-4 border-black rounded-xl" />
        </div>
        <div className="md:absolute md:bottom-0 w-full bg-white h-60 py-10 px-4 flex flex-col justify-center items-center">
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">Join 4,000+ companies already growing</p>
            <div className="flex gap-2 mx-auto justify-center flex-wrap">
                <img src={boltShift} alt="boltShift logo" className="h-12 p-3  cursor-pointer" />
                <img src={lightBox} alt="lightBox logo" className="h-12 p-3 cursor-pointer" />
                <img src={featherBox} alt="featherBox logo" className="h-12 p-3 cursor-pointer" />
                <img src={spherule} alt="spherule logo" className="h-12 p-3 cursor-pointer" />
                <img src={globalBank} alt="globalBank logo" className="h-12 p-3 cursor-pointer" />
                <img src={nietzsche} alt="nietzsche logo" className="h-12 p-3 cursor-pointer" />
            </div>

        </div>
        </div>

        </div>
       

    </>
  )
}

export default HeroHeaderSection;