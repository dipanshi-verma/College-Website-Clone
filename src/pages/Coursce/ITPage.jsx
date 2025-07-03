import React from 'react';
import CourseForm from '../../Component/CourseForm';


const pageStyle = {
  background: 'linear-gradient(to right, #e0f7ff, #f0fcff)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: 'Segoe UI, Tahoma, sans-serif',
};

const headingStyle = {
  textAlign: 'center',
  color: '#004080',
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '30px',
};

const ITPage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Faculty of IT & Computer Science - Course Form</h1>
      <CourseForm facultyName="Faculty of IT & Computer Science" />
    </div>
  );
};

export default ITPage;
