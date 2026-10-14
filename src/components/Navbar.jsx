import { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/logo.png'

const links = [
  { label: 'Our Services', href: '#services' },
  { label: 'Our Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
]

// WhatsApp: 08106108753 in international format (Nigeria = 234, drop the leading 0)
const WHATSAPP_NUMBER = '2348106108753'
const WHATSAPP_MESSAGE = 'Hello Fera Digital Solutions, I would like to get started on a project.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

// literal class names so Tailwind can detect them
const linkDelays = ['delay-[120ms]', 'delay-[170ms]', 'delay-[220ms]', 'delay-[270ms]', 'delay-[320ms]']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  // Lock page scroll while the menu is open, close with Escape,
  // and auto-close if the screen grows to the desktop layout (1024px+)
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [isOpen])

  const close = () => setIsOpen(false)

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 font-['Libre_Baskerville',serif] transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
        isOpen ? 'px-0 pt-0 md:px-6 md:pt-[16px] lg:px-6 lg:pt-[20px]' : 'px-4 pt-[14px] md:px-6 md:pt-[16px] lg:pt-[20px] xl:px-0'
      } ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
    >
      <header
        className={`mx-auto flex w-full flex-col overflow-hidden bg-[#FBFDFF] shadow-[0_0_5px_3px_rgba(160,160,160,0.1)] transition-all duration-500 ease-in-out lg:h-auto lg:max-w-[1292px] lg:rounded-full ${
          isOpen
            ? 'h-[100dvh] max-w-none rounded-none md:h-auto md:max-w-[720px] md:rounded-[32px]'
            : 'h-[56px] max-w-[573px] rounded-full md:h-[60px] md:max-w-[720px]'
        }`}
      >
        {/* Top row */}
        <div className="flex h-[56px] shrink-0 items-center justify-between px-5 md:h-[60px] md:px-8 lg:h-[68px] lg:px-10 xl:h-[72px] xl:px-[100px]">
          {/* Logo */}
          <a
            href="#home"
            onClick={close}
            className="flex shrink-0 items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#D44B08] focus-visible:ring-offset-4"
          >
            <img
              src={logo}
              alt="Fera Digital Solutions"
              className="h-[26px] w-[82px] object-contain md:h-[30px] md:w-[96px] lg:h-[36.89px] lg:w-[121.11px]"
            />
          </a>

          {/* Desktop links */}
          <nav aria-label="Main" className="hidden items-center gap-6 lg:flex xl:gap-[44px]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative whitespace-nowrap rounded-sm py-1 text-[12px] font-medium text-black/80 outline-none transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[#D44B08] after:transition-all after:duration-300 hover:text-[#D44B08] hover:after:w-full focus-visible:text-[#D44B08] focus-visible:after:w-full xl:text-[13px]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA -> opens WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get started on WhatsApp"
            className="group hidden h-[42px] shrink-0 items-center justify-center gap-[10px] rounded-full bg-[#D44B08] px-6 text-[12px] font-semibold text-white outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(212,75,8,0.35)] focus-visible:ring-2 focus-visible:ring-[#D44B08] focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98] lg:inline-flex xl:h-[44px] xl:px-7 xl:text-[13px]"
          >
            <FaWhatsapp className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
            Get started
          </a>

          {/* Mobile / tablet toggle: hamburger <-> X (44px tap area) */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full outline-none transition-colors hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-[#D44B08] lg:hidden"
          >
            <span className="relative block h-[14px] w-[22px]">
              <span
                className={`absolute left-0 h-[2px] w-full rounded bg-black transition-all duration-300 ${
                  isOpen ? 'top-[6px] rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-[2px] w-full rounded bg-black transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-full rounded bg-black transition-all duration-300 ${
                  isOpen ? 'top-[6px] -rotate-45' : 'top-[12px]'
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile / tablet menu (same pill, expanded) */}
        <div
          id="mobile-menu"
          className={`flex flex-1 flex-col overflow-y-auto px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-2 transition-opacity duration-300 md:flex-none md:px-8 md:pb-8 lg:hidden ${
            isOpen ? 'opacity-100' : 'pointer-events-none invisible opacity-0'
          }`}
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className={`flex min-h-[56px] items-center justify-between border-b border-black/10 text-[17px] font-medium text-black/85 outline-none transition-all duration-500 hover:text-[#D44B08] focus-visible:text-[#D44B08] motion-reduce:transition-none md:text-[18px] ${
                  linkDelays[i]
                } ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
              >
                {l.label}
                <ChevronRight className="h-5 w-5 text-black/30" aria-hidden="true" />
              </a>
            ))}
          </nav>

          {/* CTA sits at the bottom of the screen on phones -> opens WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            aria-label="Get started on WhatsApp"
            className={`group mt-auto inline-flex h-[54px] w-full items-center justify-center gap-3 rounded-full bg-[#D44B08] text-[16px] font-semibold text-white outline-none transition-all duration-500 delay-[400ms] hover:bg-[#B93F06] focus-visible:ring-2 focus-visible:ring-[#D44B08] focus-visible:ring-offset-2 active:scale-[0.98] md:mt-8 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
          >
            <FaWhatsapp className="h-[22px] w-[22px] transition-transform duration-300 group-hover:scale-110" />
            Get started
          </a>
        </div>
      </header>
    </div>
  )
}