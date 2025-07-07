import React, { useEffect } from 'react';
import CourseForm from '../../Component/CourseForm';

const pageStyle = {
  background: 'linear-gradient(135deg, #fff0f5, #ffe0eb)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: `'Segoe UI', sans-serif`,
  overflowX: 'hidden',
};

const headingStyle = {
  textAlign: 'center',
  color: '#b30059',
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '30px',
  textShadow: '2px 2px 4px rgba(255,204,221,0.6)',
  animation: 'fadeDown 1s ease-out',
};

const containerStyle = {
  maxWidth: '1000px',
  margin: '0 auto 40px auto',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '40px',
  flexWrap: 'wrap',
};

const infoCardStyle = {
  flex: '1 1 400px',
  padding: '0',
  borderRadius: '0',
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: 'none',
  lineHeight: '1.7',
  color: '#660033',
  animation: 'fadeUp 1.2s ease-in',
};

const listStyle = {
  paddingLeft: '20px',
};

const imageStyle = {
  flex: '0 0 400px',
  width: '100%',
  borderRadius: '12px',
  animation: 'zoomIn 1.2s ease',
  minWidth: '280px',
};

const DesignPage = () => {
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
          from { opacity: 0; transform: translateY(40px); }
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
          transition: all 1.2s ease;
        }

        @media (max-width: 768px) {
          .responsive-container {
            flex-direction: column !important;
          }
        }
      `}
      </style>

      <h1 style={headingStyle}>Faculty of Design - Course Details</h1>

      <div className="fade-trigger responsive-container" style={containerStyle}>
        <img
          src="https://paruluniversity.ac.in/app/20200122/images/faculty/880108Pic-1.jpg"
          alt="Faculty of Design"
          style={imageStyle}
        />

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
      </div>

      <div className="fade-trigger" style={{ maxWidth: '850px', margin: '0 auto', padding: 0 }}>
        <CourseForm facultyName="Faculty of Design" />
      </div>
    </div>
  );
};

export default DesignPage;
