import React from 'react';
import CourseForm from '../../Component/CourseForm';


const pageStyle = {
  background: 'linear-gradient(to right, #fef9f4, #fff2e6)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: '"Segoe UI", sans-serif',
};

const headingStyle = {
  textAlign: 'center',
  color: '#cc6600',
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '30px',
};

const SocialWorkPage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Faculty of Social Work - Course Form</h1>
      <CourseForm facultyName="Faculty of Social Work" />
    </div>
  );
};

export default SocialWorkPage;
