import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import ScrollToTop from './Component/ScrollToTop';

import Home from './pages/Home';
import About from './pages/AboutUs';
import Auth from './pages/LoginSignUp';
import CoursePage from './pages/CoursePage'; // New
import AdmissionPage from './pages/AdmissionPage'; // New

function App() {
  const footerRef = useRef(null);

  return (
    <>
      <ScrollToTop />
      <Navbar footerRef={footerRef} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Auth />} />

        {/*  New Dynamic Routes */}
        <Route path="/courses/:facultySlug" element={<CoursePage />} />
        <Route path="/admissions/:programSlug" element={<AdmissionPage />} />
      </Routes>
      <Footer ref={footerRef} />
    </>
  );
}

export default App;