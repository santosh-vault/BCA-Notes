import React from 'react';
import { Link } from 'react-router-dom';
import NotesPage from '../Notes/NotePage';

const NoteCard = ({ title, description, technologies, projectLink }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-technologies">{technologies}</p>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <button
            className="btn"
            style={{ marginTop: '10px', backgroundColor: '#000', color:'wheat', borderRadius:'4px'  }}
          >
           Visit
          </button>
        </a>
      </div>
    </div>
  );
}

export default NoteCard;
