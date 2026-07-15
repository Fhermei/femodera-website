import { useState, useEffect } from 'react'
import { Menu, X, Palette, BarChart3, BrainCircuit, Eye } from 'lucide-react'
import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiDocker,
  SiGithub,
  SiTensorflow,
  SiPytorch,
  SiFigma,
} from 'react-icons/si'
import logo from '../assets/logo.png'

// Tech icons with brand colors
const techIcons = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Django', icon: SiDjango, color: '#092E20' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'React Native', icon: SiReact, color: '#61DAFB' },
  { name: 'UI/UX', icon: Palette, color: '#F0ABFC' },
  { name: 'Data Science', icon: BarChart3, color: '#38BDF8' },
  { name: 'Machine Learning', icon: BrainCircuit, color: '#A78BFA' },
  { name: 'Computer Vision', icon: Eye, color: '#34D399' },
]

export default function Navbar({ onGetStarted }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Tech Icons Bar - Fixed ABOVE navbar */}
      <div className="w-full bg-[#1D2B49] py-2 overflow-hidden border-b border-white/10">
        <div className="flex gap-10 whitespace-nowrap animate-scroll">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-10">
              {techIcons.map((tech, idx) => {
                const Icon = tech.icon
                return (
                  <span key={`${tech.name}-${idx}`} className="text-white/80 text-sm flex items-center gap-2">
                    <Icon className="text-lg" style={{ color: tech.color }} size={18} />
                    <span className="font-medium">{tech.name}</span>
                  </span>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Navbar - Fixed */}
      <header className={`w-full bg-white border-b border-gray-100 transition-shadow ${isScrolled ? 'shadow-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Left */}
            <a href="#" className="flex items-center gap-2 flex-shrink-0">
              <img src={logo} alt="Fera Digital Solutions" className="h-10 w-auto" />
            </a>

            {/* Desktop Navigation - Center */}
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
            </div>

            {/* CTA Button - Right */}
            <div className="hidden md:block flex-shrink-0">
              <button
                onClick={onGetStarted}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-[#D94801] rounded-lg hover:bg-[#D94801]/90 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#1D2B49]" /> : <Menu className="w-6 h-6 text-[#1D2B49]" />}
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
              <button
                onClick={onGetStarted}
                className="inline-flex justify-center px-6 py-2.5 text-sm font-semibold text-white bg-[#D94801] rounded-lg hover:bg-[#D94801]/90 transition-colors mx-3"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}