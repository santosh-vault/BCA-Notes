// Syllabus.jsx
import React from 'react';
import SyllabusCard from './SyllabusCard';
import { useSyllabus } from '../store/syllabus-list';
import Layout from '../Layout';
import { Helmet } from 'react-helmet';

const Syllabus = () => {
  const syllabusData = useSyllabus();

  return (
    <>
      <Helmet>
        <title>BCA Syllabus - Detailed Overview of Bachelor of Computer Application Curriculum</title>
        <meta name="description" content="Discover the complete BCA syllabus with our comprehensive guide. Gain insights into the Bachelor of Computer Application curriculum, including semester-wise subjects, course structure, and examination patterns. Navigate your BCA journey confidently with detailed information on the syllabus provided by BCA Notes Nepal." />
        <meta name="keyword" content="BCA syllabus, Bachelor of Computer Application curriculum, BCA course structure, BCA subjects, BCA semester-wise syllabus, BCA examination patterns, Tribhuvan University, BCA study plan, BCA program details, computer application syllabus, BCA course overview, BCA semester subjects, BCA exam format, BCA curriculum guide, BCA study materials, BCA program information, BCA academic guide, BCA course outline, syllabus for BCA, BCA semester-wise subjects." />
      </Helmet>
      <div className="app-container">
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
      </div>
    </>
  );
};

export default Syllabus;
