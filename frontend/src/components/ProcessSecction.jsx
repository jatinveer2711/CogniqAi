import React from 'react';
import focusImage from '../assets/focusImage.jpg'
const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "Understand challenges and design a strategic AI roadmap.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", // Replace with your assets
  },
  {
    number: "02",
    title: "Design & Prototype",
    description: "Detailed wireframes and interactive prototypes.",
    image: focusImage,
  },
  {
    number: "03",
    title: "Development & Testing",
    description: "Rigorous testing and continuous collaboration.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  },
  {
    number: "04",
    title: "Launch & Growth",
    description: "Deploy and optimize for continued success.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
  },
];

export default function ProcessSecction() {
  return (
    <section className="bg-[#fdfbf7] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d1b5e] uppercase tracking-tight">
              Our Process
            </h2>
            <div className="h-1 w-12 bg-blue-600 mt-2"></div>
          </div>
          <p className="text-gray-500 italic mt-4 md:mt-0">
            From concept to creation, seamlessly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="relative group h-64 md:h-80 overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Background Image */}
              <img 
                src={step.image} 
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay (Darkening the image for text readability) */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-bold">
                  {step.number}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-200 opacity-90 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

