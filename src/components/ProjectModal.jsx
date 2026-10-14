import { useEffect, useRef, useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import { techIconMap } from './techIconMap'

// The inner modal mounts fresh for every project (key={project.id}),
// so it fades in each time and needs no "reset" effect.
function ModalContent({ project, onClose }) {
  const [show, setShow] = useState(false)
  const closeRef = useRef(onClose)
  const closeBtnRef = useRef(null)

  // Keep the latest onClose without writing to the ref during render
  useEffect(() => {
    closeRef.current = onClose
  }, [onClose])

  // Soft fade-in, Escape to close, lock page scroll only while open
  useEffect(() => {
    const raf = requestAnimationFrame(() => setShow(true))
    const focusTimer = setTimeout(() => closeBtnRef.current?.focus(), 250)
    const onKey = (e) => e.key === 'Escape' && closeRef.current()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [])

  const techs = project.technologies
    .map((t) => (techIconMap[t] ? { ...techIconMap[t], name: t } : null))
    .filter(Boolean)

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
      className={`fixed inset-0 z-[60] flex items-end justify-center bg-[#071E4D]/60 backdrop-blur-[2px] transition-opacity duration-300 sm:items-center sm:p-6 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Panel: bottom sheet on phones, centered card on tablet/desktop */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative flex max-h-[92dvh] w-full max-w-[880px] flex-col overflow-hidden rounded-t-[28px] bg-white font-['Libre_Baskerville',serif] shadow-[0_20px_60px_rgba(7,30,77,0.3)] transition-all duration-300 ease-out motion-reduce:transition-none sm:max-h-[88dvh] sm:rounded-[28px] md:flex-row ${
          show ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        {/* Grab handle (phones only) */}
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-2 z-20 h-1 w-10 -translate-x-1/2 rounded-full bg-white/80 sm:hidden"
        />

        {/* Close */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#091E4C] shadow-md outline-none transition-colors duration-300 hover:bg-[#D44B08] hover:text-white focus-visible:ring-2 focus-visible:ring-[#D44B08] focus-visible:ring-offset-2 sm:right-4 sm:top-4"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image */}
        <div className="relative h-[200px] shrink-0 sm:h-[250px] md:h-auto md:w-[44%]">
          <img
            src={project.img}
            alt={project.title}
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = `https://picsum.photos/seed/project${project.id}/900/900`
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071E4D]/60 via-transparent to-transparent" />
          <span className="absolute bottom-12 left-5 rounded-full bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase leading-[14px] tracking-[0.14em] text-[#091E4C] md:bottom-5 md:left-6">
            {project.category}
          </span>
        </div>

        {/* Content column: scrolling text + fixed action bar */}
        <div className="relative z-10 -mt-8 flex min-h-0 flex-1 flex-col rounded-tr-[50px] bg-white md:mt-0 md:rounded-tr-none">
          {/* Scrollable text */}
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-6 pt-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:p-10 md:pb-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#D94801]">
              Project Overview
            </span>

            <h2 className="mt-2 text-[24px] font-bold leading-[1.2] text-[#091E4C] md:text-[30px]">
              {project.title}
            </h2>

            <div className="mt-4 h-[3px] w-12 rounded-full bg-[#D44B08]" />

            <div className="mt-6">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-black/55">
                Description
              </h4>
              <p className="mt-2 text-[14px] font-medium italic leading-[24px] text-black/70 md:text-[15px] md:leading-[26px]">
                {project.description}
              </p>
            </div>

            {techs.length > 0 && (
              <div className="mt-6">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-black/55">
                  Technologies
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {techs.map((t) => {
                    const Icon = t.icon
                    return (
                      <span
                        key={t.name}
                        className="inline-flex min-h-[34px] items-center gap-2 rounded-full border border-[#091E4C]/15 bg-[#F5F5F5] px-3.5 py-1.5 text-[12px] font-medium text-[#091E4C]"
                      >
                        <Icon size={15} style={{ color: t.color }} />
                        {t.name}
                      </span>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Action bar: always visible, never pushed off screen */}
          <div className="flex shrink-0 items-center gap-3 border-t border-black/10 bg-white px-6 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 md:px-10 md:pb-6">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-[#D44B08] text-[14px] font-semibold text-white outline-none transition-all duration-300 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(212,75,8,0.35)] focus-visible:ring-2 focus-visible:ring-[#D44B08] focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                View Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            )}

            {/* Close button: tablet/desktop only (phones already have the X) */}
            <button
              type="button"
              onClick={onClose}
              className="hidden h-[48px] items-center justify-center rounded-full border border-[#08214D] px-8 text-[14px] font-semibold text-[#08214D] outline-none transition-colors duration-300 hover:bg-[#08214D] hover:text-white focus-visible:ring-2 focus-visible:ring-[#08214D] focus-visible:ring-offset-2 active:scale-[0.98] sm:inline-flex"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectModal({ project, onClose }) {
  if (!project) return null
  return <ModalContent key={project.id} project={project} onClose={onClose} />
}