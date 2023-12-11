import React from 'react';
import { Link } from 'react-router-dom';

const Bar = () => {
  return (
    <div className="bar">
      {/* Horizontal Links for Larger Screens */}
      <div className="bar-links">
        <Link to="/i">Semester 1</Link>
        <Link to="/ii">Semester 2</Link>
        <Link to="/iii">Semester 3</Link>
        <Link to="/iv">Semester 4</Link>
        <Link to="/">Semester 5</Link>
        <Link to="/">Semester 6</Link>
        <Link to="/">Semester 7</Link>
        <Link to="/">Semester 8</Link>
      </div>
    </div>
  );
};

export default Bar;
