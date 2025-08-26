import React, { useState, useEffect } from 'react';
import { Search, Cog, Rocket, BarChart, Command, ChevronRight } from 'lucide-react';

const AnimatedMAaaS = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      icon: Search,
      title: 'Discovery & Assessment',
      shortDescription: 'Comprehensive workflow analysis and automation opportunity mapping',
      detailedDescription: 'We conduct a comprehensive analysis of your current workflows, identify bottlenecks, and map automation opportunities with the highest ROI potential. Our team performs security assessments, compliance reviews, and stakeholder interviews to understand your unique requirements.',
      timeline: 'Week 1-2',
      deliverables: ['Workflow Analysis Report', 'ROI Opportunity Matrix', 'Security Assessment', 'Implementation Roadmap']
    },
    {
      icon: Cog,
      title: 'MAaaS Design & Build',
      shortDescription: 'Custom AI automation systems tailored to your industry requirements',
      detailedDescription: 'Our team designs and builds custom AI automation systems tailored to your specific industry requirements, compliance needs, and existing tech stack. We develop secure, scalable solutions that integrate seamlessly with your current infrastructure.',
      timeline: 'Weeks 3-6',
      deliverables: ['System Architecture', 'Custom AI Models', 'Integration Modules', 'Testing Framework']
    },
    {
      icon: Rocket,
      title: 'Deployment & Integration',
      shortDescription: 'Secure deployment with comprehensive training and documentation',
      detailedDescription: 'We deploy automation systems in your secure environment with comprehensive training, documentation, and seamless integration with existing workflows. Our team ensures zero downtime deployment and provides hands-on training for your staff.',
      timeline: 'Weeks 7-8',
      deliverables: ['Production Deployment', 'User Training', 'Documentation Package', 'Support Protocols']
    },
    {
      icon: BarChart,
      title: 'Monitoring & Optimization',
      shortDescription: 'Continuous monitoring and performance optimization for maximum ROI',
      detailedDescription: 'Continuous monitoring, performance optimization, and iterative improvements to ensure maximum efficiency and measurable ROI. We provide 24/7 system monitoring, regular performance reports, and ongoing optimization recommendations.',
      timeline: 'Ongoing',
      deliverables: ['Performance Dashboard', 'Monthly Reports', 'Optimization Updates', '24/7 Support']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="maas" className="py-20 bg-vv-gray bg-geometric">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-military">
            MAaaS Implementation Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our Managed Automation as a Service (MAaaS) approach ensures every AI system 
            delivers measurable results while maintaining military-grade security and compliance standards.
          </p>
        </div>

        {/* Interactive Process Steps */}
        <div className="relative mb-16">
          {/* Progress Bar */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-vv-light-gray transform -translate-y-1/2 z-0">
            <div 
              className="h-full bg-gradient-to-r from-vv-teal to-vv-cyan transition-all duration-1000 ease-in-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Step Indicators */}
          <div className="relative z-10 flex justify-between items-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => setActiveStep(index)}
              >
                {/* Step Circle */}
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 transform ${
                    index <= activeStep 
                      ? 'bg-gradient-to-r from-vv-teal to-vv-cyan scale-110 glow-teal' 
                      : 'bg-vv-light-gray border-2 border-vv-teal/30'
                  } ${hoveredStep === index ? 'scale-125' : ''}`}
                >
                  <step.icon 
                    className={`h-8 w-8 transition-colors duration-300 ${
                      index <= activeStep ? 'text-vv-dark' : 'text-vv-teal'
                    }`} 
                  />
                </div>

                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-vv-dark border-2 border-vv-teal rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-vv-teal font-military">{index + 1}</span>
                </div>

                {/* Hover Tooltip */}
                {hoveredStep === index && (
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 bg-vv-dark border border-vv-teal/30 rounded-lg p-6 shadow-2xl z-20 animate-fadeInUp">
                    <div className="text-center">
                      <div className="text-sm text-vv-teal font-semibold mb-2 font-military">{step.timeline}</div>
                      <h4 className="text-lg font-bold text-white mb-3 font-military">{step.title}</h4>
                      <p className="text-gray-300 text-sm mb-4">{step.detailedDescription}</p>
                      
                      <div className="text-left">
                        <h5 className="text-sm font-semibold text-vv-teal mb-2 font-military">Key Deliverables:</h5>
                        <ul className="space-y-1">
                          {step.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-center text-xs text-gray-300">
                              <ChevronRight className="h-3 w-3 text-vv-teal mr-2 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Tooltip Arrow */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-vv-dark border-l border-t border-vv-teal/30 rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <div className="bg-vv-light-gray rounded-2xl p-8 lg:p-12 border border-vv-teal/30 mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-vv-teal to-vv-cyan rounded-full w-20 h-20 flex items-center justify-center glow-teal">
                {React.createElement(steps[activeStep].icon, { className: "h-10 w-10 text-vv-dark" })}
              </div>
              <div className="text-left">
                <div className="text-sm text-vv-teal font-semibold font-military">{steps[activeStep].timeline}</div>
                <h3 className="text-2xl font-bold text-white font-military">{steps[activeStep].title}</h3>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              {steps[activeStep].detailedDescription}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-vv-teal mb-4 font-military">Key Activities</h4>
                <div className="space-y-2">
                  {steps[activeStep].deliverables.slice(0, 2).map((deliverable, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <ChevronRight className="h-4 w-4 text-vv-teal mr-3 flex-shrink-0" />
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-vv-teal mb-4 font-military">Deliverables</h4>
                <div className="space-y-2">
                  {steps[activeStep].deliverables.slice(2).map((deliverable, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <ChevronRight className="h-4 w-4 text-vv-teal mr-3 flex-shrink-0" />
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step Navigation */}
        <div className="flex justify-center space-x-4 mb-16">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeStep 
                  ? 'bg-vv-teal scale-125' 
                  : 'bg-vv-light-gray hover:bg-vv-teal/50'
              }`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-vv-teal to-vv-cyan rounded-2xl p-8 lg:p-12 text-center text-vv-dark glow-cyan">
          <Command className="h-16 w-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-6 font-military">READY FOR MAaaS TRANSFORMATION?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join defense tech, venture capital/financial services, and real estate leaders who've already automated their way to 30% efficiency gains with our MAaaS platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://clickveteranvectors.com/60"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-vv-dark text-vv-teal hover:bg-vv-gray px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center font-military border border-vv-dark hover:border-vv-teal"
            >
              Schedule a 30 min Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedMAaaS;
