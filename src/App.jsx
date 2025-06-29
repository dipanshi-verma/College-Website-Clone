import { useRef } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import EgBody from './Component/EgBody';
import { Routes, Route } from 'react-router-dom';

function App() {
  const footerRef = useRef(null); 

  return (
    <>
      <Navbar footerRef={footerRef} />
      <Routes>
        <Route path="/" element={<EgBody />} />
      </Routes>
      <Footer ref={footerRef} />
    </>
  );
}

export default App;
