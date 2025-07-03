import React from 'react';
import CourseForm from '../../Component/CourseForm';

const pageStyle = {
  background: 'linear-gradient(135deg, #fff0f5, #ffe0eb)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: `'Segoe UI', sans-serif`,
};

const headingStyle = {
  textAlign: 'center',
  color: '#b30059',
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '30px',
  textShadow: '1px 1px 2px #ffccdd',
};

const infoCardStyle = {
  maxWidth: '850px',
  margin: '0 auto 40px auto',
  backgroundColor: '#fff5f8',
  padding: '30px',
  borderRadius: '15px',
  border: '1px solid #ffccd9',
  boxShadow: '0 8px 20px rgba(255, 192, 203, 0.3)',
  lineHeight: '1.7',
  color: '#660033',
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
  boxShadow: '0 2px 8px rgba(255,192,203,0.15)'
};

const DesignPage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Faculty of Design - Course Details</h1>
        {/* 📸 Image Section */}
      <img src="https://paruluniversity.ac.in/app/20200122/images/faculty/880108Pic-1.jpg" style={imageStyle} />

      <div style={infoCardStyle}>
        <p>
          The <strong>Faculty of Design</strong> is a hub of creativity and innovation, offering industry-relevant programs
          in various branches of design. Our courses are structured to provide a balance of theoretical foundation and
          practical experience to prepare students for real-world design challenges.
        </p>

        <h3>📚 Courses Offered:</h3>
        <ul style={listStyle}>
          <li><strong>Bachelor of Design (B.Des)</strong> – 4 Years</li>
          <li><strong>Bachelor of Fine Arts (BFA)</strong> – 3/4 Years</li>
          <li><strong>Master in Fashion Design (MFD)</strong> – 2 Years</li>
          <li><strong>Diploma in Interior Design</strong> – 1 Year</li>
          <li><strong>Certification in Animation & Multimedia</strong> – 6 Months</li>
        </ul>

        <h3>🎓 Eligibility Criteria:</h3>
        <ul style={listStyle}>
          <li>10+2 pass for UG programs</li>
          <li>Graduation in relevant stream for PG programs</li>
          <li>Entrance exam + Portfolio for major design programs</li>
        </ul>

        <h3>💼 Career Opportunities:</h3>
        <ul style={listStyle}>
          <li>Fashion & Textile Designer</li>
          <li>UI/UX Designer / Web Designer</li>
          <li>Interior & Spatial Designer</li>
          <li>Graphic Artist / Illustrator</li>
          <li>Animation & Game Designer</li>
        </ul>

        <h3>🛠️ Tools & Skills You’ll Learn:</h3>
        <ul style={listStyle}>
          <li>Adobe Creative Suite (Photoshop, Illustrator, XD)</li>
          <li>Sketch, Figma, Blender, AutoCAD</li>
          <li>Design Thinking & Branding</li>
          <li>Color Theory, Typography, Layout Design</li>
          <li>Portfolio Development & Presentation Skills</li>
        </ul>
      </div>

      <CourseForm facultyName="Faculty of Design" />
    </div>
  );
};

export default DesignPage;