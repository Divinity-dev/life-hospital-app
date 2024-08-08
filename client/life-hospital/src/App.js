import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {  useSelector } from 'react-redux';
import Booking from './pages/Booking.jsx';
import Blogposts from './pages/Blogposts.jsx';
import Blog from './pages/Blog.jsx';
import  About from "./pages/About.jsx"
import Dashboard from './pages/Dashboard.jsx';
import Postupdate from './pages/Postupdate.jsx';
import Users from './pages/Users.jsx';
import Postlist from './pages/Postlist.jsx';
import Editpost from './pages/Editpost.jsx';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isregisterPage = location.pathname === '/register';
  const currentUser = useSelector(state => state.user.currentUser);
  const Admin = currentUser?.user?.isAdmin || false;
  
  
  

  return (
    
    <div className="">
      
      {!isLoginPage && !isregisterPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={< Booking/>}/>
        <Route path="/blogposts" element={< Blogposts/>}/>
        <Route path="/blogpost/:ID" element={< Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        {Admin && <Route path="/postupdate" element={<Postupdate/>}/>}
        {Admin && <Route path="/users" element={<Users/>}/>}
        {Admin && <Route path="/postlist" element={<Postlist/>}/>}
        {Admin && <Route path="/editpost/:id" element={<Editpost/>}/>}
      </Routes>
      {!isLoginPage && !isregisterPage && <Footer />}
      
    </div>
  );
}

export default App;
