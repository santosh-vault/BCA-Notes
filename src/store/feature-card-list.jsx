import React, { createContext, useContext, useState } from 'react';

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState({
    frontend: [
        {
          title: 'BCA 1st Sem',
          description: "Comprehensive collection of BCA 1st semester notes covering subjects such as Computer Fundamentals & Applications, Society and Technology, Mathematics I, English I, and Digital Logic providing essential study material for TU BCA program",
          technologies: 'BCA, 1st, Notes',
          imageUrl: 'https://repository-images.githubusercontent.com/289382429/e9c6ec80-8902-11eb-9f55-5de819da8bf5',
          projectLink: 'https://drive.google.com/drive/u/2/folders/1SMC2OwDkcHq71sD0bXn5rdYNWFORLu2W',
        },
        {
          title: 'BCA 1st Sem Old Questions',
          description: 'BCA 1st semester preparation with essential old question papers, aiding in effective exam revision and mastery of key subjects. Access and download the BCA 1st sem old questions for a successful academic performance.',
          technologies: 'BCA, 1st, Question Paper',
          imageUrl: "",
          projectLink: 'https://example.com/frontend-project1',
        },
        {
          title: 'BCA 2nd Sem',
          description: "Comprehensive collection of BCA 1st semester notes covering subjects such as Computer Fundamentals & Applications, Society and Technology, Mathematics I, English I, and Digital Logic providing essential study material for TU BCA program",
          technologies: 'BCA, 2nd, Notes',
          imageUrl: 'https://repository-images.githubusercontent.com/289382429/e9c6ec80-8902-11eb-9f55-5de819da8bf5',
          projectLink: 'https://drive.google.com/drive/u/2/folders/1SMC2OwDkcHq71sD0bXn5rdYNWFORLu2W',
        },
        {
          title: 'BCA2nd Sem Old Questions',
          description: 'BCA 2nd semester preparation with essential old question papers, aiding in effective exam revision and mastery of key subjects. Access and download the BCA 1st sem old questions for a successful academic performance.',
          technologies: 'BCA, 2nd, Question Paper',
          imageUrl: "",
          projectLink: 'https://example.com/frontend-project1',
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
