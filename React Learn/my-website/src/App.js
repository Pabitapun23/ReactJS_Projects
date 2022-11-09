import React from 'react';
import About from './Components/About';
import Footer from './Components/Footer';
import MainBannar from './Components/MainBannar';
import Navbar from './Components/Navbar';
import './style.css';

const App = () => {
  return (
    <div>
        <Navbar />
        <MainBannar />
        <About />
        <Footer />
    </div>
  )
}

export default App