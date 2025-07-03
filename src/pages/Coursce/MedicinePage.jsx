import React from 'react';
import CourseForm from '../../Component/CourseForm';

const pageStyle = {
  background: 'linear-gradient(to right, #e6faff, #f0ffff)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: 'Segoe UI, sans-serif',
};
const headingStyle = {
  textAlign: 'center',
  color: '#006666',
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '30px',
};
const MedicinePage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Faculty of Medicine - Course Form</h1>
      <CourseForm facultyName="Faculty of Medicine" />
    </div>
  );
};
export default MedicinePage;