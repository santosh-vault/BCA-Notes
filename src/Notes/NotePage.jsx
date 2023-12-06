// NotesPage.jsx
import React from 'react';
import Layout from '../Layout';
import SemesterCard from './SemesterCard';

const NotesPage = () => {
  const semesterData = [
    { semesterNumber: 1, link: "https://drive.google.com/drive/u/2/folders/1SMC2OwDkcHq71sD0bXn5rdYNWFORLu2W", description: "Comprehensive collection of BCA 1st semester notes covering subjects such as Computer Fundamentals & Applications, Society and Technology, Mathematics I, English I, and Digital Logic providing essential study material for TU BCA program" },
    { semesterNumber: 2, link: "https://example.com/semester2", description: "Comprehensive BCA 2nd semester notes covering subjects like Financial Accounting, C Programming,English II, and Mathematics II, providing essential study material for TU BCA students in Nepal." },
    { semesterNumber: 3, link: "https://example.com/semester3", description: "Elevate your BCA 3rd semester studies with meticulously crafted notes covering Java Programming, Data Structures, and System Analysis, designed for TU BCA students in Nepal for enhanced academic performance." },
    { semesterNumber: 4, link: "https://example.com/semester4", description: "Boost your BCA 4th semester studies with comprehensive notes covering Operating Systems, Database Management Systems, and Software Engineering, tailored for TU BCA students in Nepal to excel in academic performance." },
    { semesterNumber: 5, link: "https://example.com/semester5", description: "Elevate your BCA 5th semester learning experience with specialized notes encompassing subjects like Computer Networks, Web Development, and Artificial Intelligence, designed for TU BCA students in Nepal seeking academic excellence." },
    { semesterNumber: 6, link: "https://example.com/semester6", description: "Excel in your BCA 6th semester studies with comprehensive notes covering advanced topics like Software Engineering, Database Management Systems, and Mobile App Development, tailored for TU BCA students in Nepal aiming for academic success." },
    { semesterNumber: 7, link: "https://example.com/semester7", description: "Unlock success in your BCA 7th semester with specialized notes covering Artificial Intelligence, Cloud Computing, and Advanced Web Technologies, designed for TU BCA students in Nepal to excel in their studies.Cyber Law, Cloud Computing, and Internship" },
    { semesterNumber: 8, link: "https://example.com/semester8", description: "Achieve excellence in your BCA 8th semester with comprehensive notes focusing on Advanced Database Management Systems, Mobile Application Development, and Information Security to ensure a successful academic journey at TU in Nepal. Operations Research and Final Project" },
  ];

  return (
    <Layout>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {semesterData.map((semester, index) => (
          <SemesterCard
            key={index}
            semesterNumber={semester.semesterNumber}
            link={semester.link}
            description={semester.description}
          />
        ))}
      </div>
    </Layout>
  );
};

export default NotesPage;
