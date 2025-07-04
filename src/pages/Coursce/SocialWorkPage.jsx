import React, { useEffect } from 'react';
import CourseForm from '../../Component/CourseForm';

const pageStyle = {
  background: 'linear-gradient(to right, #fef9f4, #fff2e6)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: '"Segoe UI", sans-serif',
  overflowX: 'hidden',
};

const headingStyle = {
  textAlign: 'center',
  color: '#cc6600',
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '30px',
  animation: 'fadeDown 1s ease-out',
};

const infoBox = {
  maxWidth: '850px',
  margin: '0 auto 40px auto',
  backgroundColor: '#fffaf0',
  padding: '30px',
  borderRadius: '12px',
  border: '1px solid #ffd699',
  boxShadow: '0 4px 12px rgba(204, 102, 0, 0.1)',
  color: '#663300',
  lineHeight: '1.7',
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
  boxShadow: '0 2px 8px rgba(204,102,0,0.10)',
  animation: 'zoomIn 1s ease',
};

const SocialWorkPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.15 }
    );

    const fadeElements = document.querySelectorAll('.fade-trigger');
    fadeElements.forEach(el => observer.observe(el));
    return () => fadeElements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div style={pageStyle}>
      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .fade-trigger {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.7s ease;
        }

        .fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

      <h1 style={headingStyle}>Faculty of Social Work - Course Form</h1>

      <img
        src="https://paruluniversity.ac.in/app/20200630/images/faculty/564375IMAGE%2014.jpg"
        style={imageStyle}
        alt="Faculty of Social Work"
      />

      <div className="fade-trigger" style={infoBox}>
        <p>
          The <strong>Faculty of Social Work</strong> empowers students with knowledge and skills to promote
          social justice, empower communities, and improve the quality of life for individuals in need.
          Programs focus on fieldwork, social reform, community organization, and counseling.
        </p>

        <h3>📘 Popular Courses Offered:</h3>
        <ul style={listStyle}>
          <li>Bachelor of Social Work (BSW)</li>
          <li>Master of Social Work (MSW)</li>
          <li>PG Diploma in Social Welfare Administration / Rural Development</li>
          <li>M.Phil / Ph.D. in Social Work</li>
        </ul>

        <h3>🌍 Career Opportunities:</h3>
        <ul style={listStyle}>
          <li>Social Worker / Community Development Officer</li>
          <li>Counselor / Rehabilitation Specialist</li>
          <li>NGO Coordinator / Project Manager</li>
          <li>Child Protection Officer / Gender Specialist</li>
          <li>Policy Researcher / Social Justice Advocate</li>
        </ul>

        <h3>✨ Why Choose Social Work?</h3>
        <ul style={listStyle}>
          <li>Extensive fieldwork in NGOs, hospitals, government agencies</li>
          <li>Focus on marginalized communities and social transformation</li>
          <li>Faculty with deep real-world engagement and research</li>
          <li>Training in counseling, policy-making, and social entrepreneurship</li>
        </ul>
      </div>

      <div className="fade-trigger" style={{ ...infoBox, marginTop: '30px' }}>
        <CourseForm facultyName="Faculty of Social Work" />
      </div>
    </div>
  );
};

export default SocialWorkPage;
