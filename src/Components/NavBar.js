import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoChevronDown } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";
import avatar from '../assets/avtar.png';


const NavLg = () => {
  return (
    <>
    <div className='px-12 w-full border-b'>
    <div className='flex justify-between items-center px-12 py-4 w-full'>
    <div className='flex gap-7'>
        <div className='flex items-center gap-2'>
            <div className='shadow-sm rounded-md p-1 relative overflow-hidden'>
                <div className='bg-navPurple w-4 h-4 rounded-full'></div>
                <div className='absolute bottom-0 left-0 w-full h-1/2 bg-white backdrop-blur-sm bg-opacity-10'></div>
            </div>
            <h1 className='font-bold'>Untitled UI</h1>
        </div>
        <div>
            <ul className='flex gap-6 px-3'>
                <li className='cursor-pointer hover:text-navPurple'>Home</li>
                <li className='flex gap-2 items-center cursor-pointer hover:text-navPurple'>Products <IoChevronDown /></li>
                <li className='flex gap-2 items-center cursor-pointer hover:text-navPurple'>Resources <IoChevronDown /></li>
                <li className='cursor-pointer hover:text-navPurple'>Pricing</li>
            </ul>
        </div>
    </div>

    <div className='h-8 w-8 rounded-full items-center cursor-pointer'>
        <img src={avatar} alt='avatar' className='w-full h-full rounded-full'/>
    </div>
</div>
    </div>
 

</>
  )
}

const NavMd=()=>{
    return(
        <>
            
    <div className='flex justify-between items-center px-12 py-4 w-full border-b'>
    <div className='flex gap-7'>
        <div className='flex items-center gap-2'>
            <div className='shadow-sm rounded-md p-1 relative overflow-hidden'>
                <div className='bg-navPurple w-4 h-4 rounded-full'></div>
                <div className='absolute bottom-0 left-0 w-full h-1/2 bg-white backdrop-blur-sm bg-opacity-10'></div>
            </div>
            <h1 className='font-bold'>Untitled UI</h1>
        </div>
        <div>
            <ul className='flex gap-6 px-3'>
                <li className='cursor-pointer'>Home</li>
                <li className='flex gap-2 items-center cursor-pointer'>Products <IoChevronDown /></li>
                <li className='flex gap-2 items-center cursor-pointer'>Resources <IoChevronDown /></li>
                <li>Pricing</li>
            </ul>
        </div>
    </div>

    <div className='h-8 w-8 rounded-full items-center cursor-pointer'>
        <img src={avatar} alt='avatar' className='w-full h-full rounded-full'/>
    </div>
</div>
    
 

        </>
    )


}




const NavSm = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);

    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className='flex justify-between items-center px-7 py-4 w-full'>
                <div className='flex gap-7'>
                    <div className='flex items-center gap-2'>
                        <div className='shadow-sm rounded-md p-1 relative overflow-hidden'>
                            <div className='bg-navPurple w-4 h-4 rounded-full'></div>
                            <div className='absolute bottom-0 left-0 w-full h-1/2 bg-white backdrop-blur-sm bg-opacity-10'></div>
                        </div>
                        <h1 className='font-bold'>Untitled UI</h1>
                    </div>

                </div>

                <div className=' flex h-8 w-8 items-center justify-center cursor-pointer' onClick={toggleMenu}>
                    <GiHamburgerMenu className='h-full w-full' />
                </div>
            </div>

            {menuOpen && (
                <div className="w-full">
                    <ul className="text-gray-800 font-semibold w-full bg-white p-4 border-2 rounded-lg shadow-md">
                        <li className=' cursor-pointer border-b border-gray-200 hover:bg-headerBg'>Home</li>
                        <li className='flex gap-2 items-center cursor-pointer border-b border-gray-200  hover:bg-headerBg'>Products <MdChevronRight /></li>
                        <li className='flex gap-2 items-center cursor-pointer border-b border-gray-200  hover:bg-headerBg'>Resources <MdChevronRight /></li>
                        <li className='cursor-pointer  hover:bg-headerBg'>Pricing</li>
                    </ul>
                </div>
            )}
        </>
    );
}





const NavBar = () => {
    return(
        <>

                <div className="md:hidden">{
                    <NavSm/>
                }</div>

                <div className="hidden lg:hidden md:flex">{
                    <NavMd/>
                }</div>

                <div className="hidden lg:flex">{
                    <NavLg/>
                }</div>
            
        </>
    )

};
export default NavBar