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
  color: '#003366',
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '25px',
};

const infoCardStyle = {
  maxWidth: '850px',
  margin: '0 auto 40px auto',
  backgroundColor: '#f7fbff',
  padding: '30px',
  borderRadius: '15px',
  border: '1px solid #d0eaff',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
  lineHeight: '1.7',
  color: '#003049',
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

const ITPage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Faculty of IT & Computer Science - Course Form</h1>
       {/* 📸 Image Section */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjM6c8D3K9vSiuHju4cD7BBMEsWTetDC8Adw&s" style={imageStyle} />


      <div style={infoCardStyle}>
        <p>
          The <strong>Faculty of IT & Computer Science</strong> provides cutting-edge programs aimed at developing technical, analytical,
          and problem-solving skills. Our curriculum is aligned with current industry demands including AI, data science,
          cybersecurity, full-stack development, and more.
        </p>

        <h3>🖥️ Popular Courses Offered:</h3>
        <ul style={listStyle}>
          <li>B.Sc. in Computer Science</li>
          <li>BCA (Bachelor of Computer Applications)</li>
          <li>M.Sc. in Data Science</li>
          <li>PG Diploma in Cyber Security</li>
          <li>Certificate Course in AI & Machine Learning</li>
        </ul>

        <h3>📌 Eligibility:</h3>
        <ul style={listStyle}>
          <li>UG Programs: 10+2 with Mathematics</li>
          <li>PG Programs: Graduation in Computer/IT-related discipline</li>
          <li>Certifications: Open to all with basic tech interest</li>
        </ul>

        <h3>💼 Career Opportunities:</h3>
        <ul style={listStyle}>
          <li>Software Developer / Full Stack Engineer</li>
          <li>Data Scientist / Analyst</li>
          <li>Cloud / DevOps Engineer</li>
          <li>Cybersecurity Specialist</li>
          <li>AI / Machine Learning Engineer</li>
        </ul>
      </div>

      <CourseForm facultyName="Faculty of IT & Computer Science" />
    </div>
  );
};

export default ITPage;