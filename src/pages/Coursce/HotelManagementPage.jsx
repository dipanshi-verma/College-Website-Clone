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
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '30px',
  textShadow: '1px 1px 2px #ffe0b3',
};

const infoCardStyle = {
  maxWidth: '850px',
  margin: '0 auto 40px auto',
  backgroundColor: '#fff9ec',
  padding: '30px',
  borderRadius: '16px',
  border: '1px solid #ffe0b3',
  boxShadow: '0 8px 20px rgba(255, 204, 102, 0.2)',
  lineHeight: '1.7',
  color: '#663300',
};

const listStyle = {
  paddingLeft: '20px',
};

const formSectionStyle = {
  maxWidth: '850px',
  margin: '0 auto',
  backgroundColor: '#fffdf6',
  padding: '30px',
  borderRadius: '16px',
  border: '1px solid #ffe8cc',
  boxShadow: '0 6px 16px rgba(255, 190, 80, 0.2)',
};

const imageStyle = {
  display: 'block',
  margin: '0 auto 30px auto',
  maxWidth: '420px',
  width: '100%',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(255,204,102,0.15)'
};

const HotelManagementPage = () => (
  <div style={pageStyle}>
    <h1 style={headingStyle}>
      Faculty of Hotel Management and Catering Technology - Course Form
    </h1>
      {/* 📸 Image Section */}
      <img src="https://paruluniversity.ac.in/app/20200218/images/faculty/929315Faculty%20Banner.jpg" style={imageStyle} />


    <div style={infoCardStyle}>
      <p>
        The <strong>Faculty of Hotel Management and Catering Technology</strong> prepares students for careers in
        the dynamic hospitality and tourism industry. With a focus on practical training, service excellence, and
        global standards, our programs are designed to create skilled professionals.
      </p>

      <h3>🍽️ Popular Courses:</h3>
      <ul style={listStyle}>
        <li>Bachelor of Hotel Management (BHM)</li>
        <li>Diploma in Food Production & Culinary Arts</li>
        <li>Certificate in Housekeeping Operations</li>
        <li>Post Graduate Diploma in Hospitality Management</li>
        <li>Diploma in Bakery & Confectionery</li>
      </ul>

      <h3>🏨 Career Opportunities:</h3>
      <ul style={listStyle}>
        <li>Hotel & Resort Manager</li>
        <li>Food & Beverage Manager</li>
        <li>Chef / Culinary Expert</li>
        <li>Front Office Executive</li>
        <li>Travel & Tourism Consultant</li>
      </ul>

      <h3>🌟 Why Choose This Faculty?</h3>
      <ul style={listStyle}>
        <li>Modern kitchens and training restaurants</li>
        <li>Internships with 5-star hotels and chains</li>
        <li>International exposure and study tours</li>
        <li>Workshops with chefs and hospitality leaders</li>
      </ul>
    </div>

    <div style={formSectionStyle}>
      <CourseForm facultyName="Faculty of Hotel Management and Catering Technology" />
    </div>
  </div>
);

export default HotelManagementPage;