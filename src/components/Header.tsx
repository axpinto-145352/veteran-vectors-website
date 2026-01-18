import React, { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-vv-dark/95 backdrop-blur-sm border-b border-vv-teal/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-3">
              <img 
                src="./ChatGPT Image Aug 22, 2025, 03_52_13 PM.png" 
                alt="Veteran Vectors Logo" 
                className="h-10 w-auto"
              />
              <span className="text-white text-xl font-bold font-military">VETERAN VECTORS</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/newsletter.html"
              className="text-gray-300 hover:text-vv-teal transition-colors font-medium"
            >
              The Vector Report
            </a>
            <a href="#services" className="text-gray-300 hover:text-vv-teal transition-colors font-medium">Services</a>
            <a href="#testimonials" className="text-gray-300 hover:text-vv-teal transition-colors font-medium">Testimonials</a>
            <a href="#maas" className="text-gray-300 hover:text-vv-teal transition-colors font-medium">How It Works</a>
            <a href="/faq.html" className="text-gray-300 hover:text-vv-teal transition-colors font-medium">FAQs</a>
            <button
              onClick={openCalendly}
              className="flex items-center space-x-2 bg-gradient-to-r from-vv-teal to-vv-cyan text-vv-dark px-4 py-2 rounded-lg font-bold transition-all hover:scale-105 font-military"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Free Call</span>
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-vv-teal/20">
            <nav className="flex flex-col space-y-4">
              <a href="/newsletter.html" className="text-gray-300 hover:text-vv-teal transition-colors">The Vector Report</a>
              <a href="#services" className="text-gray-300 hover:text-vv-teal transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-300 hover:text-vv-teal transition-colors">Testimonials</a>
              <a href="#maas" className="text-gray-300 hover:text-vv-teal transition-colors">How It Works</a>
              <a href="/faq.html" className="text-gray-300 hover:text-vv-teal transition-colors">FAQs</a>
              <button
                onClick={openCalendly}
                className="bg-gradient-to-r from-vv-teal to-vv-cyan text-vv-dark px-4 py-2 rounded-lg font-bold transition-all hover:scale-105 font-military text-center"
              >
                Book Free Call
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>

      {/* Calendly Sidebar */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            className="flex-1 bg-black/50 backdrop-blur-sm" 
            onClick={closeCalendly}
          ></div>
          <div className="w-full max-w-md bg-vv-dark border-l border-vv-teal/20 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-vv-teal/20">
              <h3 className="text-lg font-semibold text-white font-military">Schedule Strategy Call</h3>
              <button
                onClick={closeCalendly}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="h-full overflow-hidden">
              <iframe
                src="https://calendly.com/anthony-veteranvectors/30min"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a call with Veteran Vectors"
                className="calendly-inline-widget"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
