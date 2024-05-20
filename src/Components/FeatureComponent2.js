import React from 'react';
import CardComponent from './CardComponent';
import headerImg from '../assets/header image.png';
import iphone from '../assets/iphone.png';
import iphoneMobile from '../assets/iphoneMobile .png';
import { IoChatbubblesOutline } from "react-icons/io5";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { GrDocument } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";

const FeatureComponent2 = () => {
  return (
    <>
    <div className='flex flex-col items-center m-10'>
    <div className='flex flex-col items-center gap-2'>
    <span className="text-md border border-headerBorder bg-headerBg rounded-full  text-purpleText px-4 py-1 me-3 font-semibold cursor-pointer">Features</span>
    <h1 className="mb-4 text-2xl text-center font-bold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl">Analytics that feels like it's from the future</h1>
    <p className="mb-8 text-md text-center font-normal  text-gray-500 lg:text-xl sm:px-16 lg:px-48">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.Trusted by over 4,000 startups.</p>
    </div>
    <div className='relative w-full hidden sm:inline-block'>
    <div className='flex justify-center m-5 mt-10 '>
        <img src={headerImg} alt='headerImage' className=' border-4 border-black rounded-xl shadow-2xl' style={{width:'768px', height:'512px'}}/>
    </div>
    <div style={{position:'absolute',top:'98px',left:'14%'}}>
        <img src={iphone} alt='iphone img' style={{width:'244px',height:'497.34px'}}/>
    </div>
   
    </div>
    <div className='inline-block sm:hidden'>
        <img src={iphoneMobile} alt='iphone img' style={{width:'244px',height:'280px'}}/>
    </div>
    <div className='flex flex-wrap m-10 justify-center'>
        <CardComponent
        icon={<IoChatbubblesOutline/>}
        title={ "Share team inboxes"}
        description={"whether you havea team of 2 or 200,our shared team inboxes keep everyone on same page and in loop. "}
        button={"Learn more"}
        icon1={<FaArrowRight/>} />

        <CardComponent
        icon={<HiOutlineLightningBolt/>}
        title={ "Deliver instant answers"}
        description={"An all-in-one customer service platform that helps you balance everything your customers need to be happy"}
        button={"Learn more"}
        icon1={<FaArrowRight/>} />

        <CardComponent
        icon={<GrDocument/>}
        title={ "Manage your team with reports"}
        description={"Measure what matters with untitled's easy-to-use reports.You can filter,export and drilldown on the data in a couple clicks."}
        button={"Learn more"}
        icon1={<FaArrowRight/>} />


        
    </div>

    </div>
    
    </>
  )
}

export default FeatureComponent2