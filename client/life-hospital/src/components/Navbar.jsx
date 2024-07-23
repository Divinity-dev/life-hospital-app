import React, { useState } from 'react';
import { Menu, Close } from '@mui/icons-material';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className='flex justify-between p-4 bg-black text-white sticky top-0 z-50'>
        <h2>Logo</h2>
        <nav className='flex items-center'>
          {/* Desktop Menu */}
          <ul className='hidden md:flex justify-between space-x-4'>
            <li>Home</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Bookings<span className="ml-1">(1)</span></li>
            <li>Login</li>
          </ul>
          {/* Mobile Menu Toggle */}
          <div className='md:hidden'>
            {toggle ? (
              <Close onClick={() => setToggle(false)} className="cursor-pointer" />
            ) : (
              <Menu onClick={() => setToggle(true)} className="cursor-pointer" />
            )}
          </div>
        </nav>
      </div>
      {/* Mobile Menu */}
      {toggle && (
        <div className='md:hidden bg-black text-white'>
          <ul className='flex flex-col space-y-2 p-4'>
            <li onClick={() => setToggle(false)}>Home</li>
            <li onClick={() => setToggle(false)}>Services</li>
            <li onClick={() => setToggle(false)}>Contact Us</li>
            <li onClick={() => setToggle(false)}>Blog</li>
            <li onClick={() => setToggle(false)}>Bookings<span className="ml-1">(1)</span></li>
            <li onClick={() => setToggle(false)}>Login</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
