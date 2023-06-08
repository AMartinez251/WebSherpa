import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import About from './comps/About.js';
import Contact from './comps/Contact.js';
import Navbar from './comps/Navbar.js';
import Services from './comps/Services.js';
import SectionOne from './comps/SectionOne.js';
import Footer from './comps/Footer.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Navbar/>
        <Routes>
          <Route path="/" element={<><SectionOne/></>}/>
          <Route path="/contact" element={<><Contact/></>}/>
          <Route path="/about" element={<><About/></>}/>
          <Route path="/services" element={<><Services/></>}/>
        </Routes>
      <div className="app-backdrop">
        <img src="/Sherpa.jpg" className="sherpa-backdrop" alt="Sherpa backdrop" />
      </div>
      <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
