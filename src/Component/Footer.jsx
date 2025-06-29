import React, { forwardRef } from 'react';
import Swal from 'sweetalert2';

const Footer = forwardRef((props, ref) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Thank you!',
      text: 'Your message has been sent successfully.',
    });
    e.target.reset();
  };

  return (
    <footer
      ref={ref}
      className="bg-blue-900 text-white p-10 mt-10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-2 rounded bg-blue-100 text-black"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-full p-2 rounded bg-blue-100 text-black"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Contact No.:</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your contact number"
                className="w-full p-2 rounded bg-blue-100 text-black"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Login</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      <p className="text-center text-sm mt-10">
        &copy;{new Date().getFullYear()} Rangmanch University. All rights reserved.
      
      <p>Shantivan Road, Near Laxmipura Extension  
         Rudrapark Area, Vadodara – 390025, Gujarat</p>
      </p>
    </footer>
  );
});

export default Footer;
