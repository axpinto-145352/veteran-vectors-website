import React from 'react';
import { Command, Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vv-dark text-white py-16 border-t border-vv-teal/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="./ChatGPT Image Aug 22, 2025, 03_52_13 PM.png" 
                alt="Veteran Vectors Logo" 
                className="h-12 w-auto"
              />
            </div>
            <div className="mb-4">
              <span className="text-vv-teal font-military text-lg tracking-wider">COMMAND. CODE. CONQUER.</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Military-grade AI automation solutions for Defense Tech, Venture Capital/Financial Services, and Real Estate. 
              Delivering Managed Automation as a Service (MAaaS) with measurable ROI and built-in compliance.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61578935486998#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vv-teal transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/veteranvectors/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vv-teal transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/anthony-pinto/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vv-teal transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://x.com/AnthonyP145352" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vv-cyan transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 font-military text-vv-teal">SECTORS WE SERVE</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#services" className="hover:text-vv-teal transition-colors">Defense Tech Automation</a></li>
              <li><a href="#services" className="hover:text-vv-teal transition-colors">Venture Capital/Financial Services</a></li>
              <li><a href="#services" className="hover:text-vv-teal transition-colors">Real Estate</a></li>
              <li><a href="#maas" className="hover:text-vv-teal transition-colors">MAaaS Process</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 font-military text-vv-teal">CONTACT</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-vv-teal" />
                <span>anthony@veteranvectors.io</span>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://clickveteranvectors.com/60"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-vv-teal to-vv-cyan text-vv-dark px-6 py-3 rounded-lg font-bold transition-all inline-block hover-glow font-military"
              >
                Schedule a 30 min Strategy Call
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-vv-teal/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Veteran Vectors. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-vv-teal transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-vv-teal transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-vv-teal transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
