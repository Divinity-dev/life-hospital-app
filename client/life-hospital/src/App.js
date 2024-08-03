import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store.js';
import Booking from './pages/Booking.jsx';
import Blogposts from './pages/Blogposts.jsx';
import Blog from './pages/Blog.jsx';
import  About from "./pages/About.jsx"
import Dashboard from './pages/Dashboard.jsx';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isregisterPage = location.pathname === '/register';

  return (
    
    <div className="">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
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
      </Routes>
      {!isLoginPage && !isregisterPage && <Footer />}
      </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
