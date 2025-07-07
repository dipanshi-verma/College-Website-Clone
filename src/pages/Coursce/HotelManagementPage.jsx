import React, { useEffect } from 'react';
import CourseForm from '../../Component/CourseForm';

const pageStyle = {
  background: 'linear-gradient(to right, #fffbe6, #fdf2e9)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: 'Segoe UI, sans-serif',
  overflowX: 'hidden',
};

const headingStyle = {
  textAlign: 'center',
  color: '#b36b00',
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '30px',
  textShadow: '1px 1px 2px #ffe0b3',
  animation: 'fadeDown 1s ease-out',
};

const contentContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '40px',
  justifyContent: 'center',
  alignItems: 'flex-start',
  maxWidth: '1200px',
  margin: '0 auto 40px auto',
};

const imageStyle = {
  flex: '0 1 420px',
  maxWidth: '420px',
  width: '100%',
  borderRadius: '12px',
  animation: 'zoomIn 1.2s ease-in',
};

const infoCardStyle = {
  flex: '1 1 400px',
  padding: '0',
  backgroundColor: 'transparent',
  border: 'none',
  lineHeight: '1.7',
  color: '#663300',
};

const formSectionStyle = {
  maxWidth: '850px',
  margin: '0 auto',
  padding: '0',
  backgroundColor: 'transparent',
  border: 'none',
};

const listStyle = {
  paddingLeft: '20px',
};

const HotelManagementPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.fade-trigger');
    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
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

      <h1 style={headingStyle}>
        Faculty of Hotel Management and Catering Technology - Course Form
      </h1>

      <div className="fade-trigger" style={contentContainerStyle}>
        <img
          src="https://paruluniversity.ac.in/app/20200218/images/faculty/929315Faculty%20Banner.jpg"
          alt="Faculty of Hotel Management"
          style={imageStyle}
        />

        <div style={infoCardStyle}>
          <p>
            The <strong>Faculty of Hotel Management and Catering Technology</strong> prepares students for careers in
            the dynamic hospitality and tourism industry. With a focus on practical training, service excellence, and
            global standards, our programs are designed to create skilled professionals.
          </p>

          <h3>🍽️ Popular Courses:</h3>
          <ul style={listStyle}>
            <li>Bachelor of Hotel Management (BHM)</li>
            <li>Diploma in Food Production & Culinary Arts</li>
            <li>Certificate in Housekeeping Operations</li>
            <li>Post Graduate Diploma in Hospitality Management</li>
            <li>Diploma in Bakery & Confectionery</li>
          </ul>

          <h3>🏨 Career Opportunities:</h3>
          <ul style={listStyle}>
            <li>Hotel & Resort Manager</li>
            <li>Food & Beverage Manager</li>
            <li>Chef / Culinary Expert</li>
            <li>Front Office Executive</li>
            <li>Travel & Tourism Consultant</li>
          </ul>

          <h3>🌟 Why Choose This Faculty?</h3>
          <ul style={listStyle}>
            <li>Modern kitchens and training restaurants</li>
            <li>Internships with 5-star hotels and chains</li>
            <li>International exposure and study tours</li>
            <li>Workshops with chefs and hospitality leaders</li>
          </ul>
        </div>
      </div>

      <div className="fade-trigger" style={formSectionStyle}>
        <CourseForm facultyName="Faculty of Hotel Management and Catering Technology" />
      </div>
    </div>
  );
};

export default HotelManagementPage;
