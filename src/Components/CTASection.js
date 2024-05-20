import React from 'react'

const CTASection = () => {
  return (
    <>
    <div className='flex flex-col w-full justify-center items-center my-10 p-5 pb-12 bg-gray-100'>
    <h1 className="mb-4 text-lg text-center w-full m-5 font-semibold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-4xl">Start your free trial</h1>
    <p className="mb-8 text-md text-center font-normal w-4/5 text-gray-500 ">Join over 4,000+ startups already growing with Untitled</p>
    <div className="flex flex-col gap-3 space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
    <button className="w-full sm:w-auto flex items-center gap-1 py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:text-purpleText hover:border-headerBorder hover:bg-headerBg">
        Learn More
    </button>  
    <button className="w-full sm:w-auto inline-flex justify-center items-center gap-1 py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purpleText hover:bg-headerBorder">
        Get Started
    </button>
</div>

    </div>
    </>
  )
}

export default CTASection