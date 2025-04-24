
import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-brand-blue/20 to-brand-teal/20 rounded-full animate-float blur-xl"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-brand-teal/20 to-brand-blue/20 rounded-full animate-float delay-200 blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-r from-brand-blue/20 to-brand-teal/20 rounded-full animate-float delay-500 blur-xl"></div>
      
      {/* Growing clients visualization */}
      <div className="absolute bottom-10 left-10 transform rotate-12 animate-float delay-300">
        <div className="w-24 h-24 bg-gradient-to-r from-brand-blue/30 to-brand-teal/30 rounded-lg backdrop-blur-sm"></div>
      </div>
      <div className="absolute top-20 right-20 transform -rotate-12 animate-float delay-700">
        <div className="w-20 h-20 bg-gradient-to-r from-brand-teal/30 to-brand-blue/30 rounded-lg backdrop-blur-sm"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
