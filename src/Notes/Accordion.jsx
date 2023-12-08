// Accordion.jsx
import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="accordion" style={{ marginTop: "10px" }}>
        <div className="accordion-header" onClick={toggleAccordion}>
          <h5>{title}</h5>
          <span>{isOpen ? '-' : '+'}</span>
        </div>
        {isOpen && <div className="accordion-content">{children}</div>}
        
      </div>
      
    </div>
  );
};

export default Accordion;
