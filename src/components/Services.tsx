import React from 'react';
import { Building2, TrendingUp, Home, FileText, Command, Brain, Mail, Calendar, FileCheck, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Mail,
      title: 'Email & Communication\nAutomation',
      description: 'Automate customer responses, lead follow-ups, and internal communications. Never miss an opportunity with intelligent email management.',
      features: ['Automated email responses', 'Lead nurturing sequences', 'Customer support automation', 'Meeting scheduling'],
      image: './u1283965911_Aim_for_30002000_px_hyper-realistic_cinematic_lig_1074521f-0072-4511-8689-f5dfb7696758_2 (1).png'
    },
    {
      icon: FileCheck,
      title: 'Document Processing\n& Data Entry',
      description: 'Stop wasting hours on manual data entry. Automate invoice processing, form filling, and document management.',
      features: ['Invoice & receipt processing', 'Form automation', 'Data extraction & entry', 'Document classification'],
      image: './VC.jpg.png'
    },
    {
      icon: Users,
      title: 'Customer Service\n& Sales',
      description: 'Scale your customer service without scaling your team. Automate lead qualification, customer onboarding, and support.',
      features: ['Lead qualification', 'Customer onboarding flows', 'Support ticket automation', 'CRM integration'],
      image: './realestate.jpg.png'
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: 'Custom AI Solutions',
      description: 'Every business is unique. We build automation tailored to your specific workflows and challenges.'
    },
    {
      icon: Command,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and software. No complicated setup required.'
    },
    {
      icon: FileText,
      title: 'Ongoing Support',
      description: 'We don\'t just build and leave. Get continuous optimization and support as your business grows.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-vv-gray bg-geometric">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-military">
            How We Help Your Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From automating repetitive tasks to building custom AI workflows, we help small businesses
            work smarter, save time, and focus on growth. Here's what we can automate for you:
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
              Why Choose Veteran Vectors?
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We're not just consultants - we're your automation partner. Built by veterans who understand
              discipline, reliability, and getting results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-12 w-12 text-vv-cyan mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-3 font-military">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://calendly.com/anthony-veteranvectors/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-vv-teal to-vv-cyan text-vv-dark px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center space-x-2 glow-teal hover-glow font-military"
            >
              <span>Book Your Free Strategy Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
