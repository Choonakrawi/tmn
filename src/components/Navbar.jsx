import React from 'react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center bg-[rgba(57,57,57,0.2)] backdrop-blur-md rounded-xl p-4">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex items-center space-x-8">
            {/* <a href="#work" className="text-white hover:text-gray-300 transition-colors font-light">Work</a>
            <a href="#about" className="text-white hover:text-gray-300 transition-colors font-light">About</a>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors font-light">Contact</a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 