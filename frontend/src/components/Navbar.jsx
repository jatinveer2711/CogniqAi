import React from 'react'

export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-900 to-purple-500 rounded-full"></div>
                    <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-500">
                        Cogniq AI
                    </span>
                </div>

                {/* Nav Links */}
                <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
                    <li className="bg-gradient-to-r from-blue-900 to-purple-500 bg-clip-text text-transparent cursor-pointer">
                        Home
                    </li>
                    <li className="hover:text-purple-500 cursor-pointer">About Us</li>
                    <li className="hover:text-purple-500 cursor-pointer">Services</li>
                    <li className="hover:text-purple-500 cursor-pointer">Our Lab</li>
                    <li className="hover:text-purple-500 cursor-pointer">Blogs</li>
                </ul>

                {/* Button */}
                <button className="hidden md:block bg-purple-500 bg-gradient-to-r from-blue-900 to-purple-500 text-white px-5 py-2 rounded-lg font-medium transition">
                    Contact Us
                </button>

                {/* Mobile Menu Icon */}
                <div className="md:hidden text-2xl cursor-pointer">
                    ☰
                </div>

            </div>
        </nav>
    )
}
