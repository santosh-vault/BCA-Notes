// NotesPage.jsx
import React from 'react';
import Layout from '../Layout';
import SemesterCard from './SemesterCard';

const NotesPage = () => {
  return (
    <Layout>
      <div className="container" style={{ display: 'flex' }}>
        <SemesterCard semesterNumber={1} link="https://example.com/semester1" />
        <SemesterCard semesterNumber={2} link="https://example.com/semester2" />
        <SemesterCard semesterNumber={1} link="https://example.com/semester1" />
        <SemesterCard semesterNumber={2} link="https://example.com/semester2" />
      </div>
      <div className="container" style={{ display: 'flex' }}>
        <SemesterCard semesterNumber={1} link="https://example.com/semester1" />
        <SemesterCard semesterNumber={2} link="https://example.com/semester2" />
        <SemesterCard semesterNumber={1} link="https://example.com/semester1" />
        <SemesterCard semesterNumber={2} link="https://example.com/semester2" />
      </div>
    </Layout>
  );
};

export default NotesPage;
