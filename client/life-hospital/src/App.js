import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Services from './components/Services';

function App() {
  return (
    <div className="">
     <Navbar/>
     <Landing/>
     <Services/>
     <Footer/>
     
    </div>
  );
}

export default App;
