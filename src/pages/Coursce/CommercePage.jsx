import React, { useEffect } from 'react';
import CourseForm from '../../Component/CourseForm';

const pageStyle = {
  backgroundAttachment: 'fixed',
  backgroundImage: 'linear-gradient(to right, #e6f7ff, #f0f8ff)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: 'Segoe UI, sans-serif',
  overflowX: 'hidden',
};

const headingStyle = {
  textAlign: 'center',
  color: '#004d66',
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '30px',
  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
  animation: 'fadeDown 1s ease-out',
};

const sectionStyle = {
  maxWidth: '800px',
  margin: '0 auto 40px auto',
  background: '#ffffff',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 10px 24px rgba(0, 0, 0, 0.1)',
  color: '#333',
  lineHeight: '1.7',
  animation: 'fadeUp 1.2s ease-in',
};

const listStyle = {
  paddingLeft: '20px',
};

const imageStyle = {
  display: 'block',
  margin: '0 auto 30px auto',
  maxWidth: '400px',
  width: '100%',
  borderRadius: '12px',
  boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
  animation: 'zoomIn 1.2s ease',
};

const CommercePage = () => {
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
      <style>
        {`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
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
          transform: translateY(30px);
          transition: all 1s ease;
        }
      `}
      </style>

      <h1 style={headingStyle}>Faculty of Commerce - Course Form</h1>

      <img
        src="https://paruluniversity.ac.in/app/20200218/images/faculty/500015Commerce.jpg"
        alt="Faculty of Commerce"
        style={imageStyle}
      />

      <div style={sectionStyle} className="fade-trigger">
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

      <div className="fade-trigger" style={{ animationDelay: '0.5s' }}>
        <CourseForm facultyName="Faculty of Commerce" />
      </div>
    </div>
  );
};

export default CommercePage;