import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/Login';
  const isregisterPage = location.pathname === '/Register';

  return (
    <div className="">
      {!isLoginPage && isregisterPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!isLoginPage && isregisterPage && <Footer />}
    </div>
  );
}

export default App;
