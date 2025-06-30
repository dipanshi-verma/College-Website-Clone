import React, { forwardRef } from 'react';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Thank you!',
      text: 'Your message has been sent successfully.',
    });
    e.target.reset();
  };

  // Smart link handler
  const handleNavigation = (path) => {  
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  return (
    <footer ref={ref} className="bg-blue-200 text-blue-900 px-4 sm:px-6 py-10 mt-2 scroll-mt-20 w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-2 rounded bg-white border border-blue-300 text-blue-900"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-full p-2 rounded bg-white border border-blue-300 text-blue-900"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Contact No.:</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your contact number"
                className="w-full p-2 rounded bg-white border border-blue-300 text-blue-900"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-300 text-white font-semibold py-2 px-6 rounded w-full sm:w-auto"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <button onClick={() => handleNavigation('/')} className="hover:underline text-left w-full">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/about')} className="hover:underline text-left w-full">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/login')} className="hover:underline text-left w-full">
                Login
              </button>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs sm:text-sm mt-10 space-y-1 px-4">
        <p>&copy;{new Date().getFullYear()} Parul University. All rights reserved.</p>
        <p>P.O. Limda, Ta. Waghodia, Vadodara – 391760, Gujarat, India.</p>
      </div>
    </footer>
  );
});

export default Footer;