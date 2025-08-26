import React, { useState } from 'react';
import { Mail, Download, TrendingUp, Command, FileText, ArrowRight } from 'lucide-react';

const EmailCapture = () => {
  const reportFeatures = [
    {
      icon: TrendingUp,
      title: 'Industry Trends',
      description: 'Latest AI adoption trends in defense, VC, and real estate'
    },
    {
      icon: Command,
      title: 'Compliance Updates',
      description: 'CMMC, NIST, and regulatory changes affecting your industry'
    },
    {
      icon: FileText,
      title: 'Case Studies',
      description: 'Real-world examples of successful automation implementations'
    }
  ];

  return (
    <section id="email-capture" className="py-20 bg-gradient-to-br from-vv-dark to-vv-gray bg-geometric">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <Mail className="h-6 w-6 text-vv-teal" />
              <span className="text-vv-teal font-semibold font-military tracking-wider">FREE INTEL BRIEFING</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 font-military">
              THE VECTOR REPORT
              <span className="gradient-text block text-3xl mt-2">Intelligence Briefing</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Real stories. Practical AI. Actionable business insights delivered to your inbox.
              Get exclusive intelligence on defense tech, venture capital/financial services, and real estate automation.
            </p>

            <div className="space-y-6 mb-8">
              {reportFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <feature.icon className="h-5 w-5 text-vv-teal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 font-military text-white">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}

              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-sm">Your email is secure. Unsubscribe anytime.</span>
              </div>
            </div>
          </div>

          <div className="bg-vv-light-gray rounded-2xl p-8 shadow-2xl border border-vv-teal/30 glow-teal">
            <div className="text-center mb-8">
              <Download className="h-12 w-12 text-vv-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2 font-military">
                THE VECTOR REPORT
              </h3>
              <p className="text-gray-300">
                Get exclusive intelligence on defense tech, venture capital/financial services, and real estate automation
              </p>
            </div>

            <div className="text-center">
              <a 
                href="/newsletter.html"
                className="bg-gradient-to-r from-vv-teal to-vv-cyan text-vv-dark px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center space-x-2 glow-teal hover-glow font-military"
              >
                <span>ENLIST FOR INTEL</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;