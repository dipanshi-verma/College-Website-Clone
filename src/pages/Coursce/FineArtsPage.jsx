import React, { useEffect } from 'react';
import CourseForm from '../../Component/CourseForm';

const pageStyle = {
  background: 'linear-gradient(to right, #fff0f5, #ffe6fa)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: 'Georgia, "Times New Roman", serif',
  overflowX: 'hidden',
};

const headingStyle = {
  textAlign: 'center',
  color: '#993366',
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '30px',
  textShadow: '1px 1px 2px #f9c6dd',
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
  padding: 0,
  backgroundColor: 'transparent',
  border: 'none',
  lineHeight: '1.7',
  color: '#4d0033',
};

const listStyle = {
  paddingLeft: '20px',
};

const formSectionStyle = {
  maxWidth: '850px',
  margin: '0 auto',
  padding: 0,
  backgroundColor: 'transparent',
  border: 'none',
};

const FineArtsPage = () => {
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

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .fade-trigger {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }

        .fade-in {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }
      `}</style>

      <h1 style={headingStyle}>Faculty of Fine Arts - Course Form</h1>

      <div className="fade-trigger" style={contentContainerStyle}>
        <img
          src="https://paruluniversity.ac.in/app/20200218/images/faculty/838665Fine%20Arts.jpg"
          alt="Faculty of Fine Arts"
          style={imageStyle}
        />

        <div style={infoCardStyle}>
          <p>
            The <strong>Faculty of Fine Arts</strong> is dedicated to nurturing creative expression across disciplines
            like painting, sculpture, applied arts, and performing arts. Our programs encourage critical thinking,
            artistic exploration, and mastery of visual and performing mediums.
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
      </div>

      <div className="fade-trigger" style={formSectionStyle}>
        <CourseForm facultyName="Faculty of Fine Arts" />
      </div>
    </div>
  );
};

export default FineArtsPage;
