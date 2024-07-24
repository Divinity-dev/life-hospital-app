import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div className="">
     <Navbar/>
    <Home/>
     <Footer/>
     
    </div>
  );
}

export default App;
