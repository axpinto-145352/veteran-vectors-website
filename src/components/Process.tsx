import React from 'react';
import { Search, Cog, Rocket, BarChart, Command } from 'lucide-react';

const MAaaS = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Assessment',
      description: 'We conduct a comprehensive analysis of your current workflows, identify bottlenecks, and map automation opportunities with the highest ROI potential.',
      timeline: 'Week 1-2'
    },
    {
      icon: Cog,
      title: 'MAaaS Design & Build',
      description: 'Our team designs and builds custom AI automation systems tailored to your specific industry requirements, compliance needs, and existing tech stack.',
      timeline: 'Weeks 3-6'
    },
    {
      icon: Rocket,
      title: 'Deployment & Integration',
      description: 'We deploy automation systems in your secure environment with comprehensive training, documentation, and seamless integration with existing workflows.',
      timeline: 'Weeks 7-8'
    },
    {
      icon: BarChart,
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring, performance optimization, and iterative improvements to ensure maximum efficiency and measurable ROI.',
      timeline: 'Ongoing'
    }
  ];

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

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-vv-light-gray rounded-lg p-8 shadow-lg text-center h-full border border-vv-teal/20 hover:border-vv-teal/40 transition-all hover-lift">
                <div className="bg-gradient-to-r from-vv-teal to-vv-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 glow-teal">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-sm text-vv-teal font-semibold mb-2 font-military">{step.timeline}</div>
                <h3 className="text-xl font-bold text-white mb-4 font-military">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-vv-teal"></div>
                </div>
              )}
            </div>
          ))}
        </div>

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

export default MAaaS;