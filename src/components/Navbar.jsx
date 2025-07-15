import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#contact') {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <nav className="w-full absolute top-0 z-50 px-3 py-12 md:py-4  bg-white md:bg-transparent">
      {/* Flex container for all sizes */}
      <div className="flex items-center justify-between md:justify-between relative">
        {/* Desktop Logo */}
        <div className="hidden md:block w-32">
          <img
            src={logo}
            alt="Logo"
            className="w-[50px] h-[50px] object-contain ml-6 bg-transparent"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 font-medium ml-[123px]">
          <Link to="about" smooth={true} duration={500} offset={-70} className="text-black hover:text-gray-300 cursor-pointer">
            About Me
          </Link>
          <Link to="skills" smooth={true} duration={500} offset={-70} className="text-black hover:text-gray-300 cursor-pointer">
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} offset={-70} className="text-white hover:text-gray-300 cursor-pointer">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-70} className="text-white hover:text-gray-300 cursor-pointer">
            Contact
          </Link>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all"
          >
            Contact Me
          </Link>
        </div>

        {/* MOBILE: Full-width center logo */}
        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 p-4">
          <img
            src={logo}
            alt="Logo"
            className="w-[50px] h-[50px] object-contain bg-transparent"
          />
        </div>

        {/* MOBILE: Hamburger Menu Button */}
        <div className="md:hidden absolute right-4 p-4">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX className="text-3xl text-black" /> : <HiMenuAlt3 className="text-3xl text-black" />}
          </button>
        </div>
      </div>

      {/* MOBILE: Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md rounded-md py-4 px-6 z-50">
          <div className="flex flex-col gap-4 text-center font-medium">
            <Link onClick={() => setMenuOpen(false)} to="about" smooth={true} duration={500} offset={-70} className="text-black hover:text-gray-400">
              About Me
            </Link>
            <Link onClick={() => setMenuOpen(false)} to="skills" smooth={true} duration={500} offset={-70} className="text-black hover:text-gray-400">
              Skills
            </Link>
            <Link onClick={() => setMenuOpen(false)} to="projects" smooth={true} duration={500} offset={-70} className="text-black hover:text-gray-400">
              Projects
            </Link>
            <Link onClick={() => setMenuOpen(false)} to="contact" smooth={true} duration={500} offset={-70} className="text-black hover:text-gray-400">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
