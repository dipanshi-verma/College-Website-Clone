import React, { useEffect } from 'react';
import CourseForm from '../../Component/CourseForm';

const pageStyle = {
  background: 'linear-gradient(to right, #e6f0ff, #ccd9ff)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: 'Segoe UI, sans-serif',
  overflowX: 'hidden',
};

const headingStyle = {
  textAlign: 'center',
  color: '#003366',
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '30px',
  textShadow: '1px 1px 2px #99bbff',
  animation: 'fadeDown 1s ease-out',
};

const infoCardStyle = {
  maxWidth: '850px',
  margin: '0 auto 40px auto',
  backgroundColor: '#f4f8ff',
  padding: '30px',
  borderRadius: '16px',
  border: '1px solid #b3ccff',
  boxShadow: '0 10px 24px rgba(0, 0, 0, 0.08)',
  lineHeight: '1.7',
  color: '#00264d',
  animation: 'fadeUp 1.2s ease-in',
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
  boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
  animation: 'zoomIn 1.2s ease',
};

const EngineeringPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.fade-trigger');
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div style={pageStyle}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .fade-in {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }

        .fade-trigger {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s ease;
        }
      `}</style>

      <h1 style={headingStyle}>Faculty of Engineering & Technology - Course Form</h1>

      <img
        src="https://paruluniversity.ac.in/diploma_engineering_2025/images/bannermde.webp"
        alt="Faculty of Engineering"
        style={imageStyle}
      />

      <div className="fade-trigger" style={infoCardStyle}>
        <p>
          The <strong>Faculty of Engineering & Technology</strong> offers advanced technical education that blends theoretical knowledge
          with practical innovation. Our departments span across core and emerging engineering fields, producing industry-ready graduates.
        </p>

        <h3>⚙️ Core Courses:</h3>
        <ul style={listStyle}>
          <li>B.Tech in Computer Science Engineering (CSE)</li>
          <li>B.Tech in Mechanical Engineering</li>
          <li>B.Tech in Civil Engineering</li>
          <li>B.Tech in Electrical & Electronics Engineering (EEE)</li>
          <li>M.Tech in Artificial Intelligence / VLSI / Structural Engg.</li>
        </ul>

        <h3>🧠 Specializations:</h3>
        <ul style={listStyle}>
          <li>Data Science & Machine Learning</li>
          <li>Robotics & Automation</li>
          <li>IoT & Embedded Systems</li>
          <li>Green & Sustainable Technologies</li>
        </ul>

        <h3>💼 Career Opportunities:</h3>
        <ul style={listStyle}>
          <li>Software Engineer / Developer</li>
          <li>Site Engineer / Structural Consultant</li>
          <li>Automation Engineer / Control Systems</li>
          <li>Research Scientist / Data Analyst</li>
        </ul>
      </div>

      <div className="fade-trigger" style={{ animationDelay: '0.5s' }}>
        <CourseForm facultyName="Faculty of Engineering & Technology" />
      </div>
    </div>
  );
};

export default EngineeringPage;
