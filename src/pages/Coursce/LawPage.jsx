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

const infoBox = {
  maxWidth: '850px',
  margin: '0 auto 40px auto',
  backgroundColor: '#ffffff',
  padding: '30px',
  borderRadius: '12px',
  border: '1px solid #ccc',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  color: '#333',
  lineHeight: '1.6',
};

const listStyle = {
  paddingLeft: '20px',
};

const imageStyle = {
  display: 'block',
  margin: '0 auto 30px auto',
  maxWidth: '420px',
  width: '100%',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
};

const LawPage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Faculty of Law - Course Form</h1>
        {/* 📸 Image Section */}
      <img src="https://paruluniversity.ac.in/app/20200122/images/faculty/2679221.jpg" style={imageStyle} />


      <div style={infoBox}>
        <p>
          The <strong>Faculty of Law</strong> offers a robust legal education combining academic theory with practical exposure.
          Our curriculum is designed to build strong analytical, reasoning, and advocacy skills, preparing students for diverse careers in the legal field.
        </p>

        <h3>📚 Popular Courses:</h3>
        <ul style={listStyle}>
          <li>Bachelor of Laws (LL.B)</li>
          <li>Integrated B.A. LL.B / B.B.A. LL.B (5 Years)</li>
          <li>Master of Laws (LL.M)</li>
          <li>Diploma in Cyber Law / Labour Law / IPR</li>
          <li>Doctorate (Ph.D. in Law)</li>
        </ul>

        <h3>⚖️ Career Paths:</h3>
        <ul style={listStyle}>
          <li>Advocate / Legal Advisor</li>
          <li>Corporate Counsel</li>
          <li>Judicial Services / Magistrate</li>
          <li>Public Prosecutor</li>
          <li>Legal Analyst / Policy Researcher</li>
        </ul>

        <h3>🎓 Why Choose Our Law Faculty?</h3>
        <ul style={listStyle}>
          <li>Moot court training & legal aid clinics</li>
          <li>Internships in courts, law firms, NGOs</li>
          <li>Workshops on constitutional, cyber & human rights law</li>
          <li>Bar Council-approved programs with experienced faculty</li>
        </ul>
      </div>

      <CourseForm facultyName="Faculty of Law" />
    </div>
  );
};

export default LawPage;