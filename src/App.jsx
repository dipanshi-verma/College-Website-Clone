// App.jsx
import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

import Home from './pages/Home';
import About from './pages/AboutUs';
import Auth from './pages/LoginSignUp';

function App() {
  const footerRef = useRef(null);

  return (
    <>
      <Navbar footerRef={footerRef} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/contact" element={<Footer ref={footerRef} />} />
      </Routes>
      {/* Footer rendered here as default for every page */}
      <Footer ref={footerRef} />
    </>
  );
}

export default App;