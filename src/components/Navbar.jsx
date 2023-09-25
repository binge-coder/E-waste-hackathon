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
    <div className='bg-primary'>
        <div className='mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-20'>
                <div className='flex items-center'>
                    <Link to="/" className='text-white'>
                        logo placeholder
                    </Link>
                </div>
                {/* navlinks */}
                <div className='hidden md:block'>
                    <div className='ml-10 flex items-baseline space-x-4'>
                        {navlinks.map((myLink,index) => (
                            <Link key={index} className='text-stroke-light transition-all duration-500 border-b-4 ring-1 ring-secondary hover:border-0 hover:bg-secondary hover:text-stroke-dark px-3 py-2 rounded-md text-md font-medium' to={myLink.link}>{myLink.title}</Link>
                        )
                        )}
                    </div>
                </div>
                {/* hamburger button */}
                <div className='-mr-2 flex md:hidden'>
                {/*     <button type='button' onClick={handleMenu} className='inline-flex items-center justify-center p-2 rounded-md ring-1 ring-secondary text-secondary hover:text-stroke-dark hover:bg-secondary'>
                        <span className='sr-only'>Open main menu</span>
                        {open == true ? <FaTimes className='w-8 h-8'/> : <FaBars className='w-8 h-8'/>}
                    </button>
                </div> */}
                    
                   
                    <button
  className={`relative group ${open ? 'open' : ''} md:hidden `}
  type="button"
  onClick={handleMenu}
>
  <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-secondary ring-0 ring-secondary hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
    <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
      <div className={`bg-primary h-[2px] w-7 transform transition-all duration-300 origin-left ${open ? 'group-focus:translate-x-10' : ''}`}></div>
      <div className={`bg-primary h-[0.5px] w-5 rounded transform transition-all duration-300 ${open ? 'group-focus:translate-x-10 delay-75' : ''}`}></div>
      <div className={`bg-primary h-[2px] w-7 transform transition-all duration-300 origin-left ${open ? 'group-focus:translate-x-10 delay-150' : ''}`}></div>

      <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 ${open ? '-translate-x-10 group-focus:translate-x-0 flex w-12' : ''}`}>
        <div className={`absolute bg-primary h-[2px] w-5 transform transition-all duration-500 ${open ? 'rotate-45 delay-300 group-focus:rotate-45' : 'rotate-0'}`}></div>
        <div className={`absolute bg-primary h-[2px] w-5 transform transition-all duration-500 ${open ? '-rotate-45 delay-300 group-focus:-rotate-45' : 'rotate-0'}`}></div>
      </div>
    </div>
  </div>
</button>


    </div>
            </div>
        </div>
        {/* mobile menu */}
        {open ? (
            <div className='md:hidden'>
                <div className='px-2 py-4 space-y-1 sm:px-3'>
                {navlinks.map((myLink,index) => (
                            <Link key={index} className='block  text-stroke-light hover:bg-secondary hover:text-stroke-dark text-center py-5 rounded-md text-base font-medium' onClick={handleMenu} to={myLink.link}>{myLink.title}</Link>
                        )
                        )}
                </div>
            </div>
        ) : null }
    </div>
  )
}

export default Navbar