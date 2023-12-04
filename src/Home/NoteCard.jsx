import React from 'react';


const NoteCard = ({ title, description, technologies, imageUrl, projectLink }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-technologies">{technologies}</p>

      
         
      </div>
    </div>
  );
}

export default NoteCard;