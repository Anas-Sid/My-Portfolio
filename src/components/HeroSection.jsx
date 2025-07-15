import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/Profile.jpg'; // Replace with your image

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center ">
      {/* Split Background with Angle */}
      <div className="absolute inset-0 flex z-0">
        <div className="w-1/2 bg-[#f1f1f1]"></div>
        <div className="w-1/2 bg-[#1a1a1a] clip-diagonal-right"></div>
      </div>

      {/* Top Glow Line */}
      

      {/* Hero Content */}
      <div className="relative z-20 flex w-full px-6 md:px-16 justify-between items-center flex-col md:flex-row">
        {/* Left Side */}
        <div className="text-left md:w-1/2 text-black ml-[50px] -mt-[130px]">
          <h3 className="text-lg text-gray-700">Hi, I am</h3>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Anas Siddiqui</h1>
          <p className="text-gray-600 text-xl mb-6">Full Stack Developer</p>
          <div className="flex gap-4">
            <a href="https://github.com/Anas-Sid" target="_blank" ><FaGithub size={24} className="text-gray-700 hover:text-black" /></a>
            <a href="https://www.linkedin.com/in/anssiddiqui/" target="_blank" ><FaLinkedin size={24} className="text-gray-700 hover:text-black" /></a>
             <div className="ml-4">
             <a  href="/assets/resume.pdf" 
             target="_blank"  className="bg-black text-white px-8 py-1.5 rounded-lg font-semibold hover:bg-gray-900  transition-all">
              Resume
             </a>
             </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
         <Link to="/LPortfolio">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-auto object-cover rounded-lg z-20 mt-[80px] ml-12"
          />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
