import React from 'react';
import CourseForm from '../../Component/CourseForm';


const pageStyle = {
  background: 'linear-gradient(to right, #fff5f8, #ffe6f0)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: 'Segoe UI, sans-serif',
};

const headingStyle = {
  textAlign: 'center',
  color: '#cc3366',
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '30px',
};

const DesignPage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Faculty of Design - Course Form</h1>
      <CourseForm facultyName="Faculty of Design" />
    </div>
  );
};

export default DesignPage;
