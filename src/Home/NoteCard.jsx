import React from 'react';

const NoteCard = ({ title, description, technologies, imageUrl, projectLink }) => {
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
            Open Link
          </button>
        </a>
      </div>
    </div>
  );
}

export default NoteCard;
