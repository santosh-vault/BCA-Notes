import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Home/Header';
import Navbar from './Home/Navbar';
import HeroSection from './Home/Hero';
import Feature from './Home/Feature';
import Footer from './Home/Footer';

const App = () => {
  return (
    <>
    
      <Header />
      <Navbar />
      <HeroSection />
      <Feature />
      <Footer />
    </>
  )
}

export default App
