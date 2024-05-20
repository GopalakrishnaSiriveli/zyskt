import React from 'react';
import { GoArrowUpRight } from "react-icons/go";


const BlogCard = (props) => {
  return (
    <>
    

<div class=" cursor-pointer">
    <div>
        <img  src={props.image} alt="blog image" />
    </div>
    <div class="p-5 pb-2">
        <h5 class="mb-2 text-lg font-semibold tracking-tight text-gray-900 flex justify-between items-center">{props.blogTitle} <GoArrowUpRight className='text-xl'/></h5>
        
        <p class="mb-1 font-normal text-md text-gray-700 dark:text-gray-400">{props.blogDescription}</p>
        
    </div>
    <div className='flex m-3 mt-0 gap-2'>
        <img src={props.avatar} alt='avatar'className='h-8 rounded-full'/> 
        <div className='flex flex-col'>
            <p className='text-sm font-semibold'>{props.name}</p>
            <p className='text-sm'>{props.date}</p>
        </div>
    </div>
</div>

    
    </>
  )
}

export default BlogCard