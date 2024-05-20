import React from 'react'

const Footer = () => {
  return (
    <>
    

<footer class="bg-white flex flex-col justify-center items-center w-full">
    <div class="mx-auto w-full max-w-screen-xl ">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 lg:grid-cols-6 w-full">
        <div >
            <h2 class="mb-6 text-sm font-semibold text-gray-500 ">Product</h2>
            <ul class="text-gray-900 font-medium ">
                <li class="mb-4 hover:underline cursor-pointer">
                    Overview
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Features
                </li>
                <li class="mb-4 flex gap-2 cursor-pointer">
                    <span className='hover:underline'>Solutions</span>
                    <button className='text-footerButton text-sm border  border-footerButton bg-FooterBtnBg rounded-xl px-2 py-1 hover:bg-white '>New</button>
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Tutorials
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Pricing
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Releases
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-500 ">Company</h2>
            <ul class="text-gray-900 font-medium">
                <li class="mb-4 hover:underline cursor-pointer">
                    About Us
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Careers
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Press
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    News
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Media Kit
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Contact
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-md font-semibold text-gray-500">Resources</h2>
            <ul class="text-gray-900 font-medium">
                <li class="mb-4 hover:underline">
                    Blog
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Newsletter
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Events
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Help Center
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Tutorials
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Support
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-md font-semibold text-gray-500 ">Use cases</h2>
            <ul class="text-gray-900 font-medium">
                <li class="mb-4 hover:underline cursor-pointer">
                    StartUps
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Enterprise
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Government
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    SaaS center
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Marketplaces
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Ecommerce
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-md font-semibold text-gray-500 ">Social</h2>
            <ul class="text-gray-900  font-medium">
                <li class="mb-4 hover:underline cursor-pointer">
                    Twitter
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    LinkedIn
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Facebook
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    GitHub
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    AngelList
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Dribble
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-md font-semibold text-gray-500 ">Legal</h2>
            <ul class="text-gray-900  font-medium">
                <li class="mb-4 hover:underline cursor-pointer">
                    Terms
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Privacy
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Cookies
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                   Licenses
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Settings
                </li>
                <li class="mb-4 hover:underline cursor-pointer">
                    Contact
                </li>
            </ul>
        </div>
    </div>
    <div class="px-10 py-6 md:flex md:items-center md:justify-between w-full ">
    <div className='flex items-center'>
            <div className='shadow-sm rounded-md p-1 relative overflow-hidden'>
                <div className='bg-navPurple w-4 h-4 rounded-full'></div>
                <div className='absolute bottom-0 left-0 w-full h-1/2 bg-white backdrop-blur-sm bg-opacity-10'></div>
            </div>
            <h1 className='font-bold'>Untitled UI</h1>
        </div>
        <span class="text-sm text-gray-500 sm:text-center">© 2077 Untitled UI. All Rights Reserved.
        </span>
      </div>
    </div>
</footer>

    </>
  )
}

export default Footer