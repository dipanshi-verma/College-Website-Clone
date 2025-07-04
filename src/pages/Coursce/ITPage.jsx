import React, { useEffect } from 'react';
import CourseForm from '../../Component/CourseForm';

const pageStyle = {
  background: 'linear-gradient(to right, #e0f7ff, #f0fcff)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: 'Segoe UI, Tahoma, sans-serif',
  overflowX: 'hidden',
};

const headingStyle = {
  textAlign: 'center',
  color: '#003366',
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '25px',
  animation: 'fadeDown 1s ease-out',
};

const infoCardStyle = {
  maxWidth: '850px',
  margin: '0 auto 40px auto',
  backgroundColor: '#f7fbff',
  padding: '30px',
  borderRadius: '15px',
  border: '1px solid #d0eaff',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
  lineHeight: '1.7',
  color: '#003049',
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

const ITPage = () => {
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

      <h1 style={headingStyle}>Faculty of IT & Computer Science - Course Form</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjM6c8D3K9vSiuHju4cD7BBMEsWTetDC8Adw&s"
        alt="Faculty of IT"
        style={imageStyle}
      />

      <div style={infoCardStyle} className="fade-trigger">
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

      <div className="fade-trigger" style={{ animationDelay: '0.4s' }}>
        <CourseForm facultyName="Faculty of IT & Computer Science" />
      </div>
    </div>
  );
};

export default ITPage;
