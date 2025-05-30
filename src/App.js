import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <main>
        {/* Home section is part of the Header in this layout */}
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;