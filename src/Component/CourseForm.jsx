import React from 'react';

const formStyle = {
  maxWidth: '500px',
  margin: '0 auto',
  background: '#fff',
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontWeight: '600',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '20px',
  border: '1px solid #ccc',
  borderRadius: '6px',
};

const buttonStyle = {
  backgroundColor: '#004080',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const CourseForm = ({ facultyName }) => {
  return (
    <form style={formStyle}>
      <label style={labelStyle} htmlFor="name">Full Name</label>
      <input type="text" id="name" placeholder="Enter your full name" style={inputStyle} />

      <label style={labelStyle} htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" style={inputStyle} />

      <label style={labelStyle} htmlFor="course">Select Course</label>
      <select id="course" style={inputStyle}>
        <option value="">-- Choose a course --</option>

        {/* Example IT courses */}
        {facultyName.includes('IT') && (
          <>
            <option value="bca">BCA</option>
            <option value="mca">MCA</option>
            <option value="bsc-cs">B.Sc Computer Science</option>
          </>
        )}

        {/* Example fallback/default options */}
        {!facultyName.includes('IT') && (
          <>
            <option value="course1">Course A</option>
            <option value="course2">Course B</option>
          </>
        )}
      </select>

      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
};

export default CourseForm;
