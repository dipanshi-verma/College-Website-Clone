import React from 'react';
import CourseForm from '../../Component/CourseForm';

const pageStyle = {
  background: 'linear-gradient(to right, #fffbe6, #fdf2e9)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: 'Segoe UI, sans-serif',
};
const headingStyle = {
  textAlign: 'center',
  color: '#b36b00',
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '30px',
};
const HotelManagementPage = () => (
  <div style={pageStyle}>
    <h1 style={headingStyle}>
      Faculty of Hotel Management and Catering Technology - Course Form
    </h1>
    <CourseForm facultyName="Faculty of Hotel Management and Catering Technology" />
  </div>
);
export default HotelManagementPage;
