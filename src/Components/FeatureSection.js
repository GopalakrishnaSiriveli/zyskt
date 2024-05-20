import React from 'react';
import CardComponent from './CardComponent';
import { IoChatbubblesOutline } from "react-icons/io5";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { RiChatSmile3Line } from "react-icons/ri";
import { RiWechat2Line } from "react-icons/ri";
import { GrDocument } from "react-icons/gr";
import { LiaConnectdevelop } from "react-icons/lia";

const FeatureSection = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
    <div className='flex flex-col justify-center items-center'>
    <span className="text-lg text-purpleText px-4 py-1.5 me-3 font-semibold sm:text-md">New Features</span> 

    <h1 className="mb-4 text-2xl font-bold tracking-tight text-center leading-none text-gray-900 md:text-4xl lg:text-5xl">Analytics that feels like it's from the future</h1>
        <p className="mb-8 text-md text-center font-normal  text-gray-500 lg:text-xl sm:px-16 lg:px-48">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.Trusted by over 4,000 startups.</p>
    </div>

    <div className='flex flex-wrap m-6 justify-center'>
        <CardComponent
        icon={<IoChatbubblesOutline/>}
        title={ "Share team inboxes"}
        description={"whether you havea team of 2 or 200,our shared team inboxes keep everyone on same page and in loop. "} />

        <CardComponent
        icon={<HiOutlineLightningBolt/>}
        title={ "Deliver instant answers"}
        description={"An all-in-one customer service platform that helps you balance everything your customers need to be happy"} />

        <CardComponent
        icon={<GrDocument/>}
        title={ "Manage your team with reports"}
        description={"Measure what matters with untitled's easy-to-use reports.You can filter,export and drilldown on the data in a couple clicks."} />
        
        <CardComponent
        icon={<RiWechat2Line/>}
        title={ "Connect with customers"}
        description={"Solve a problem or close a sale in real-time with chat. If no one is available,customers are seamlessly routed to email without confusion."} />

        <CardComponent
        icon={<LiaConnectdevelop/>}
        title={ "Connect the tools you already use"}
        description={"Explore 100+ integrations that make your day-to-day workflow more efficient and familiar plus, our extensive developer tools"} />

        <CardComponent
        icon={<RiChatSmile3Line/>}
        title={"Our People make the difference"}
        description={"we're an extension of your customer secice team and all of our resources are free. Chat to our friendly team 24/7 when you need help"} />



        
    </div>
    </div>
    
    </>
  )
}

export default FeatureSection