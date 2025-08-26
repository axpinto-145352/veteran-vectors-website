import React from 'react';
import { HelpCircle, Command } from 'lucide-react';

const FAQs = () => {
  const faqs = [
    {
      question: "How do you ensure data security and compliance?",
      answer: "We operate within strict security parameters, processing only unclassified, public, and client-approved data. All systems run in your tenancy, deliverables live in your repos, and we're happy to be added to your NDAs and follow your access controls. Built-in CMMC and NIST compliance frameworks included."
    },
    {
      question: "What if our team has tried AI before and adoption was poor?",
      answer: "We automate the admin layer (triage, matrices, boilerplates), not SME judgment. This approach leads to higher adoption rates because your experts see less grunt work and can focus on high-value strategic decisions where their expertise matters most."
    },
    {
      question: "How quickly can we see ROI from MAaaS implementation?",
      answer: "Most clients see measurable efficiency gains within 3-6 months. Our phased approach ensures you start seeing value early in the process, with full ROI typically achieved within the first year of implementation."
    },
    {
      question: "Do you work with classified or sensitive data?",
      answer: "No, we don't touch CUI, classified, or ITAR-controlled data. We work exclusively with unclassified, public, and client-approved information. All processing happens in your secure environment with full audit trails."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We focus on three key sectors: Defense Tech (SBIR/STTR awardees, contractors), Venture Capital (deal flow, due diligence), and Real Estate (operations, compliance). Our team has deep domain expertise in each vertical."
    },
    {
      question: "How is MAaaS different from other AI consulting?",
      answer: "MAaaS is end-to-end managed automation, not just consulting. We design, build, deploy, and maintain your AI systems. You get dedicated automation infrastructure without the overhead of building an internal AI team."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-vv-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-military">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Common questions about our MAaaS platform and how we deliver 
            military-grade AI automation for your industry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-vv-light-gray rounded-xl p-8 border border-vv-teal/20 hover:border-vv-teal/40 transition-all">
              <div className="flex items-start space-x-4">
                <HelpCircle className="h-6 w-6 text-vv-teal mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 font-military">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://clickveteranvectors.com/60"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-vv-teal to-vv-cyan text-vv-dark px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center space-x-2 glow-teal hover-glow font-military"
          >
            <Command className="h-5 w-5" />
            <span>Schedule a 30 min Strategy Call</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQs;