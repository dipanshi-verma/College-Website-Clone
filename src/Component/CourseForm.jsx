import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';

const CourseForm = ({ facultyName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current && isOpen) {
      formRef.current.style.opacity = 0;
      formRef.current.style.transform = 'translateY(40px)';
      requestAnimationFrame(() => {
        formRef.current.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        formRef.current.style.opacity = 1;
        formRef.current.style.transform = 'translateY(0)';
      });
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optionally, add validation here

    Swal.fire({
      icon: 'success',
      title: 'Application submitted!',
      text: 'Thank you for applying. We will get back to you soon.',
      confirmButtonColor: '#3085d6',
    }).then(() => {
      // After success message, reset form and close it
      e.target.reset();
      setIsOpen(false);
    });
  };

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

      {/* Centered Apply Now button */}
      {!isOpen && (
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsOpen(true)}
            className="px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-400 text-white rounded-lg shadow-lg font-bold text-lg hover:from-pink-700 hover:to-pink-500 transition transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-pink-300"
            aria-expanded={isOpen}
            aria-controls="course-form"
          >
            Apply Now
          </button>
        </div>
      )}

      {/* Form - visible only if isOpen */}
      {isOpen && (
        <form
          ref={formRef}
          id="course-form"
          className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out"
          onSubmit={handleSubmit}
        >
          <label className="block mb-2 font-semibold text-blue-900" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            className="w-full p-3 mb-6 border border-gray-300 rounded-md text-base transition duration-300"
            required
          />

          <label className="block mb-2 font-semibold text-blue-900" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 mb-6 border border-gray-300 rounded-md text-base transition duration-300"
            required
          />

          <label className="block mb-2 font-semibold text-blue-900" htmlFor="course">
            Select Course
          </label>
          <select
            id="course"
            name="course"
            className="w-full p-3 mb-6 border border-gray-300 rounded-md text-base transition duration-300"
            defaultValue=""
            required
          >
            <option value="" disabled>
              -- Choose a course --
            </option>

            {facultyName.includes('IT') ? (
              <>
                <option value="bca">BCA</option>
                <option value="mca">MCA</option>
                <option value="bsc-cs">B.Sc Computer Science</option>
              </>
            ) : (
              <>
                <option value="course1">Offline Course</option>
                <option value="course2">Online Course</option>
              </>
            )}
          </select>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:from-blue-800 hover:to-blue-600 transition transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default CourseForm;
