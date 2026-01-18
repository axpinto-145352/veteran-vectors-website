import React from 'react';
import { ArrowRight, Zap, Target, Command } from 'lucide-react';
import NeuralNetwork from './NeuralNetwork';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-vv-dark bg-geometric relative overflow-hidden">
      {/* Interactive AI Neural Network Background */}
      <NeuralNetwork />

      {/* Content - keep above the background */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-6">
              <Command className="h-6 w-6 text-vv-teal" />
              <span className="text-vv-teal font-semibold font-military tracking-wider">AI AUTOMATION FOR SMALL BUSINESSES</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-military">
              SCALE YOUR BUSINESS
              <span className="gradient-text block">WITH AI AUTOMATION</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Stop wasting time on repetitive tasks. Veteran Vectors delivers custom AI automation
              solutions that help small businesses cut inefficiencies by up to 30%, streamline operations,
              and focus on what matters most - growing your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://calendly.com/anthony-veteranvectors/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-vv-teal to-vv-cyan text-vv-dark px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 glow-teal hover-glow font-military"
              >
                <span>Book Your Free Strategy Call</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center w-full">
              <div className="flex items-center space-x-3 justify-center">
                <Zap className="h-8 w-8 text-vv-teal" />
                <div>
                  <div className="text-2xl font-bold gradient-text font-military">30%</div>
                  <div className="text-sm text-gray-400">Time Savings</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <Command className="h-8 w-8 text-vv-teal" />
                <div>
                  <div className="text-2xl font-bold gradient-text font-military">Custom</div>
                  <div className="text-sm text-gray-400">Solutions</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <Target className="h-8 w-8 text-vv-teal" />
                <div>
                  <div className="text-2xl font-bold gradient-text font-military">ROI</div>
                  <div className="text-sm text-gray-400">Focused</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
