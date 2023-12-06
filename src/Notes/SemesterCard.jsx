// SemesterCard.jsx
import React from 'react';

const SemesterCard = ({ semesterNumber, link, description}) => {
  return (
    <div className="semester-card">
      <h3>Semester {semesterNumber}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Visit
      </a>
    </div>
  );
};

export default SemesterCard;
