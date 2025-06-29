import { useRef } from 'react';
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
      <Auth />
      <Home />
      <About />
      <Footer ref={footerRef} />
    </>
  );
}

export default App;
