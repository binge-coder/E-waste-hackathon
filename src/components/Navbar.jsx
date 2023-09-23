import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars , FaTimes } from "react-icons/fa"

const navlinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Locate",
        link: "/locate",
    },
    {
        title: "Credit Calculator",
        link: "/credit_calc",
    },
    {
        title: "About",
        link: "/about",
    },
]

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen((prev) => !prev);
    };
  return (
    <div className='bg-gray-800'>
        <div className='mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                    <a href="/" className='text-white'>
                        logo
                    </a>
                </div>
                {/* navlinks */}
                <div className='hidden md:block'>
                    <div className='ml-10 flex items-baseline space-x-4'>
                        {navlinks.map((myLink,index) => (
                            <Link key={index} className='text-gray-300 transition-all duration-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium' to={myLink.link}>{myLink.title}</Link>
                        )
                        )}
                    </div>
                </div>
                {/* hamburger button */}
                <div className='-mr-2 flex md:hidden'>
                    <button type='button' onClick={handleMenu} className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                        <span className='sr-only'>Open main menu</span>
                        {open == true ? <FaTimes className='w-8 h-8'/> : <FaBars className='w-8 h-8'/>}
                    </button>
                </div>
            </div>
        </div>
        {/* mobile menu */}
        {open ? (
            <div className='md:hidden'>
                <div className='px-2 py-4 space-y-1 sm:px-3'>
                {navlinks.map((myLink,index) => (
                            <Link key={index} className='block  text-gray-300 hover:bg-gray-700 hover:text-white text-center py-5 rounded-md text-base font-medium' to={myLink.link}>{myLink.title}</Link>
                        )
                        )}
                </div>
            </div>
        ) : null }
    </div>
  )
}

export default Navbar