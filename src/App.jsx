import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certifications from './components/Certifications';
import ScrollToTop from './components/ScrollToTop'; // Optional
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications/>
        <Contact />
      </main>
      <Footer />
      <ScrollToTop /> {/* Optional */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;