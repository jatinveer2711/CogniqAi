import React from 'react';
import { useState , useEffect } from 'react';

export default function RobotHandSection() {
   

const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);


  return (
     <div
      className="relative py-16  flex flex-col"
      style={{
        background: "linear-gradient(160deg, #f0f0f8 0%, #e8e8f4 40%, #ede8f5 100%)",
        fontFamily: "'Georgia', serif",
      }}
    >
    
 
     
 
      
 
      {/* Blue left accent bar */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/4 w-3 rounded-r-full"
        style={{ height: 200, background: "linear-gradient(180deg, #4f46e5, #6366f1)" }}
      />
 
      {/* About Section */}
      <section className="relative z-10 flex-1 flex items-center px-10 md:px-20 py-16 max-w-6xl mx-auto w-full">
        <div
          className="grid md:grid-cols-2 gap-16 items-center w-full"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
 
          {/* Left — Image */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <img src="/robotImage.jpg" className="w-full rounded-2xl object-cover" />
            {/* Subtle shadow beneath image */}
            <div
              className="absolute -bottom-4 left-6 right-6 h-8 rounded-full opacity-20 blur-xl"
              style={{ background: "#4f46e5" }}
            />
          </div>
 
          {/* Right — Content */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(20px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
              style={{
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.25)",
                color: "#4338ca",
              }}
            >
              About Us
            </div>
 
            {/* Tagline */}
            <p className="text-base font-semibold mb-2">
              <span className="text-indigo-700">Engineering Trust.</span>{" "}
              <span className="text-indigo-500 italic">Delivering Intelligence.</span>
            </p>
 
            {/* Heading */}
            <h2
              className="text-4xl font-bold text-gray-900 mb-5 leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              At Cogniq AI
            </h2>
 
            {/* Body text */}
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              we don't just develop features, we build{" "}
              <span className="text-indigo-600 font-medium">full-scale</span>{" "}
              AI systems designed for clarity, transparency, and long-term growth. From
              startups to enterprises, we partner with teams that want to innovate
              without compromising on{" "}
              <span className="text-gray-900 font-bold">quality</span>.
            </p>
 
            {/* CTA Button */}
            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-sm font-semibold transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #4f46e5, #6366f1)",
                boxShadow: "0 4px 16px rgba(79,70,229,0.35)",
              }}
            >
              Know more about Us
              <span className="text-base">↗</span>
            </button>
          </div>
 
        </div>
      </section>
    </div>
  )
}
