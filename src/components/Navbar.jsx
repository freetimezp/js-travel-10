import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { FaBars, FaPhone, FaCaravan } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="sticky top-0 z-50 bg-[#69a6db]/50 md:bg-[url('/assets/bg-nav.jpg')]/99 bg-no-repeat 
            lg:bg-cover overflow-hidden shadow-md ">
            <div className="container mx-auto flex flex-wrap items-center justify-between 
                px-6">
                <div className="w-full sticky top-0 flex justify-between lg:w-auto lg:static 
                    lg:justify-start h-[10vh] items-center">
                    <a href="/" onClick={() => navigate("/")} className="flex items-center
                        font-medium tracking-wider transition-colors text-xl text-[#25646f]">
                        <img src="/assets/logo.png" alt="logo" className="w-20" /> Travel
                    </a>
                    <div className="flex items-center">
                        <button
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className="cursor-pointer text-xl leading-none px-3 py-1 h-[3rem] 
                            block lg:hidden outline-none focus:outline-none"
                        >
                            {navbarOpen ? <AiOutlineClose /> : <FaBars />}
                        </button>
                    </div>
                </div>

                <div className={`lg:flex flex-grow items-center lg:h-auto h-screen justify-center 
                    ${navbarOpen ? 'flex' : 'hidden'}`}>
                    <ul className="flex flex-col lg:flex-row items-center gap-x-4 list-none 
                        lg:ml-auto lg:transform-none lg:translate-y-[-50%] gap-y-8 lg:gap-y-0">
                        <li className="py-2 flex text-[#337986] uppercase font-medium items-center 
                            leading-snug hover:text-[#283661] transition-all duration-300 
                            cursor-pointer text-lg hover:-translate-y-1">
                            <NavLink to='/'>
                                Trips
                            </NavLink>
                        </li>
                        <li className="py-2 flex text-[#337986] uppercase font-medium items-center 
                            leading-snug hover:text-[#283661] transition-all duration-300 
                            cursor-pointer text-lg hover:-translate-y-1">
                            <NavLink to='/'>
                                Recommended Island
                            </NavLink>
                        </li>
                        <li className="py-2 flex text-[#337986] uppercase font-medium items-center 
                            leading-snug hover:text-[#283661] transition-all duration-300 
                            cursor-pointer text-lg hover:-translate-y-1">
                            <NavLink to='/'>
                                Transport
                            </NavLink>
                        </li>
                        <li className="py-2 flex text-[#337986] uppercase font-medium items-center 
                            leading-snug hover:text-[#283661] transition-all duration-300 
                            cursor-pointer text-lg hover:-translate-y-1">
                            <NavLink to='/'>
                                Boat Charterd
                            </NavLink>
                        </li>
                        <li className="py-2 flex text-[#337986] uppercase font-medium items-center 
                            leading-snug hover:text-[#283661] transition-all duration-300 
                            cursor-pointer text-lg hover:-translate-y-1">
                            <NavLink to='/'>
                                Boat Time Table
                            </NavLink>
                        </li>
                        <li className="py-2 flex text-[#18434a] uppercase font-medium items-center 
                            leading-snug hover:text-[#fff] transition-all duration-300 
                            cursor-pointer text-lg">
                            <button className="bg-[#3d828d] rounded-full px-4 py-2 hoverBtn gap-2 
                                items-center flex">
                                <FaPhone className="rotate-90" />

                                <p>
                                    +123 456 7890
                                </p>
                            </button>
                        </li>
                        <li className="py-2 flex text-white uppercase font-medium items-center 
                            leading-snug cursor-pointer">
                            <FaCaravan className="fill-[#ddff00] text-2xl mr-2" />
                            <span className="text-[#2966ff]">UA</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
