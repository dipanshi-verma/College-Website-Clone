import React, { useEffect, useRef } from 'react';

const formStyle = {
  maxWidth: '500px',
  margin: '0 auto',
  background: '#fff',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease',
  opacity: 0,
  transform: 'translateY(40px)',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontWeight: '600',
  color: '#003366',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  transition: 'border 0.3s, box-shadow 0.3s',
  fontSize: '15px',
};

const buttonStyle = {
  backgroundImage: 'linear-gradient(to right, #004080, #0066cc)',
  color: '#fff',
  padding: '12px 24px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '16px',
  boxShadow: '0 4px 12px rgba(0, 64, 128, 0.3)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};

const CourseForm = ({ facultyName }) => {
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          formRef.current.style.opacity = 1;
          formRef.current.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.2 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        input:focus, select:focus {
          border-color: #0073e6;
          box-shadow: 0 0 8px rgba(0, 115, 230, 0.2);
          outline: none;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(0, 102, 204, 0.4);
        }
      `}</style>

      <form style={formStyle} ref={formRef}>
        <label style={labelStyle} htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="Enter your full name" style={inputStyle} />

        <label style={labelStyle} htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" style={inputStyle} />

        <label style={labelStyle} htmlFor="course">Select Course</label>
        <select id="course" style={inputStyle}>
          <option value="">-- Choose a course --</option>

          {facultyName.includes('IT') && (
            <>
              <option value="bca">BCA</option>
              <option value="mca">MCA</option>
              <option value="bsc-cs">B.Sc Computer Science</option>
            </>
          )}

          {!facultyName.includes('IT') && (
            <>
              <option value="course1">Course A</option>
              <option value="course2">Course B</option>
            </>
          )}
        </select>

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </>
  );
};

export default CourseForm;