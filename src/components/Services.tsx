import React from 'react';
import { Building2, TrendingUp, Home, FileText, Command, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Defense Tech',
      description: 'RFP triage, compliance matrices, proposal automation, and Pink/Red-Team prep for SBIR/STTR Phase II/III awardees.',
      features: ['Auto-summary & compliance checks', 'Past-performance libraries', 'Boilerplate generation', 'No CUI/ITAR data processing'],
      image: './u1283965911_Aim_for_30002000_px_hyper-realistic_cinematic_lig_1074521f-0072-4511-8689-f5dfb7696758_2 (1).png'
    },
    {
      icon: TrendingUp,
      title: 'Venture Capital\nFinancial Services',
      description: 'Deal flow automation, due diligence streamlining, and portfolio operations optimization for venture capital firms.',
      features: ['Automated deal screening', 'Due diligence workflows', 'Portfolio tracking', 'Investment committee prep'],
      image: './VC.jpg.png'
    },
    {
      icon: Home,
      title: 'Real Estate Operations',
      description: 'Process optimization, document automation, and workflow management for real estate teams and property management.',
      features: ['Document processing', 'Workflow automation', 'Compliance tracking', 'Performance analytics'],
      image: './realestate.jpg.png'
    }
  ];

  const compliance = [
    {
      icon: FileText,
      title: 'CMMC/NIST Evidence Mapping',
      description: 'Map existing policies to structured templates with living trackers and gap flags.'
    },
    {
      icon: Command,
      title: 'Security & Compliance',
      description: 'Client tenancy, no logs, NDAs, and data processing agreements built-in.'
    },
    {
      icon: Brain,
      title: 'Intel & Capture Support',
      description: 'Daily intel briefs from DIU/AFWERX/SAM.gov and capture pipeline management.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-vv-gray bg-geometric">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-military">
            Sectors We Serve
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Managed Automation as a Service (MAaaS) - End-to-end AI systems designed specifically for Defense Tech, Venture Capital, and Real Estate professionals who need military-grade reliability and compliance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-vv-light-gray rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-vv-teal/20 hover:border-vv-teal/40 hover-lift">
              <div className="mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg border border-vv-teal/30"
                />
              </div>
              <service.icon className="h-12 w-12 text-vv-teal mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4 font-military whitespace-pre-line">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-vv-teal rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-vv-dark rounded-2xl p-8 lg:p-12 border border-vv-teal/30 glow-teal">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 font-military">
              Defense Work Guardrails & Compliance
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We operate within strict security parameters, processing only unclassified, 
              public, and client-approved data with built-in compliance frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {compliance.map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-12 w-12 text-vv-cyan mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-3 font-military">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
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
      </div>
    </section>
  );
};

export default Services;
