import React, { useState, useEffect } from 'react';
import model from '../assets/model.jpg';
import ad from '../assets/ad.jpg';
import s from '../assets/s.jpg';
// ... (other imports and code)

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  useEffect(() => {
    // Automatically slide to the next image every 4 seconds
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [activeIndex]); // Re-run effect when activeIndex changes

  return (
    <div id="hero" className="carousel slide rounded overflow-hidden" data-ride="carousel">
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
          <img src={model} className="d-block w-100 rounded" alt="Banner 1" />
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
          <img src={ad} className="d-block w-100 rounded" alt="Banner 2" />
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
          <img src={s} className="d-block w-100 rounded" alt="Banner 3" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
