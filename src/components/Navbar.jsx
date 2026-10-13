import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/logo.png'

const links = [
  { label: 'Our Services', href: '#services' },
  { label: 'Our Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
]

// literal class names so Tailwind can detect them
const linkDelays = ['delay-[150ms]', 'delay-[200ms]', 'delay-[250ms]', 'delay-[300ms]', 'delay-[350ms]']

export default function Navbar({ onGetStarted }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  // Lock page scroll while the mobile menu is open + close with Escape
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 font-['Libre_Baskerville',serif] transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none md:px-6 xl:px-0 ${
        isOpen ? 'px-0 pt-0 md:pt-[20px]' : 'px-4 pt-[20px]'
      } ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
    >
      <header
        className={`mx-auto flex w-full max-w-[573px] flex-col overflow-hidden bg-[#FBFDFF] shadow-[0_0_5px_3px_rgba(160,160,160,0.1)] transition-all duration-500 ease-in-out md:h-auto md:max-w-[1292px] md:rounded-full ${
          isOpen ? 'h-[100dvh] rounded-none' : 'h-[52px] rounded-full'
        }`}
      >
        {/* Top row */}
        <div className="flex h-[52px] shrink-0 items-center justify-between px-5 md:h-[60px] md:px-8 lg:h-[68px] lg:px-14 xl:h-[72px] xl:px-[130px]">
          {/* Logo */}
          <a href="#home" onClick={() => setIsOpen(false)} className="flex shrink-0 items-center">
            <img
              src={logo}
              alt="Fera Digital Solutions"
              className="h-[22.7px] w-[72px] object-contain md:h-[29px] md:w-[95px] lg:h-[36.89px] lg:w-[121.11px]"
            />
          </a>

          {/* Desktop / tablet links */}
          <nav className="hidden items-center gap-4 md:flex lg:gap-8 xl:gap-[50px]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative whitespace-nowrap text-[11px] font-medium text-black/80 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#D44B08] after:transition-all after:duration-300 hover:text-[#D44B08] hover:after:w-full xl:text-[12px]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop / tablet CTA */}
          <button
            onClick={onGetStarted}
            className="group hidden h-[40px] w-[116px] shrink-0 items-center justify-center gap-[10px] rounded-full bg-[#D44B08] text-[11px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(212,75,8,0.35)] active:translate-y-0 active:scale-[0.98] md:inline-flex lg:w-[137px] lg:text-[12px]"
          >
            <FaWhatsapp className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
            Contact us
          </button>

          {/* Mobile toggle: hamburger <-> X */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="flex h-8 w-8 items-center justify-center md:hidden"
          >
            {isOpen ? (
              <X className="h-[18px] w-[18px] text-black" />
            ) : (
              <span className="flex h-[10.46px] w-[17px] flex-col justify-between">
                <span className="h-[2px] w-full bg-black" />
                <span className="h-[2px] w-full bg-black" />
                <span className="h-[2px] w-full bg-black" />
              </span>
            )}
          </button>
        </div>

        {/* Mobile menu content (same pill, expanded to fill the screen) */}
        <div
          className={`flex flex-1 flex-col px-[19px] pb-6 pt-4 transition-opacity duration-300 md:hidden ${
            isOpen ? 'opacity-100' : 'pointer-events-none invisible opacity-0'
          }`}
        >
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className={`border-b border-black/5 py-4 text-left text-[12px] font-medium text-black/80 transition-all duration-500 hover:pl-2 hover:text-[#D44B08] motion-reduce:transition-none ${
                linkDelays[i]
              } ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
            >
              {l.label}
            </a>
          ))}

          <button
            onClick={() => {
              setIsOpen(false)
              onGetStarted?.()
            }}
            className={`group mt-8 inline-flex h-[40px] w-full items-center justify-center gap-[10px] rounded-full bg-[#D44B08] text-[12px] font-semibold text-white transition-all duration-500 delay-[400ms] hover:bg-[#B93F06] active:scale-[0.98] ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
          >
            <FaWhatsapp className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
            Contact us
          </button>
        </div>
      </header>
    </div>
  )
}