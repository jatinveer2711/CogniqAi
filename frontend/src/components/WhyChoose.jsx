import React from 'react';
// These icons are close replicas to those in the screenshot.
import { HiShieldCheck, HiScale, HiChip, HiLightningBolt } from 'react-icons/hi'; // From 'react-icons/hi'
import { IoDiamondOutline } from 'react-icons/io5'; // From 'react-icons/io5' for the final icon

export default function WhyChooseUs() {
  // 1. Data Object (Exactly as seen in the image)
  const reasons = [
    {
      icon: <HiShieldCheck className="w-6 h-6 text-indigo-700" />,
      title: "High-Trust Engineering",
      desc: "Research-backed methods with transparent communication.",
    },
    {
      icon: <HiChip className="w-6 h-6 text-indigo-700" />,
      title: "Gen AI Expertise",
      desc: "Deep experience with LLMs and custom AI.",
    },
    {
      icon: <HiScale className="w-6 h-6 text-indigo-700" />,
      title: "Built for Scale",
      desc: "Your product grows without breaking.",
    },
    {
      icon: <IoDiamondOutline className="w-6 h-6 text-indigo-700" />,
      title: "User-Centered Design",
      desc: "Every feature is intuitive and purposeful.",
    },
  ];

  return (
    // 2. Main Section Container (Matching background/padding)
    <section className="bg-gray-50 py-20 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-16">
        
        {/* --- LEFT SIDE: HEADING & SUBTEXT --- */}
        <div className="md:col-span-5 flex flex-col justify-start">
          <h2 className="text-4xl md:text-[36px] font-bold text-gray-900 tracking-tight leading-snug">
            WHY CHOOSE US
          </h2>
          {/* Subtle underline matched from screenshot */}
          <div className="w-16 h-1 bg-indigo-600 mt-3 mb-6"></div>
          
          <p className="text-gray-600 text-lg md:text-[17px] leading-relaxed max-w-sm">
            Passion for precision, commitment to quality.
          </p>
        </div>

        {/* --- RIGHT SIDE: FEATURE CARDS --- */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          {reasons.map((reason, index) => (
            // 3. The Individual Card (Correct spacing/shading)
            <div 
              key={index} 
              className="group bg-white p-7 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col gap-5 items-start transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(79,70,229,0.06)]"
            >
              {/* Icon Container (Matches the indigo/square look) */}
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-xl transition-transform group-hover:scale-105">
                {reason.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl font-semibold text-gray-950">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};