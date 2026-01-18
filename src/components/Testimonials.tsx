import React from 'react';
import { Quote, Linkedin } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Pfautz",
      title: "CEO, Authentic Consortium",
      company: "Healthcare Technology Integrator",
      text: "If you want the best AI architect, I can think of no one better than Mr. Anthony Pinto. Anthony has a unique ability to take the best of AI, tailor it specifically to you and your vision and then weave it into business processes seamlessly and intelligently...and do so with a smile on his face! So many IT vendors are painful to work with but Anthony not only brings the technical acumen but is easy to work with, kind and understanding to those less technically skilled. Highest Recommendation Possible!!",
      linkedinUrl: "https://www.linkedin.com/in/anthony-pinto"
    },
    {
      name: "Tim Berthold",
      title: "Assistant VP, Heffernan Insurance Broker",
      company: "Strategic Risk Advisor | Ex-McKinsey & U.S. Navy Submariner",
      text: "Anthony took a process that was requiring 10 hours of my VA's time and stripped it down to 10 minutes with a few keystrokes. I don't have the bandwidth to learn the latest and greatest in AI and agentic so am lucky to count on him as my go-to for building out busdev and operations automations. Looking forward to handling more projects with him.",
      linkedinUrl: "https://www.linkedin.com/in/anthony-pinto"
    },
    {
      name: "Kyle Briggs",
      title: "Founder, Defense Tech Signals",
      company: "The military doesn't need disruption. It needs reliability.",
      text: "Anthony put together an awesome work flow for me. I used to have to go in to multiple documents, run multiple queries across 4 different platforms to output some analysis. After we chatted about my software stack and requirements, Anthony crushed a completely customized solution to save me hours each week and actually help me get ahead of things. Super dedicated to the craft, took time to trouble shoot small nitpicks and give me the product that I wanted. Couldn't recommend more.",
      linkedinUrl: "https://www.linkedin.com/in/anthony-pinto"
    },
    {
      name: "Brian Talbott, CFP®, CTFA",
      title: "Founder, Talbott Bookkeeping Services",
      company: "Helping small businesses & nonprofits gain financial clarity",
      text: "Anthony is an expert at designing smart, practical processes and selecting the right tools to support them. As a solo-preneur without staff to delegate to, his skill set has been invaluable in helping me automate and eliminate manual, repetitive work—freeing up time and capacity to focus on where I can add the most value.",
      linkedinUrl: "https://www.linkedin.com/in/anthony-pinto"
    },
    {
      name: "Ismat Yassin",
      title: "Senior Government Affairs Manager",
      company: "Biodegradable Products Institute",
      text: "I highly recommend Veteran Vectors and Anthony Pinto for anyone looking to bring structure, efficiency, and strategy to their job search. Anthony worked closely with me to identify my needs and challenges and helped automate nearly every aspect of my search and application process. From identifying relevant roles, to tailoring resumes for specific positions, to tracking applications and follow-ups in an organized, transparent way, Veteran Vectors' automation systems provided me with invaluable amount of information in a simplified and easy to use format.",
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