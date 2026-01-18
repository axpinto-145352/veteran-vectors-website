import React, { useState, useEffect } from 'react';
import { Phone, X, Command } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm">
      <div className="bg-gradient-to-r from-vv-teal to-vv-cyan text-vv-dark p-4 rounded-lg shadow-2xl border border-vv-teal animate-pulse-glow">
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 bg-vv-dark hover:bg-vv-gray text-white rounded-full p-1 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="flex items-center space-x-3 mb-3">
          <Command className="h-6 w-6 text-vv-dark" />
          <div>
            <div className="font-semibold font-military">READY TO AUTOMATE?</div>
            <div className="text-sm opacity-80">Limited spots available this week</div>
          </div>
        </div>

        <a
          href="https://calendly.com/anthony-veteranvectors/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-vv-dark text-vv-teal hover:bg-vv-gray py-2 px-4 rounded-lg font-bold text-center transition-all transform hover:scale-105 font-military"
        >
          Book Your Free Strategy Call
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;