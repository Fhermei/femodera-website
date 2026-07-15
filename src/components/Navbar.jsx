import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Tech Icons Bar - ABOVE navbar */}
      <div className="w-full bg-[#1D2B49] py-2 overflow-hidden border-b border-white/10">
        <div className="flex gap-8 whitespace-nowrap animate-scroll">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8">
              <span className="text-white/70 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D94801]" fill="currentColor" viewBox="0 0 24 24"><path d="M14.25 6.087c-1.969-1.031-4.531-1.031-6.5 0-1.969 1.031-3.063 2.969-3.063 4.938 0 1.969 1.094 3.906 3.063 4.938 1.969 1.031 4.531 1.031 6.5 0 1.969-1.031 3.063-2.969 3.063-4.938 0-1.969-1.094-3.906-3.063-4.938z"/></svg>
                Python
              </span>
              <span className="text-white/70 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D94801]" fill="currentColor" viewBox="0 0 24 24"><path d="M11.25 4.5c-1.969 0-3.75 1.031-3.75 2.25s1.781 2.25 3.75 2.25 3.75-1.031 3.75-2.25-1.781-2.25-3.75-2.25z"/></svg>
                Django
              </span>
              <span className="text-white/70 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D94801]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                FastAPI
              </span>
              <span className="text-white/70 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D94801]" fill="currentColor" viewBox="0 0 24 24"><path d="M4.5 6.75c0-1.242 1.008-2.25 2.25-2.25h10.5c1.242 0 2.25 1.008 2.25 2.25v10.5c0 1.242-1.008 2.25-2.25 2.25H6.75c-1.242 0-2.25-1.008-2.25-2.25V6.75z"/></svg>
                JavaScript
              </span>
              <span className="text-white/70 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D94801]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                React
              </span>
              <span className="text-white/70 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D94801]" fill="currentColor" viewBox="0 0 24 24"><path d="M4.5 6.75c0-1.242 1.008-2.25 2.25-2.25h10.5c1.242 0 2.25 1.008 2.25 2.25v10.5c0 1.242-1.008 2.25-2.25 2.25H6.75c-1.242 0-2.25-1.008-2.25-2.25V6.75z"/></svg>
                Tailwind
              </span>
              <span className="text-white/70 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D94801]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                Docker
              </span>
              <span className="text-white/70 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D94801]" fill="currentColor" viewBox="0 0 24 24"><path d="M4.5 6.75c0-1.242 1.008-2.25 2.25-2.25h10.5c1.242 0 2.25 1.008 2.25 2.25v10.5c0 1.242-1.008 2.25-2.25 2.25H6.75c-1.242 0-2.25-1.008-2.25-2.25V6.75z"/></svg>
                GitHub
              </span>
              <span className="text-white/70 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D94801]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                TensorFlow
              </span>
              <span className="text-white/70 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D94801]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                PyTorch
              </span>
              <span className="text-white/70 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D94801]" fill="currentColor" viewBox="0 0 24 24"><path d="M4.5 6.75c0-1.242 1.008-2.25 2.25-2.25h10.5c1.242 0 2.25 1.008 2.25 2.25v10.5c0 1.242-1.008 2.25-2.25 2.25H6.75c-1.242 0-2.25-1.008-2.25-2.25V6.75z"/></svg>
                Figma
              </span>
              <span className="text-white/70 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D94801]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                React Native
              </span>
              <span className="text-white/70 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D94801]" fill="currentColor" viewBox="0 0 24 24"><path d="M4.5 6.75c0-1.242 1.008-2.25 2.25-2.25h10.5c1.242 0 2.25 1.008 2.25 2.25v10.5c0 1.242-1.008 2.25-2.25 2.25H6.75c-1.242 0-2.25-1.008-2.25-2.25V6.75z"/></svg>
                UI/UX
              </span>
              <span className="text-white/70 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D94801]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                Data Science
              </span>
              <span className="text-white/70 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D94801]" fill="currentColor" viewBox="0 0 24 24"><path d="M4.5 6.75c0-1.242 1.008-2.25 2.25-2.25h10.5c1.242 0 2.25 1.008 2.25 2.25v10.5c0 1.242-1.008 2.25-2.25 2.25H6.75c-1.242 0-2.25-1.008-2.25-2.25V6.75z"/></svg>
                Machine Learning
              </span>
              <span className="text-white/70 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D94801]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                Computer Vision
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <header className={`sticky top-0 z-50 w-full bg-white border-b border-gray-100 transition-shadow ${isScrolled ? 'shadow-sm' : ''}`}>
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <img src={logo} alt="Fera Digital Solutions" className="h-9 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-[#1D2B49] hover:text-[#D94801] transition-colors">
                Services
              </a>
              <a href="#projects" className="text-sm font-medium text-[#1D2B49] hover:text-[#D94801] transition-colors">
                Projects
              </a>
              <a href="#about" className="text-sm font-medium text-[#1D2B49] hover:text-[#D94801] transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm font-medium text-[#1D2B49] hover:text-[#D94801] transition-colors">
                Contact
              </a>
              <a
                href="https://wa.me/2348106108753"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-[#D94801] rounded-lg hover:bg-[#D94801]/90 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-[#1D2B49] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 bg-[#1D2B49] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 bg-[#1D2B49] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
            <div className="flex flex-col space-y-3 border-t border-gray-100 pt-4">
              <a href="#services" className="text-sm font-medium text-[#1D2B49] hover:text-[#D94801] transition-colors px-3 py-2">
                Services
              </a>
              <a href="#projects" className="text-sm font-medium text-[#1D2B49] hover:text-[#D94801] transition-colors px-3 py-2">
                Projects
              </a>
              <a href="#about" className="text-sm font-medium text-[#1D2B49] hover:text-[#D94801] transition-colors px-3 py-2">
                About
              </a>
              <a href="#contact" className="text-sm font-medium text-[#1D2B49] hover:text-[#D94801] transition-colors px-3 py-2">
                Contact
              </a>
              <a
                href="https://wa.me/2348106108753"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center px-6 py-2.5 text-sm font-semibold text-white bg-[#D94801] rounded-lg hover:bg-[#D94801]/90 transition-colors mx-3"
              >
                Get Started
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}