// SemesterCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import NotesPage from './NotePage';

const SemesterCard = ({ semesterNumber, link, description }) => {
  return (
    <div className="semester-card">
      <h3>Semester {semesterNumber}</h3>
      <p>{description}</p>
      <Link to={link}>
        Visit
      </Link>
    </div>
  );
};

export default SemesterCard;
