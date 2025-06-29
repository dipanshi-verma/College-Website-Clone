import { useRef } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';


function App() {
  const footerRef = useRef(null); 

  return (
    <>
      <Navbar footerRef={footerRef} />
     
      <Footer ref={footerRef} />
    </>
  );
}

export default App;
