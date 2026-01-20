import React from 'react';
import { Target, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Target,
      stat: "150+",
      label: "Hours Gained/Month"
    },
    {
      icon: Users,
      stat: "$100k+",
      label: "Revenue/Time Value"
    },
    {
      icon: TrendingUp,
      stat: ">90%",
      label: "Time Savings"
    },
    {
      icon: Award,
      stat: "50%+",
      label: "Efficiency Gains"
    }
  ];

  return (
    <section id="about" className="py-20 bg-vv-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="./anthony-pinto-headshot.jpg"
                alt="Anthony Pinto - Founder of Veteran Vectors"
                className="rounded-2xl shadow-2xl border-4 border-vv-teal/30 w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-vv-teal to-vv-cyan rounded-xl p-6 shadow-xl max-w-xs">
                <p className="text-vv-dark font-bold font-military text-lg">
                  "Every business deserves enterprise-grade automation"
                </p>
                <p className="text-vv-dark text-sm mt-2">- Anthony Pinto</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-vv-teal/10 to-vv-cyan/10 rounded-2xl -z-10 transform translate-x-4 translate-y-4"></div>
          </div>

          {/* Content Section */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <Award className="h-6 w-6 text-vv-teal" />
              <span className="text-vv-teal font-semibold font-military tracking-wider">MEET YOUR AUTOMATION PARTNER</span>
            </div>

            <h2 className="text-4xl font-bold mb-6 font-military">
              Built by a Veteran,
              <span className="gradient-text block">Designed for Your Success</span>
            </h2>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Hi, I'm Anthony Pinto, founder of Veteran Vectors. As a military veteran turned AI automation specialist,
              I've seen firsthand how the right systems can transform operations—whether on the battlefield or in business.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              My mission is simple: bring the same level of precision, reliability, and strategic thinking that powers
              military operations to small businesses everywhere. I believe every business owner deserves access to
              world-class automation—without needing a technical degree or a massive budget.
            </p>

            <div className="bg-vv-light-gray rounded-xl p-6 mb-8 border border-vv-teal/20">
              <h3 className="text-xl font-bold mb-4 font-military text-vv-teal">My Approach</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-vv-teal mr-3">→</span>
                  <span><strong>Listen First:</strong> I take time to understand your unique challenges and workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vv-teal mr-3">→</span>
                  <span><strong>Build Smart:</strong> Custom solutions tailored to your needs, not cookie-cutter templates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vv-teal mr-3">→</span>
                  <span><strong>Deliver Results:</strong> Measurable time savings and efficiency gains you can see</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vv-teal mr-3">→</span>
                  <span><strong>Support Always:</strong> I'm here for the long haul, adapting as your business grows</span>
                </li>
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center bg-vv-gray rounded-lg p-4 border border-vv-teal/20">
                  <achievement.icon className="h-8 w-8 text-vv-teal mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text font-military">{achievement.stat}</div>
                  <div className="text-xs text-gray-400 mt-1">{achievement.label}</div>
                </div>
              ))}
            </div>

            <a
              href="https://calendly.com/anthony-veteranvectors/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-vv-teal to-vv-cyan text-vv-dark px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center space-x-2 glow-teal hover-glow font-military"
            >
              <span>Let's Talk About Your Business</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
