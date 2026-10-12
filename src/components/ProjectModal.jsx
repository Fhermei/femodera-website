import { useEffect, useRef, useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import { techIconMap } from './techIconMap'

// The inner modal mounts fresh for every project (key={project.id}),
// so it fades in each time and needs no "reset" effect.
function ModalContent({ project, onClose }) {
  const [show, setShow] = useState(false)
  const closeRef = useRef(onClose)

  // Keep the latest onClose without writing to the ref during render
  useEffect(() => {
    closeRef.current = onClose
  }, [onClose])

  // Soft fade-in, Escape to close, lock page scroll only while open
  useEffect(() => {
    const raf = requestAnimationFrame(() => setShow(true))
    const onKey = (e) => e.key === 'Escape' && closeRef.current()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      cancelAnimationFrame(raf)
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
      className={`fixed inset-0 z-[60] flex items-end justify-center bg-[#071E4D]/60 transition-opacity duration-300 sm:items-center sm:p-6 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative flex max-h-[92dvh] w-full max-w-[880px] flex-col overflow-hidden rounded-t-[28px] bg-white font-['Libre_Baskerville',serif] shadow-[0_20px_60px_rgba(7,30,77,0.3)] transition-all duration-300 ease-out motion-reduce:transition-none sm:rounded-[28px] md:flex-row ${
          show ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#091E4C] shadow-md transition-colors duration-300 hover:bg-[#D44B08] hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image */}
        <div className="relative h-[210px] shrink-0 sm:h-[260px] md:h-auto md:w-[44%]">
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
          <span className="absolute bottom-10 left-5 rounded-full bg-white px-3 py-1 text-[8px] font-bold uppercase leading-[16px] tracking-[0.16em] text-[#091E4C] md:bottom-5">
            {project.category}
          </span>
        </div>

        {/* Content (curved top-right corner on mobile, same as the cards) */}
        <div className="relative z-10 -mt-8 flex-1 overflow-y-auto rounded-tr-[50px] bg-white p-6 pt-8 md:mt-0 md:rounded-tr-none md:p-10">
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#D94801]">
            Project Overview
          </span>

          <h2 className="mt-2 text-[22px] font-bold leading-[1.2] text-[#091E4C] md:text-[28px]">
            {project.title}
          </h2>

          <div className="mt-4 h-[3px] w-12 rounded-full bg-[#D44B08]" />

          <div className="mt-6">
            <h4 className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/60">Description</h4>
            <p className="mt-2 text-[13px] font-medium italic leading-[22px] text-black/70">
              {project.description}
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/60">Technologies</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {techs.map((t) => {
                const Icon = t.icon
                return (
                  <span
                    key={t.name}
                    className="inline-flex items-center gap-2 rounded-full border border-[#091E4C]/15 bg-[#F5F5F5] px-3 py-1.5 text-[11px] font-medium text-[#091E4C]"
                  >
                    <Icon size={14} style={{ color: t.color }} />
                    {t.name}
                  </span>
                )
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-[44px] flex-1 items-center justify-center gap-2 rounded-full bg-[#D44B08] text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#B93F06] active:scale-[0.98]"
            >
              View Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-[44px] items-center justify-center rounded-full border border-[#08214D] px-8 text-[13px] font-semibold text-[#08214D] transition-colors duration-300 hover:bg-[#08214D] hover:text-white active:scale-[0.98]"
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