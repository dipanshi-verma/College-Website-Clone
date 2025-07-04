import React, { useEffect } from 'react';
import CourseForm from '../../Component/CourseForm';

const pageStyle = {
  background: 'linear-gradient(to right, #e6faff, #f0ffff)',
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: 'Segoe UI, sans-serif',
  overflowX: 'hidden',
};

const headingStyle = {
  textAlign: 'center',
  color: '#006666',
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '30px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  animation: 'fadeDown 1s ease-out',
};

const infoBox = {
  maxWidth: '850px',
  margin: '0 auto 40px auto',
  backgroundColor: '#ffffff',
  padding: '30px',
  borderRadius: '12px',
  border: '1px solid #ccefff',
  boxShadow: '0 4px 12px rgba(0, 102, 102, 0.1)',
  color: '#004d4d',
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
  boxShadow: '0 2px 8px rgba(0,102,102,0.10)',
  animation: 'zoomIn 1.2s ease-in',
};

const MedicinePage = () => {
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
          transform: translateY(0) !important;
        }
      `}</style>

      <h1 style={headingStyle}>Faculty of Medicine - Course Form</h1>

      <img
        src="https://pimsr.paruluniversity.ac.in/wp-content/uploads/2024/02/Parul-Institute-of-Medical-Sciences-Research-Vadodara-Gujarat-2.webp"
        alt="Faculty of Medicine"
        style={imageStyle}
      />

      <div className="fade-trigger" style={infoBox}>
        <p>
          The <strong>Faculty of Medicine</strong> is committed to producing skilled healthcare professionals
          and researchers through world-class medical education, practical training, and ethical clinical practice.
          Our programs combine rigorous academic instruction with hands-on experience in hospitals and labs.
        </p>

        <h3>🩺 Popular Medical Courses:</h3>
        <ul style={listStyle}>
          <li><strong>MBBS</strong> – A 5.5-year program including internship, focusing on foundational and clinical knowledge in general medicine and surgery.</li>
          <li><strong>BDS</strong> – A 5-year undergraduate course in dental sciences and oral healthcare.</li>
          <li><strong>BPT</strong> – A 4.5-year program focused on physical rehabilitation and therapy techniques.</li>
          <li><strong>MD / MS</strong> – Postgraduate degrees in specialized fields like Internal Medicine, Surgery, Pediatrics, Radiology, Psychiatry, and more.</li>
          <li><strong>Ph.D. in Medical Sciences</strong> – Research-intensive doctorate for academic and scientific innovation.</li>
        </ul>

        <h3>🔬 Career Opportunities:</h3>
        <ul style={listStyle}>
          <li>General Practitioner / Specialist Doctor</li>
          <li>Dentist / Physiotherapist</li>
          <li>Surgeon / Clinical Researcher</li>
          <li>Public Health Officer</li>
          <li>Medical Lecturer / Hospital Administrator</li>
        </ul>

        <h3>🏥 Why Choose Our Faculty of Medicine?</h3>
        <ul style={listStyle}>
          <li>Advanced labs, operation theatres, and diagnostic equipment</li>
          <li>Affiliated teaching hospitals for real-time clinical exposure</li>
          <li>Experienced faculty, visiting doctors, and research scholars</li>
          <li>Internships, rural health camps, and case-based learning</li>
        </ul>
      </div>

      <div className="fade-trigger" style={{ ...infoBox, marginTop: '30px' }}>
        <CourseForm facultyName="Faculty of Medicine" />
      </div>
    </div>
  );
};

export default MedicinePage;
