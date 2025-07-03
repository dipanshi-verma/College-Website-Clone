import React from 'react';
import CourseForm from '../../Component/CourseForm';


const pageStyle = {
  background: 'linear-gradient(to right, #e6f0ff, #ccd9ff)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: 'Segoe UI, sans-serif',
};

const headingStyle = {
  textAlign: 'center',
  color: '#003366',
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '30px',
};

const EngineeringPage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Faculty of Engineering & Technology - Course Form</h1>
      <CourseForm facultyName="Faculty of Engineering & Technology" />
    </div>
  );
};

export default EngineeringPage;