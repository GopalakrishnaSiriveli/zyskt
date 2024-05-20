import React from 'react';
import testimonialLogo from '../assets/Testimonial logo.png';
import  avatar from '../assets/avtar.png';


const TestimonialSection = () => {
  return (
    <>
    <div className='flex flex-col p-9 items-center bg-gray-100'>
        <div className='flex items-center gap-3 m-2'>
        <img src={testimonialLogo} alt='logo' className='h-8'/>
        <p className='text-xl font-bold'> Sisyphus</p>
        </div>
        <h1 className="mb-4 text-xl text-center w-5/6 m-5 font-semibold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-4xl">We've been using Untitled to kick start every new project and can't imagine working without it</h1>
        <div className='flex flex-col gap-2 m-3 justify-center items-center'>
            <img src={avatar} alt='avatar'className='h-12 rounded-full'/>
            <p className='font-bold text-md'>Cabdice Wu</p>
            <p className='text-xs text-gray-500'>Product Manager, Sisyphus</p>
            
        </div>
    </div>
    </>
  )
}

export default TestimonialSection