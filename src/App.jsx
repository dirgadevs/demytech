import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <About />
      <Footer />
    </div>
  );
}

export default App;