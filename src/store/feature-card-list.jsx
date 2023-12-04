import React, { createContext, useContext, useState } from 'react';

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState({
    frontend: [
        {
          title: 'E-commerce website',
          description: 'E-commerce website, fetches product details from API',
          technologies: 'React, CSS, JavaScript',
          imageUrl: 'https://repository-images.githubusercontent.com/289382429/e9c6ec80-8902-11eb-9f55-5de819da8bf5',
          projectLink: 'https://github.com/Santosh079/daraz-clone',
        },
        {
          title: 'Basic Social Media',
          description: 'Provides uploading and displaying posts.',
          technologies: 'React, CSS, JavaScript',
          imageUrl: "",
          projectLink: 'https://example.com/frontend-project1',
        },
        {
          title: 'Portfolio',
          description: 'My personal portfolio made to show project',
          technologies: 'React, CSS, JavaScript',
          imageUrl: "",
          projectLink: 'https://github.com/Santosh079/Portfolio',
        },
        {
          title: 'Nepali Clock',
          description: 'Nepali Clock that displays time every second',
          technologies: 'React, CSS, JavaScript',
          imageUrl: "",
          projectLink: 'https://example.com/frontend-project2',
        },
      ],
  });

  const [activeCard, setActiveCard] = useState(0);

  const contextValue = {
    projects,
    setProjects,
    activeCard,
    setActiveCard,
  };

  return (
    <ProjectContext.Provider value={contextValue}>{children}</ProjectContext.Provider>
  );
};

const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
};

export { ProjectProvider, useProjectContext };
