import React from 'react';
import CourseForm from '../../Component/CourseForm';


const pageStyle = {
  background: 'linear-gradient(to right, #f0f8ff, #e6f7ff)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: 'Segoe UI, sans-serif',
};

const headingStyle = {
  textAlign: 'center',
  color: '#004d66',
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '30px',
};

const CommercePage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Faculty of Commerce - Course Form</h1>
      <CourseForm facultyName="Faculty of Commerce" />
    </div>
  );
};

export default CommercePage;
