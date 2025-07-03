import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import ScrollToTop from './Component/ScrollToTop';

import Home from './pages/Home';
import About from './pages/AboutUs';
import Auth from './pages/LoginSignUp';
import AdmissionPage from './pages/AdmissionPage'; // New
import CommercePage from './pages/Coursce/CommercePage';
import DesignPage from './pages/Coursce/DesignPage';
import ITPage from './pages/Coursce/ITPage';
import EngineeringPage from './pages/Coursce/EngineeringPage';
import FineArtsPage from './pages/Coursce/FineArtsPage';
import HotelManagementPage from './pages/Coursce/HotelManagementPage';
import LawPage from './pages/Coursce/LawPage';
import MedicinePage from './pages/Coursce/MedicinePage';
import PharmacyPage from './pages/Coursce/PharmacyPage';
import SocialWorkPage from './pages/Coursce/SocialWorkPage';


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

        {/* new courses pages */}
        <Route path="/courses/faculty-of-commerce" element={<CommercePage />} />
        <Route path="/courses/faculty-of-design" element={<DesignPage />} />
        <Route path="/courses/faculty-of-it-computer-science" element={<ITPage />} />
        <Route path="/courses/faculty-of-engineering-technology" element={<EngineeringPage />} />
        <Route path="/courses/faculty-of-fine-arts" element={<FineArtsPage />} />
        <Route path="/courses/faculty-of-hotel-management-and-catering-technology" element={<HotelManagementPage />} />
        <Route path="/courses/faculty-of-law" element={<LawPage />} />
        <Route path="/courses/faculty-of-medicine" element={<MedicinePage />} />
        <Route path="/courses/faculty-of-pharmacy" element={<PharmacyPage />} />
        <Route path="/courses/faculty-of-social-work" element={<SocialWorkPage />} />


        {/*  New Dynamic Routes */}
        <Route path="/admissions/:programSlug" element={<AdmissionPage />} />
      </Routes>
      <Footer ref={footerRef} />
    </>
  );
}

export default App;