import React, { useState } from 'react';
import { Menu, Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const login = true;

  return (
    <div className='sticky top-0 z-50 h-16'>
      <div className='flex justify-between p-4 bg-green-800 text-white '>
        <h2>Logo</h2>
        <nav className='flex items-center'>
          {/* Desktop Menu */}
          <ul className='hidden md:flex justify-between space-x-4'>
            <Link to={'./'}>
            <li>Home</li>
            </Link>
            <Link to={'/about'}>
            <li>Services</li>
            </Link>
            <Link>
            <li>Contact Us</li>
            </Link>
           <Link to={'/blogposts'}>
            <li>Blog</li>
            </Link>
            <Link to={'./booking'}>
            <li className='relative'>Bookings<span className="ml-1 absolute bg-red-600 top-0 -right-2 text-10 border-1 rounded-full h-3 w-3 flex justify-center items-center ">1</span></li>
            </Link>
            <Link to={'./login'}>
            <li>{login? "signout":"Login/register"}</li>
            </Link>
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
            <Link to={'./'}>
            <li onClick={() => setToggle(false)}>Home</li>
            </Link>
            <Link to={'/about'}>
            <li onClick={() => setToggle(false)}>Services</li>
            </Link>
            <Link>
            <li onClick={() => setToggle(false)}>Contact Us</li>
            </Link>
            <Link to={'/blogposts'}>
            <li onClick={() => setToggle(false)}>Blog</li>
            </Link>
            <Link to={'./booking'}>
            <li onClick={() => setToggle(false)}>Bookings<span className="ml-1">(1)</span></li>
            </Link>
            <Link to={'./login'}>
            <li onClick={() => setToggle(false)}>{login? "signout":"Login/register"}</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
