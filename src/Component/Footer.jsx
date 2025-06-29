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
    <footer ref={ref} className="bg-blue-200 text-blue-900 p-10 mt-10 scroll-mt-20">
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
              className="bg-blue-400 hover:bg-blue-300 text-white font-semibold py-2 px-6 rounded"
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

      <div className="text-center text-sm mt-10 space-y-1">
        <p>&copy;{new Date().getFullYear()} Parul University. All rights reserved.</p>
        <p>P.O. Limda, Ta. Waghodia,
           Vadodara – 391760,
          Gujarat, India.</p>
      </div>
    </footer>
  );
});

export default Footer;
