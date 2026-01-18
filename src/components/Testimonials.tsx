import React from 'react';
import { Quote, Linkedin } from 'lucide-react';

const Testimonials = () => {
  // Note: Replace these placeholder testimonials with actual LinkedIn recommendations
  const testimonials = [
    {
      name: "Client Name 1",
      title: "Position at Company",
      company: "Company Name",
      text: "Placeholder testimonial text from LinkedIn. This will be replaced with actual recommendations from your LinkedIn profile.",
      linkedinUrl: "https://www.linkedin.com/in/anthony-pinto"
    },
    {
      name: "Client Name 2",
      title: "Position at Company",
      company: "Company Name",
      text: "Placeholder testimonial text from LinkedIn. This will be replaced with actual recommendations from your LinkedIn profile.",
      linkedinUrl: "https://www.linkedin.com/in/anthony-pinto"
    },
    {
      name: "Client Name 3",
      title: "Position at Company",
      company: "Company Name",
      text: "Placeholder testimonial text from LinkedIn. This will be replaced with actual recommendations from your LinkedIn profile.",
      linkedinUrl: "https://www.linkedin.com/in/anthony-pinto"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-vv-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Linkedin className="h-6 w-6 text-vv-teal" />
            <span className="text-vv-teal font-semibold font-military tracking-wider">CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 font-military">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners say about working with Veteran Vectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-vv-light-gray rounded-xl p-8 border border-vv-teal/20 hover:border-vv-teal/40 transition-all hover-lift relative">
              <Quote className="h-10 w-10 text-vv-teal/30 absolute top-6 right-6" />
              <div className="relative z-10">
                <p className="text-gray-300 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-vv-teal/20 pt-4">
                  <p className="text-white font-bold font-military">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                  <p className="text-sm text-vv-teal">{testimonial.company}</p>
                  <a
                    href={testimonial.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-gray-400 hover:text-vv-teal transition-colors mt-2"
                  >
                    <Linkedin className="h-3 w-3" />
                    <span>View on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://calendly.com/anthony-veteranvectors/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-vv-teal to-vv-cyan text-vv-dark px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center space-x-2 glow-teal hover-glow font-military"
          >
            <span>Start Your Automation Journey</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;