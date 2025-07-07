import React, { useEffect } from 'react';
import CourseForm from '../../Component/CourseForm';

const pageStyle = {
  background: 'linear-gradient(to right, #f0f0f0, #e6e6e6)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: 'Georgia, serif',
  overflowX: 'hidden',
};

const headingStyle = {
  textAlign: 'center',
  color: '#2f2f2f',
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '30px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  animation: 'fadeDown 1s ease-out',
};

const contentWrapper = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '40px',
  maxWidth: '1200px',
  margin: '0 auto 40px auto',
};

const imageStyle = {
  maxWidth: '420px',
  width: '100%',
  borderRadius: '12px',
  animation: 'zoomIn 1.2s ease-in',
};

const infoBox = {
  flex: '1 1 500px',
  color: '#333',
  lineHeight: '1.6',
  padding: '0',  // removed padding from original box to keep it minimal
  borderRadius: '12px',
};

const listStyle = {
  paddingLeft: '20px',
};

const LawPage = () => {
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
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .fade-trigger {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .fade-in {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }
      `}</style>

      <h1 style={headingStyle}>Faculty of Law - Course Form</h1>

      <div className="fade-trigger" style={contentWrapper}>
        <img
          src="https://paruluniversity.ac.in/app/20200122/images/faculty/2679221.jpg"
          alt="Faculty of Law"
          style={imageStyle}
        />

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
      </div>

      <div className="fade-trigger" style={{ maxWidth: '850px', margin: '0 auto' }}>
        <CourseForm facultyName="Faculty of Law" />
      </div>
    </div>
  );
};

export default LawPage;
