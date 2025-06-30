// App.jsx
import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import ScrollToTop from './Component/ScrollToTop';

import Home from './pages/Home';
import About from './pages/AboutUs';
import Auth from './pages/LoginSignUp';

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
        {/* No need for a standalone footer route */}
      </Routes>
      <Footer ref={footerRef} />
    </>
  );
}

export default App;