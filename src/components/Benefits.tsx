import React from 'react';
import { CheckCircle, Clock, DollarSign, Command, Users, Zap } from 'lucide-react';

const Benefits = () => {
  const stats = [
    { number: '30%', label: 'Efficiency Improvement', icon: Zap },
    { number: '3-6', label: 'Months to Full ROI', icon: Clock },
    { number: '100%', label: 'Compliance Ready', icon: Command },
    { number: '24/7', label: 'System Uptime', icon: CheckCircle }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Measurable ROI',
      description: 'See quantifiable returns within 3-6 months through reduced manual work and faster deal flow processing.'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Free up your team from administrative tasks to focus on high-value strategic work and client relationships.'
    },
    {
      icon: Command,
      title: 'Built-in Compliance',
      description: 'All systems designed with CMMC, NIST, and industry-specific compliance requirements from day one.'
    },
    {
      icon: Users,
      title: 'Team Adoption',
      description: 'Our automation handles the admin layer, not SME judgment—leading to higher team adoption rates.'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-vv-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-military">
            Why Teams Choose Veteran Vectors
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just implement AI—we deliver complete automation systems that integrate 
            seamlessly with your existing workflows while maintaining the highest security standards.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-12 w-12 text-vv-teal mx-auto mb-4" />
              <div className="text-4xl font-bold gradient-text mb-2 font-military">{stat.number}</div>
              <div className="text-gray-300 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 font-military">
              Addressing Common Objections
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-vv-teal pl-6 bg-vv-light-gray p-4 rounded-r-lg">
                <h4 className="text-xl font-semibold text-white mb-2 font-military">
                  "Security/compliance risk"
                </h4>
                <p className="text-gray-300">
                  We don't touch CUI; everything runs in your tenancy; deliverables live in your repos; 
                  happy to be added to your NDAs and follow your access controls.
                </p>
              </div>
              
              <div className="border-l-4 border-vv-cyan pl-6 bg-vv-light-gray p-4 rounded-r-lg">
                <h4 className="text-xl font-semibold text-white mb-2 font-military">
                  "We tried AI; SMEs hated it"
                </h4>
                <p className="text-gray-300">
                  We automate the admin layer (triage, matrices, boilerplates), not SME judgment. 
                  Adoption improves when they see less grunt work.
                </p>
              </div>
            </div>
          </div>

          <div>
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Team collaboration and AI automation"
              className="rounded-lg shadow-lg w-full border border-vv-teal/30"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 border border-vv-teal/20 rounded-lg hover:shadow-lg transition-all bg-vv-light-gray hover:border-vv-teal/40 hover-lift">
              <benefit.icon className="h-12 w-12 text-vv-teal mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3 font-military">{benefit.title}</h4>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://clickveteranvectors.com/60"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-vv-teal to-vv-cyan text-vv-dark px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center space-x-2 glow-teal hover-glow font-military"
          >
            <span>Schedule a 30 min Strategy Call</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;