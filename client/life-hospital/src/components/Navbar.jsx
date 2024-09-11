import React, { useState } from 'react';
import { Menu, Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {logout} from "../redux/userSlice"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const currentUser = useSelector(state => state.user.currentUser);
  const id = currentUser?.user._id
  const login = currentUser?.user || null; 
  const Admin = login?.isAdmin || false;    
  const bookings = useSelector(state => state.booking.Appointment);
  bookings.filter((book)=>book.UserID ===id)
  const booking = login? bookings:0
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = ()=>{
  dispatch(logout())
  try {
    navigate("/");
  } catch (error) {
    console.error("Navigation error:", error);
  }
  setToggle(false)
  }

  return (
    <div className='sticky top-0 z-50 h-24'>
      <div className='flex justify-between p-4 bg-green-800 text-white '>
        <h2 className='italic text-center font-bold text-2xl w-30'>Life Hospital</h2>
        <nav className='flex items-center'>
          {/* Desktop Menu */}
          <ul className='hidden md:flex justify-between space-x-4'>
            <Link to={'./'}>
            <li>Home</li>
            </Link>
            {Admin && <Link to={'/postupdate'}>
            <li>Admin</li>
            </Link>}
            <Link to={'/about'}>
            <li>Services</li>
            </Link>
            <Link to={'/about'}>
            <li>Contact Us</li>
            </Link>
           <Link to={'/blogposts'}>
            <li>Blog</li>
            </Link>
            <Link to={'./dashboard'}>
            <li className='relative'>Bookings<span className="ml-1 absolute bg-red-600 top-0 -right-2 text-10 border-1 rounded-full h-3 w-3 flex justify-center items-center ">{booking?.length}</span></li>
            </Link>
            
           {login? <li onClick={()=>{logOut()}} className='cursor-pointer'>signout</li> :<Link to={'./login'}> <li>login</li></Link>}
            
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
            {Admin && (<Link to={'/postupdate'}>
            <li onClick={() => setToggle(false)} >Admin</li>
            </Link>)}
            <Link to={'/about'}>
            <li onClick={() => setToggle(false)}>Services</li>
            </Link>
            <Link>
            <li onClick={() => setToggle(false)}>Contact Us</li>
            </Link>
            <Link to={'/blogposts'}>
            <li onClick={() => setToggle(false)}>Blog</li>
            </Link>
            <Link to={'./dashboard'}>
            <li onClick={() => setToggle(false)}>Bookings<span className="ml-1">{booking.length}</span></li>
            </Link>
            <Link to={'./login'}>
            <li onClick={logOut } >{login? "signout":"Login/register"}</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
