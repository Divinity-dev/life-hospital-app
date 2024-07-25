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
import { store, persistor } from './store';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/Login';
  const isregisterPage = location.pathname === '/Register';

  return (
    
    <div className="">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
      {!isLoginPage && isregisterPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!isLoginPage && isregisterPage && <Footer />}
      </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
