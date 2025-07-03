import React from 'react';
import CourseForm from '../../Component/CourseForm';

const pageStyle = {
  background: 'linear-gradient(to right, #fff0f5, #ffe6fa)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: 'Georgia, "Times New Roman", serif',
};

const headingStyle = {
  textAlign: 'center',
  color: '#993366',
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '30px',
  textShadow: '1px 1px 2px #f9c6dd',
};

const infoCardStyle = {
  maxWidth: '850px',
  margin: '0 auto 40px auto',
  backgroundColor: '#fff7fb',
  padding: '30px',
  borderRadius: '16px',
  border: '1px solid #e6cce6',
  boxShadow: '0 8px 20px rgba(255, 182, 193, 0.3)',
  lineHeight: '1.7',
  color: '#4d0033',
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
  boxShadow: '0 2px 8px rgba(255,182,193,0.15)'
};

const FineArtsPage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Faculty of Fine Arts - Course Form</h1>
        {/* 📸 Image Section */}
      <img src="https://paruluniversity.ac.in/app/20200218/images/faculty/838665Fine%20Arts.jpg" style={imageStyle} />


      <div style={infoCardStyle}>
        <p>
          The <strong>Faculty of Fine Arts</strong> is dedicated to nurturing creative expression across disciplines like painting,
          sculpture, applied arts, and performing arts. Our programs encourage critical thinking, artistic exploration,
          and mastery of visual and performing mediums.
        </p>

        <h3>🎨 Popular Courses:</h3>
        <ul style={listStyle}>
          <li>Bachelor of Fine Arts (BFA)</li>
          <li>Master of Fine Arts (MFA)</li>
          <li>Diploma in Applied Arts</li>
          <li>Certificate in Visual Arts & Drawing</li>
          <li>Art History and Criticism</li>
        </ul>

        <h3>🧠 Specializations:</h3>
        <ul style={listStyle}>
          <li>Painting / Sculpture / Ceramics</li>
          <li>Graphic & Commercial Arts</li>
          <li>Photography & Printmaking</li>
          <li>Calligraphy & Installation Art</li>
        </ul>

        <h3>🎭 Career Opportunities:</h3>
        <ul style={listStyle}>
          <li>Professional Artist / Painter</li>
          <li>Art Teacher / Professor</li>
          <li>Graphic Designer / Illustrator</li>
          <li>Gallery Curator / Art Director</li>
          <li>Animator / Concept Artist</li>
        </ul>

        <h3>🌟 Why Choose Us?</h3>
        <ul style={listStyle}>
          <li>State-of-the-art studios and workshops</li>
          <li>Experienced artist faculty & visiting mentors</li>
          <li>Annual exhibitions and art fairs</li>
          <li>Scholarships and international exposure</li>
        </ul>
      </div>

      <CourseForm facultyName="Faculty of Fine Arts" />
    </div>
  );
};

export default FineArtsPage;