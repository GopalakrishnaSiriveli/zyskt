import React from 'react';
import AccordionComponent from './AccordionComponent';
import avatar from '../assets/avtar.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

const FaqSection = () => {
  return (
    <>
    <div className='flex flex-col items-center pb-10 m-3 mx-10 border-b border-gray-200'>
        <div className='flex flex-col items-center'>
        <h1 className="mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl">Frequently asked questions</h1>
        <p className="mb-8 text-md text-center font-normal  text-gray-500 lg:text-xl sm:px-16 lg:px-48">Everything you need to know about the product and billing</p>
      </div>
        <div className='md:w-3/6 m-4 mb-8'>
        <AccordionComponent
                question={'Is there a free trial available?'}
                answer={"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible"}/> 

                <AccordionComponent
                question={'what is your cancellation policy?'}
                answer={"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible"}/>

                <AccordionComponent
                question={'Can other info be added to a incoice?'}
                answer={"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible"}/>

                <AccordionComponent
                question={'how does billing work?'}
                answer={"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible"}/>

                <AccordionComponent
                question={'how do i change my account email?'}
                answer={"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible"}/>

        </div>

        <div className='w-full flex justify-center'>
        <div className='flex flex-col gap-2 items-center w-4/5 m-4 p-10 bg-gray-100'>
            <div className='relative flex gap-1'>
            <img src={avatar2} alt='avatar2'className='h-12 rounded-full'/>
            <img src={avatar} alt='avatar'className='h-12 rounded-full ' style={{position:'absolute',left:'25%',bottom:'10%'}}/>
            <img src={avatar3} alt='avatar3'className='h-12 rounded-full'/>

            </div>
            <div>
            <p className='font-bold text-md text-center'>Still have questions?</p>
            <p className='text-sm text-center text-gray-500'>Can't find the answer you're looking for? Please chat to our friendly team.</p>
            </div>
            <button className="justify-center items-center gap-1 py-2 px-3 m-4 text-sm font-medium text-center text-white rounded-lg bg-purpleText hover:bg-headerBorder ">Get in touch</button>
        </div>
        </div>
        
        

    </div>
    </>
  )
}

export default FaqSection