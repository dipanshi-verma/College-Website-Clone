import React from 'react';
import CourseForm from '../../Component/CourseForm';

const pageStyle = {
  background: 'linear-gradient(to right, #f0f0f0, #e6e6e6)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: 'Georgia, serif',
};
const headingStyle = {
  textAlign: 'center',
  color: '#2f2f2f',
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '30px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};
const LawPage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Faculty of Law - Course Form</h1>
      <CourseForm facultyName="Faculty of Law" />
    </div>
  );
};
export default LawPage;