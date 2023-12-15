import React, { createContext, useContext, useState } from 'react';

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState({
    frontend: [
      {
        title: 'BCA 1st Sem ',
        projectLink: "/i",
        technologies: 'BCA, 1st, Notes',
        description: "Comprehensive collection of BCA 1st semester notes covering subjects such as Computer Fundamentals & Applications, Society and Technology, Mathematics I, English I, and Digital Logic providing essential study material for TU BCA program"
      },
      {
        title: 'BCA 2nd Sem ',
        projectLink: "/ii",
        technologies: 'BCA, 2nd, Notes',
        description: "Comprehensive BCA 2nd semester notes covering subjects like Financial Accounting, C Programming,English II, and Mathematics II, providing essential study material for TU BCA students in Nepal."
      },
      {
        title: 'Old Questions ',
        projectLink: "/question-papers",
        technologies: 'BCA, Qn, Old Questions',
        description: "Boost your BCA studies with comprehensive Question Papers covering All semester Old question papers tailored for TU BCA students in Nepal to excel in academic performance."
      },
      {
        title: 'BCA 3rd Sem ',
        projectLink: "/iii",
        technologies: 'BCA, 3rd, Notes',
        description: "Elevate your BCA 3rd semester studies with meticulously crafted notes covering Java Programming, Data Structures, and System Analysis, designed for TU BCA students in Nepal for enhanced academic performance."
      },
     
      {
        title: 'BCA 4th Sem ',
        projectLink: "/iv",
        technologies: 'BCA, 3rd, Notes',
        description: "Boost your BCA 4th semester studies with comprehensive notes covering Operating Systems, Database Management Systems, and Software Engineering, tailored for TU BCA students in Nepal to excel in academic performance."
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
