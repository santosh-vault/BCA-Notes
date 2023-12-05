// SyllabusCard.jsx
import React from 'react';

const SyllabusCard = ({ semester }) => {
  return (
    <div className="syllabus-card">
      <h2>Semester {semester.semesterNumber}</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Credit Hours</th>
            {/* Add more table headers if needed */}
          </tr>
        </thead>
        <tbody>
          {semester.courses.map((course) => (
            <tr key={course.courseCode}>
              <td>{course.courseCode}</td>
              <td>{course.courseTitle}</td>
              <td>{course.creditHours}</td>
              {/* Add more table cells if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SyllabusCard;
