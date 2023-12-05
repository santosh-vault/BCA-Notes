// Syllabus.jsx
import React from 'react';
import SyllabusCard from './SyllabusCard';
import { useSyllabus } from '../store/syllabus-list';
import Layout from '../Layout';

const Syllabus = () => {
  const syllabusData = useSyllabus();

  return (
    <Layout>
    <div className="syllabus-container">
      <h1 className="syllabus-title text-center">BCA Syllabus</h1>
      <div className="syllabus-cards">
        {syllabusData.map((semester, index) => (
          <SyllabusCard key={index} semester={semester} />
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Syllabus;
