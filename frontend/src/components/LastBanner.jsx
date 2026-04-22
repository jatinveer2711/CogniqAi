import React from 'react';

export default function LastBanner() {
  return (
    <div className="w-full font-sans">
      
      {/* Top Banner Section */}
      <div className="bg-[#f0f2f5] px-6 py-4 md:px-16 flex flex-col md:flex-row justify-between items-center border-b border-gray-200">
        <div className="flex items-center gap-4">
          {/* Icon Circle */}
          <div className="bg-[#3b49df] p-2 rounded-full">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-[#1a1a1a] text-lg">Unlock AI Potential</h3>
            <p className="text-gray-600 text-sm">Discover how we can transform your operations</p>
          </div>
        </div>
        
        <button className="mt-4 md:mt-0 px-6 py-2 border border-gray-800 rounded-lg font-medium hover:bg-black hover:text-white transition-all flex items-center gap-2 group">
          Explore Solutions 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* Hero Action Section */}
      <div className="px-4 md:px-10 py-10">
        <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl">
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
            alt="Team collaboration" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-6 backdrop-blur-[2px]">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Ready to transform Your Workflow?
            </h2>
            <p className="text-white/90 text-sm md:text-lg max-w-2xl mb-8 leading-relaxed">
              Let's build a clear, actionable roadmap to solve your biggest operational challenges with AI.
            </p>
            
            {/* Action Button */}
            <button className="px-8 py-3 bg-[#a2bdf2]/80 hover:bg-[#a2bdf2] text-[#1a1a1a] font-bold rounded-xl backdrop-blur-md transition-all shadow-lg flex items-center gap-2 group">
              Book a Strategy Call 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

