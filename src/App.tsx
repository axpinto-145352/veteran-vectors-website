import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AnimatedMAaaS from './components/AnimatedMAaaS';
import FAQs from './components/Testimonials';
import EmailCapture from './components/EmailCapture';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-vv-dark">
      <Header />
      <Hero />
      <Services />
      <AnimatedMAaaS />
      <FAQs />
      <EmailCapture />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;