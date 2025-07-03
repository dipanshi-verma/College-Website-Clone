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
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '30px',
  textShadow: '1px 1px 2px #ccc',
};

const sectionStyle = {
  maxWidth: '800px',
  margin: '0 auto 40px auto',
  background: '#ffffff',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  color: '#333',
  lineHeight: '1.7',
};

const listStyle = {
  paddingLeft: '20px',
};

const imageStyle = {
  display: 'block',
  margin: '0 auto 30px auto',
  maxWidth: '400px',
  width: '100%',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
};

const CommercePage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Faculty of Commerce - Course Form</h1>
        {/* 📸 Image Section */}
      <img src="https://paruluniversity.ac.in/app/20200218/images/faculty/500015Commerce.jpg" alt="Faculty of Commerce" style={imageStyle} />

      <div style={sectionStyle}>
        <p>
          The <strong>Faculty of Commerce</strong> is dedicated to nurturing future business leaders,
          economists, and finance professionals. Our curriculum is designed to meet modern business
          standards and industry needs.
        </p>

        <h3>💼 Popular Courses Offered:</h3>
        <ul style={listStyle}>
          <li>B.Com (General)</li>
          <li>B.Com (Honours)</li>
          <li>BBA (Bachelor of Business Administration)</li>
          <li>Master of Commerce (M.Com)</li>
          <li>PG Diploma in Finance and Accounting</li>
        </ul>

        <h3>🎯 Career Opportunities:</h3>
        <ul style={listStyle}>
          <li>Chartered Accountant (CA)</li>
          <li>Company Secretary (CS)</li>
          <li>Financial Analyst</li>
          <li>Banking & Insurance Professional</li>
          <li>Tax Consultant</li>
        </ul>

        <h3>🌟 Why Choose Us?</h3>
        <ul style={listStyle}>
          <li>Experienced faculty and industry-focused curriculum</li>
          <li>Workshops, internships, and placement support</li>
          <li>Modern infrastructure and smart classrooms</li>
          <li>Strong alumni network</li>
        </ul>
      </div>

      <CourseForm facultyName="Faculty of Commerce" />
    </div>
  );
};

export default CommercePage;