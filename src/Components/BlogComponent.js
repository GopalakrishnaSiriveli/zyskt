import React from 'react'
import BlogCard from './BlogCard';
import avatar1 from '../assets/avtar.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';
import image1 from '../assets/blog1.png';
import image2 from '../assets/blog2.png';
import image3 from '../assets/blog3.png';

const BlogComponent = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center w-full my-10 py-10'>
    <div className='flex justify-between w-5/6 my-5'>
  <p className="text-md text-purpleText font-semibold">Our blog</p>
  <button className='items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-purpleText hover:bg-headerBorder hidden sm:inline-block'>View all Posts</button>
</div>

        <div className='flex flex-col justify-start w-5/6'>
            <h1 className="mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl">Latest blog posts</h1>
            <p  className="mb-8 text-md font-normal  text-gray-500 lg:text-xl">Tool and strategies modern teams need to help their companies grow.</p>
        </div>
        <div className='flex flex-col gap-4 justify-center md:w-4/5 md:flex-row md:mx-8'>
            <BlogCard
            image={image1}
            blogTitle={"UX review presentation"}
            blogDescription={"How do you create compelling presentation that wow your colleagues and impress your managers"}
            avatar={avatar1}
            name={"Olivia Rhye"}
            date={"20 Jan 2024"}/>

            <BlogCard
            image={image2}
            blogTitle={"Migrating to Linear 101"}
            blogDescription={"Linear helps streamline software projects, sprints, tasks, and bug tracking.here's how to get started."}
            avatar={avatar2}
            name={"Phoenix Baker"}
            date={"19 Jan 2024"}/>

            <BlogCard
            image={image3}
            blogTitle={"Building your API stack"}
            blogDescription={"The raise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."}
            avatar={avatar3}
            name={"Lana Steiner"}
            date={"18 Jan 2024"}/>
        </div>
        <div className='w-full px-4 mt-5'>
  <button className='items-center py-3 px-3 text-sm font-medium text-center text-white rounded-lg bg-purpleText hover:bg-headerBorder sm:hidden w-full'>View all Posts</button>

        </div>
 
    </div>
    </>
  )
}

export default BlogComponent