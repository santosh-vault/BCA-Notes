// NotesPage.jsx
import React from 'react';
import Layout from '../Layout';
import SemesterCard from './SemesterCard';

const NotesPage = () => {
  const semesterData = [
    { semesterNumber: 1, link: "/i", description: "Comprehensive collection of BCA 1st semester notes covering subjects such as Computer Fundamentals & Applications, Society and Technology, Mathematics I, English I, and Digital Logic providing essential study material for TU BCA program" },
    { semesterNumber: 2, link: "/ii", description: "Comprehensive BCA 2nd semester notes covering subjects like Financial Accounting, C Programming,English II, and Mathematics II, providing essential study material for TU BCA students in Nepal." },
    { semesterNumber: 3, link: "/iii", description: "Elevate your BCA 3rd semester studies with meticulously crafted notes covering Java Programming, Data Structures, and System Analysis, designed for TU BCA students in Nepal for enhanced academic performance." },
    { semesterNumber: 4, link: "/", description: "Boost your BCA 4th semester studies with comprehensive notes covering Operating Systems, Database Management Systems, and Software Engineering, tailored for TU BCA students in Nepal to excel in academic performance." },
    { semesterNumber: 5, link: "/", description: "Elevate your BCA 5th semester learning experience with specialized notes encompassing subjects like Computer Networks, Web Development, and Artificial Intelligence, designed for TU BCA students in Nepal seeking academic excellence." },
    { semesterNumber: 6, link: "/", description: "Excel in your BCA 6th semester studies with comprehensive notes covering advanced topics like Software Engineering, Database Management Systems, and Mobile App Development, tailored for TU BCA students in Nepal aiming for academic success." },
    { semesterNumber: 7, link: "/", description: "Unlock success in your BCA 7th semester with specialized notes covering Artificial Intelligence, Cloud Computing, and Advanced Web Technologies, designed for TU BCA students in Nepal to excel in their studies.Cyber Law, Cloud Computing, and Internship" },
    { semesterNumber: 8, link: "/", description: "Achieve excellence in your BCA 8th semester with comprehensive notes focusing on Advanced Database Management Systems, Mobile Application Development, and Information Security to ensure a successful academic journey at TU in Nepal. Operations Research and Final Project" },
  ];

  return (
    <Layout>
    <div className="container">
      <div className="semester-cards-container">
        {semesterData.map((semester, index) => (
          <SemesterCard
            key={index}
            semesterNumber={semester.semesterNumber}
            link={semester.link}
            description={semester.description}
          />
        ))}
      </div>
    </div>
  </Layout>
  );
};

export default NotesPage;
