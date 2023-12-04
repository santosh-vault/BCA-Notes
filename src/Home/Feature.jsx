import React, { useRef, useState, useEffect } from 'react';
import NoteCard from './NoteCard';
import { FaCaretSquareLeft, FaCaretSquareRight } from "react-icons/fa";
import { useProjectContext } from '../store/feature-card-list';


const Feature = () => {
  const { projects, activeCard, setActiveCard } = useProjectContext();


  const projectContainerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const container = projectContainerRef.current;

    const handleScroll = () => {
      setIsAtStart(container.scrollLeft === 0);
      setIsAtEnd(container.scrollLeft + container.clientWidth === container.scrollWidth);
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (projectContainerRef.current) {
      projectContainerRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (projectContainerRef.current) {
      projectContainerRef.current.scrollLeft += 300;
    }
  };

  return (
    
    <div className="project-container">
      <h1>Feature Notes</h1>
      <hr />
   
      <button className="nav-button left-button" onClick={scrollLeft} disabled={isAtStart}>
      <FaCaretSquareLeft />
      </button>
      <div className="project-cards" ref={projectContainerRef}>
        {projects.frontend.map((project, index) => (
          <NoteCard key={index} {...project} />
        ))}
      </div>
     
      <button className="nav-button right-button" onClick={scrollRight} disabled={isAtEnd}>
      <FaCaretSquareRight />
      </button>
    </div>
  );
};

export default Feature;