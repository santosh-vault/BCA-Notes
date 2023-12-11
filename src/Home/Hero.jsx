import React, { useState, useEffect } from 'react';
import model from '../assets/model.jpg';
import ad from '../assets/ad.jpg';
import s from '../assets/s.jpg';
import 'animate.css/animate.min.css'; 

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div id="hero" className="carousel slide rounded overflow-hidden" data-ride="carousel">
      <div className="carousel-inner">
        <div className={`carousel-item animate__animated ${activeIndex === 0 ? 'active' : 'next'} animate__fadeInLeft`}>
          <img src={model} className="d-block w-100 rounded" alt="Banner 1" />
        </div>

        <div className={`carousel-item animate__animated ${activeIndex === 1 ? 'active' : 'next'} animate__fadeInLeft`}>
          <img src={ad} className="d-block w-100 rounded" alt="Banner 2" />
        </div>

        <div className={`carousel-item animate__animated ${activeIndex === 2 ? 'active' : 'next'} animate__fadeInLeft`}>
          <img src={s} className="d-block w-100 rounded" alt="Banner 3" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
