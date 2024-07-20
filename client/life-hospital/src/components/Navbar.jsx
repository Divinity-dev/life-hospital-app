import React, { useState } from 'react';
import { Menu, Close } from '@mui/icons-material'; // Import Close from @mui/icons-material
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();
  const isSmallOrMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className='flex justify-between p-4 bg-black text-white sticky'>
        <h2>Logo</h2>
        <nav className='flex items-center'>
          <ul className='hidden md:flex justify-between space-x-4'>
            <li>Home</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Book an Appointment</li>
            <li>Login</li>
          </ul>
          {isSmallOrMedium && (
            toggle ? (
              <Close onClick={() => setToggle(false)} />
            ) : (
              <Menu onClick={() => setToggle(true)} />
            )
          )}
        </nav>
      </div>
      {toggle && (
        <div className='md:hidden bg-black text-white'>
          <ul className='flex flex-col space-y-2 p-4'>
            <li>Home</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Book an Appointment</li>
            <li>Login</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
