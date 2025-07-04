import React, { useEffect } from 'react';
import CourseForm from '../../Component/CourseForm';

const pageStyle = {
  background: 'linear-gradient(to right, #e8fff1, #f6fff9)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: 'Segoe UI, sans-serif',
  overflowX: 'hidden',
};

const headingStyle = {
  textAlign: 'center',
  color: '#2e7d32',
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
  animation: 'zoomIn 1s ease',
};

const infoBox = {
  flex: '1 1 500px',
  color: '#1b5e20',
  lineHeight: '1.7',
  borderRadius: '12px',
  padding: '0', // removed padding from original box since bg and border removed
};

const listStyle = {
  paddingLeft: '20px',
};

const PharmacyPage = () => {
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

      <h1 style={headingStyle}>Faculty of Pharmacy - Course Form</h1>

      <div className="fade-trigger" style={contentWrapper}>
        <img
          src="https://pimsr.paruluniversity.ac.in/wp-content/uploads/2024/02/Parul-Institute-of-Medical-Sciences-Research-Vadodara-Gujarat-2.webp"
          style={imageStyle}
          alt="Faculty of Pharmacy"
        />

        <div style={infoBox}>
          <p>
            The <strong>Faculty of Pharmacy</strong> focuses on the discovery, development, and responsible use of medications.
            With modern labs and clinical exposure, we prepare students for a dynamic and vital profession in healthcare and pharmaceuticals.
          </p>

          <h3>💊 Popular Pharmacy Courses:</h3>
          <ul style={listStyle}>
            <li><strong>D. Pharm</strong> – 2-year entry-level course covering pharmaceutical science fundamentals.</li>
            <li><strong>B. Pharm</strong> – 4-year degree focusing on drug formulation, manufacturing, and patient care.</li>
            <li><strong>M. Pharm</strong> – 2-year specialization in Pharmaceutics, Pharmacology, or Clinical Pharmacy.</li>
            <li><strong>Pharm.D</strong> – 6-year professional doctoral program for clinical practice.</li>
            <li><strong>Ph.D. in Pharmaceutical Sciences</strong> – Research program for innovation and development.</li>
          </ul>

          <h3>🔬 Career Opportunities:</h3>
          <ul style={listStyle}>
            <li>Clinical Pharmacist / Hospital Pharmacist</li>
            <li>Pharmaceutical Research Scientist</li>
            <li>Drug Inspector / Quality Control Analyst</li>
            <li>Regulatory Affairs Officer</li>
            <li>Academician / Medical Writer</li>
          </ul>

          <h3>🌿 Why Choose Our Faculty of Pharmacy?</h3>
          <ul style={listStyle}>
            <li>Modern laboratories with advanced instrumentation</li>
            <li>Focus on clinical, industrial, and regulatory training</li>
            <li>Experienced faculty and industry tie-ups</li>
            <li>Strong placement support and career counseling</li>
          </ul>
        </div>
      </div>

      <div className="fade-trigger" style={{ maxWidth: '850px', margin: '0 auto' }}>
        <CourseForm facultyName="Faculty of Pharmacy" />
      </div>
    </div>
  );
};

export default PharmacyPage;
