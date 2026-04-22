import React from 'react'

export default function HomePage() {
  return (
   <section className="relative w-full min-h-screen flex items-center justify-center bg-[#f4f4f6] px-6 overflow-hidden">
 
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(100,116,200,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100,116,200,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
 
      {/* Soft glow blobs */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-indigo-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
 
      {/* Floating icon — left */}
      <div className="absolute top-[22%] left-[8%] w-10 h-10 rounded-full border border-slate-200 bg-white/70 backdrop-blur-sm shadow-sm flex items-center justify-center text-slate-400 animate-bounce">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
        </svg>
      </div>
 
      {/* Floating icon — right */}
      <div className="absolute top-[30%] right-[8%] w-10 h-10 rounded-full border border-slate-200 bg-white/70 backdrop-blur-sm shadow-sm flex items-center justify-center animate-pulse">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 8v4l3 3"/>
        </svg>
      </div>
 
      {/* Plus / sparkle decorations */}
      <span className="absolute top-[14%] right-[17%] text-slate-300 text-2xl font-light select-none">+</span>
      <span className="absolute bottom-[20%] left-[11%] text-slate-300 text-2xl font-light select-none">+</span>
      <span className="absolute bottom-[17%] right-[9%]  text-indigo-200 text-3xl select-none">✦</span>
      <span className="absolute top-[55%] left-[5%]  text-slate-200 text-xl select-none">+</span>
 
      {/* Main content */}
      <div className="relative z-10 max-w-4xl text-center">
 
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 leading-tight tracking-tight">
          Building{" "}
          <span className="text-indigo-500">Intelligent</span>, scalable AI
          <br />
          solutions for the{" "}
          <span className="text-indigo-500">Next</span> Generation
        </h1>
 
        {/* Subtext */}
        <p className="mt-6 text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Your premier AI & Software engineering partner - transforming ideas
          into reliable, high-performance products.
        </p>
 
        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
 
          <button className="px-7 py-3 border-2 border-slate-300 rounded-xl text-slate-600 font-medium hover:border-slate-400 hover:text-slate-800 hover:-translate-y-0.5 transition-all duration-200">
            Explore our services
          </button>
 
          <button className="px-7 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-300/40 hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-indigo-400/50 transition-all duration-200">
            Book a Strategy Call
          </button>
 
        </div>
      </div>
 
    </section>
  )
}
