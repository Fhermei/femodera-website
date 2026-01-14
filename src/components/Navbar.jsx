import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Femodera Logo"
              className="h-9 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-gray-700 hover:text-brand transition">
              Home
            </a>
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-brand transition">
              Services
            </a>
            <a href="#projects" className="text-sm font-medium text-gray-700 hover:text-brand transition">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-brand transition">
              Contact Us
            </a>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/2347061754538"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center rounded-md bg-brand px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Get Help
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="space-y-1 px-4 py-4">
            <a href="#home" className="block py-2 text-sm font-medium text-gray-700">
              Home
            </a>
            <a href="#services" className="block py-2 text-sm font-medium text-gray-700">
              Services
            </a>
            <a href="#projects" className="block py-2 text-sm font-medium text-gray-700">
              Projects
            </a>
            <a href="#contact" className="block py-2 text-sm font-medium text-gray-700">
              Contact Us
            </a>

            <a
              href="https://wa.me/2348106108753"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block w-full rounded-md bg-brand px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
