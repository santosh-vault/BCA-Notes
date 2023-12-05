import React, { createContext, useContext } from 'react';


const SyllabusContext = createContext();


export const SyllabusProvider = ({ children }) => {
 
    const syllabusData = [
        {
          semesterNumber: 1,
          courses: [
            { courseCode: 'CACS101', courseTitle: 'Computer Fundamentals & Applications', creditHours: 4 },
            { courseCode: 'CACO102', courseTitle: 'Society and Technology', creditHours: 3 },
            { courseCode: 'CAEN103', courseTitle: 'English I', creditHours: 3 },
            { courseCode: 'CAMT104', courseTitle: 'Mathematics I', creditHours: 3 },
            { courseCode: 'CACS105', courseTitle: 'Digital Logic', creditHours: 3 },
          ],
        },
        {
          semesterNumber: 2,
          courses: [
            { courseCode: 'CACS151', courseTitle: 'C Programming', creditHours: 4 },
            { courseCode: 'CAAC152', courseTitle: 'Financial Accounting', creditHours: 3 },
            { courseCode: 'CAEN153', courseTitle: 'English II', creditHours: 3 },
            { courseCode: 'CAMT154', courseTitle: 'Mathematics II', creditHours: 3 },
            { courseCode: 'CACS155', courseTitle: 'Microprocessor and Computer Architecture', creditHours: 3 },
          ],
        },
        {
          semesterNumber: 3,
          courses: [
            { courseCode: 'CACS201', courseTitle: 'Data Structures and Algorithms', creditHours: 3 },
            { courseCode: 'CAST202', courseTitle: 'Probability and Statistics', creditHours: 3 },
            { courseCode: 'CACS203', courseTitle: 'System Analysis and Design', creditHours: 3 },
            { courseCode: 'CACS204', courseTitle: 'OOP in Java', creditHours: 3 },
            { courseCode: 'CACS205', courseTitle: 'Web Technology', creditHours: 3 },
          ],
        },
        {
          semesterNumber: 4,
          courses: [
            { courseCode: 'CACS251', courseTitle: 'Operating System', creditHours: 3 },
            { courseCode: 'CACS252', courseTitle: 'Numerical Methods', creditHours: 3 },
            { courseCode: 'CACS253', courseTitle: 'Software Engineering', creditHours: 3 },
            { courseCode: 'CACS254', courseTitle: 'Scripting Language', creditHours: 3 },
            { courseCode: 'CACS255', courseTitle: 'Database Management System', creditHours: 3 },
            { courseCode: 'CAPJ256', courseTitle: 'Project I', creditHours: 2 },
          ],
        },
        {
          semesterNumber: 5,
          courses: [
            { courseCode: 'CACS301', courseTitle: 'MIS and E-Business', creditHours: 3 },
            { courseCode: 'CACS302', courseTitle: 'DotNet Technology', creditHours: 3 },
            { courseCode: 'CACS303', courseTitle: 'Computer Networking', creditHours: 3 },
            { courseCode: 'CAMG304', courseTitle: 'Introduction to Management', creditHours: 3 },
            { courseCode: 'CACS305', courseTitle: 'Computer Graphics and Animation', creditHours: 3 },
          ],
        },
        {
          semesterNumber: 6,
          courses: [
            { courseCode: 'CACS351', courseTitle: 'Mobile Programming', creditHours: 3 },
            { courseCode: 'CACS352', courseTitle: 'Distributed System', creditHours: 3 },
            { courseCode: 'CAEC353', courseTitle: 'Applied Economics', creditHours: 3 },
            { courseCode: 'CACS354', courseTitle: 'Advanced Java Programming', creditHours: 3 },
            { courseCode: 'CACS355', courseTitle: 'Network Programming', creditHours: 3 },
            { courseCode: 'CAPJ356', courseTitle: 'Project II', creditHours: 2 },
          ],
        },
        {
          semesterNumber: 7,
          courses: [
            { courseCode: 'CACS401', courseTitle: 'Cyber Law and Professional Ethics', creditHours: 3 },
            { courseCode: 'CACS402', courseTitle: 'Cloud Computing', creditHours: 3 },
            { courseCode: 'CAIN403', courseTitle: 'Internship', creditHours: 3 },
           
          ],
        },
        {
          semesterNumber: 8,
          courses: [
            { courseCode: 'CAOR451', courseTitle: 'Operations Research', creditHours: 3 },
            { courseCode: 'CAPJ452', courseTitle: 'Project III', creditHours: 6 },
          
          ],
        },
      ];
      

  return (
    <SyllabusContext.Provider value={syllabusData}>
      {children}
    </SyllabusContext.Provider>
  );
};


export const useSyllabus = () => {
  const context = useContext(SyllabusContext);

  if (!context) {
    throw new Error('useSyllabus must be used within a SyllabusProvider');
  }

  return context;
};
