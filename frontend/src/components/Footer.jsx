import React from 'react'

export default function Footer() {
  return (
   <footer className="bg-gray-900 text-slate-400 px-6 py-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
    
    {/* Left Section - Branding */}
    <div className="md:col-span-4 lg:col-span-5">
      <h2 className="text-white text-2xl font-bold tracking-tight">
        Cogniq <span className="text-blue-500">AI</span>
      </h2>
      <p className="text-xs font-medium uppercase tracking-widest mt-2 text-slate-500">
        A Cogniq Labs Division
      </p>

      <p className="mt-6 text-base leading-relaxed max-w-sm">
        Building intelligent AI apps that transform how you interact with
        technology and data.
      </p>

      {/* Social Icons */}
      <div className="flex gap-3 mt-8">
        {['📷', '🐦', '💼'].map((icon, idx) => (
          <span 
            key={idx} 
            className="flex items-center justify-center w-10 h-10 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-300 cursor-pointer text-lg"
          >
            {icon}
          </span>
        ))}
      </div>
    </div>

    {/* Right Section - Navigation Links */}
    <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
      <div>
        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Company</h3>
        <ul className="space-y-3 text-sm">
          <li className="hover:text-blue-400 transition-colors cursor-pointer">About us</li>
          <li className="hover:text-blue-400 transition-colors cursor-pointer">Careers</li>
          <li className="hover:text-blue-400 transition-colors cursor-pointer">Blogs</li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">AI Solutions</h3>
        <ul className="space-y-3 text-sm">
          <li className="hover:text-blue-400 transition-colors cursor-pointer">Custom AI Agents</li>
          <li className="hover:text-blue-400 transition-colors cursor-pointer">Voice AI</li>
          <li className="hover:text-blue-400 transition-colors cursor-pointer">Support AI</li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h3>
        <ul className="space-y-3 text-sm">
          <li className="hover:text-blue-400 transition-colors cursor-pointer">Automation</li>
          <li className="hover:text-blue-400 transition-colors cursor-pointer">Analytics</li>
          <li className="text-blue-500 font-medium hover:underline cursor-pointer">All Services →</li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Products</h3>
        <ul className="space-y-3 text-sm">
          <li className="hover:text-blue-400 transition-colors cursor-pointer">All Products</li>
          <li className="hover:text-blue-400 transition-colors cursor-pointer">JobMail AI</li>
          <li className="hover:text-blue-400 transition-colors cursor-pointer">PostGenius</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="max-w-7xl mx-auto border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-medium tracking-wide">
    <p className="text-slate-500">© 2026 COGNIQ AI. ENGINEERED FOR THE FUTURE.</p>
    <div className="flex gap-8 mt-4 md:mt-0 uppercase">
      <span className="hover:text-white transition-colors cursor-pointer">Terms of service</span>
      <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
    </div>
  </div>
</footer>
  )
}
