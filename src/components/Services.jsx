import { useEffect, useRef, useState } from 'react'
import { ArrowRight, X, CheckCircle2 } from 'lucide-react'

const slides = [
  {
    img: '/about/1.png',
    title: 'Software & Web Development',
    desc: 'Custom websites, web applications, SaaS platforms, mobile apps, and enterprise software solutions built with modern technologies.',
  },
  {
    img: '/about/2.png',
    title: 'Data Collection & Analysis',
    desc: 'Reliable data collection, cleaning, statistical analysis and clear reporting for research and business decisions.',
  },
  {
    img: '/about/3.png',
    title: 'Academic Research & Writing',
    desc: 'Expert research support and academic writing for final year, PGD, Masters, PhD and journal projects.',
  },
]

// 1,2,3  ->  2,3,1  ->  3,1,2  ->  back to 1,2,3
const orders = [
  [0, 1, 2],
  [1, 2, 0],
  [2, 0, 1],
]

// 0 = big card, 1 = first small, 2 = second small
const posClasses = [
  'left-0 w-[71.7%] md:w-[58.4%]',
  'left-[73.9%] w-[11.9%] md:left-[60.3%] md:w-[18.9%]',
  'left-[88.1%] w-[11.9%] md:left-[81.1%] md:w-[18.9%]',
]

const inputClass =
  'w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-[16px] text-[#091E4C] outline-none transition-colors placeholder:text-black/35 focus:border-[#D44B08] focus:ring-2 focus:ring-[#D44B08]/20 md:text-[14px]'

/* ------------------------------ MODAL ------------------------------ */
function ProjectModal({ open, service, onClose, onSubmit }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', contact: '', service: slides[0].title, details: '' })
  const firstRef = useRef(null)

  // Reset every time the modal opens, preselect the service that was clicked
  useEffect(() => {
    if (!open) return
    setSent(false)
    setForm({ name: '', contact: '', service: service || slides[0].title, details: '' })
    const t = setTimeout(() => firstRef.current?.focus(), 200)
    return () => clearTimeout(t)
  }, [open, service])

  // Escape to close + lock page scroll
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.(form)
    setSent(true)
  }

  return (
    <div
      className={`fixed inset-0 z-[70] flex items-end justify-center font-['Libre_Baskerville',serif] transition-opacity duration-300 sm:items-center sm:p-6 ${
        open ? 'opacity-100' : 'pointer-events-none invisible opacity-0'
      }`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#071E4D]/60 backdrop-blur-sm" onClick={onClose} />

      {/* Panel: bottom sheet on phones, centered card on tablet/desktop */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className={`relative max-h-[92dvh] w-full overflow-y-auto rounded-t-[28px] bg-white px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 shadow-2xl transition-all duration-500 ease-out motion-reduce:transition-none sm:max-w-[520px] sm:rounded-[28px] sm:p-8 ${
          open ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[#091E4C] transition-colors hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-[#D44B08] sm:right-5 sm:top-5"
        >
          <X className="h-5 w-5" />
        </button>

        {sent ? (
          <div className="flex flex-col items-center py-8 text-center">
            <CheckCircle2 className="h-14 w-14 text-[#D44B08]" />
            <h3 className="mt-5 text-[22px] font-bold text-[#091E4C]">Request received</h3>
            <p className="mt-2 max-w-[320px] text-[14px] leading-[22px] text-black/65">
              Thanks, {form.name.split(' ')[0] || 'friend'}. We will reach out shortly to discuss your project.
            </p>
            <button
              onClick={onClose}
              className="mt-6 inline-flex h-[44px] items-center justify-center rounded-full bg-[#D44B08] px-8 text-[14px] font-semibold text-white transition-colors hover:bg-[#B93F06] active:scale-[0.98]"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <span className="text-[11px] font-normal uppercase tracking-[0.16em] text-[#D94801]">
              Start Project
            </span>
            <h3 id="project-modal-title" className="mt-1 pr-10 text-[22px] font-bold leading-[28px] text-[#091E4C] md:text-[26px] md:leading-[32px]">
              Tell us about your project
            </h3>
            <p className="mt-2 text-[13px] leading-[20px] text-black/60">
              Share a few details and we will get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
              <label className="flex flex-col gap-1.5 text-[12px] font-medium text-[#091E4C]">
                Full name
                <input
                  ref={firstRef}
                  required
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Your name"
                  autoComplete="name"
                  className={inputClass}
                />
              </label>

              <label className="flex flex-col gap-1.5 text-[12px] font-medium text-[#091E4C]">
                Email or WhatsApp number
                <input
                  required
                  value={form.contact}
                  onChange={set('contact')}
                  placeholder="you@email.com or +234..."
                  autoComplete="email"
                  className={inputClass}
                />
              </label>

              <label className="flex flex-col gap-1.5 text-[12px] font-medium text-[#091E4C]">
                Service
                <select value={form.service} onChange={set('service')} className={inputClass}>
                  {slides.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-1.5 text-[12px] font-medium text-[#091E4C]">
                Project details
                <textarea
                  required
                  rows={3}
                  value={form.details}
                  onChange={set('details')}
                  placeholder="What do you need, and when?"
                  className={`${inputClass} resize-none`}
                />
              </label>

              <button
                type="submit"
                className="group mt-1 inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#D44B08] text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(212,75,8,0.35)] focus-visible:ring-2 focus-visible:ring-[#D44B08] focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                Submit request
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

/* ------------------------------ ABOUT ------------------------------ */
export default function About({ onSubmit }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [step, setStep] = useState(0)
  const [paused, setPaused] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalService, setModalService] = useState(null)

  const openModal = (service = null) => {
    setModalService(service)
    setModalOpen(true)
  }
  const closeModal = () => setModalOpen(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-rotate (pauses on hover and while the modal is open)
  useEffect(() => {
    if (!isVisible || paused || modalOpen) return
    const id = setInterval(() => setStep((s) => (s + 1) % orders.length), 4000)
    return () => clearInterval(id)
  }, [isVisible, paused, modalOpen])

  const reveal = (delay) =>
    `transition-all duration-700 ease-out motion-reduce:transition-none ${delay} ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`

  return (
    <section
      ref={sectionRef}
      id="services"
      className="mt-[100px] bg-white px-4 pb-12 font-['Libre_Baskerville',serif] md:px-8 md:pb-16 xl:px-0"
    >
      <div className="mx-auto flex w-full max-w-[573px] flex-col items-center md:max-w-[1236px] md:flex-row md:items-center">
        {/* LEFT: text */}
        <div className="relative z-20 flex w-full flex-col items-center text-center md:w-[30%] md:shrink-0 md:items-start md:text-left">
          <span
            className={`text-[11px] font-normal uppercase leading-[20px] tracking-[0.16em] text-[#D94801] md:text-[12px] md:leading-[38px] lg:text-[18px] ${reveal(
              'delay-[100ms]'
            )}`}
          >
            Our Services
          </span>

          <h2
            className={`mt-2 text-[28px] font-bold leading-[34px] text-[#091E4C] md:mt-6 md:text-[32px] md:leading-[38px] lg:mt-8 lg:text-[48px] lg:leading-[54px] ${reveal(
              'delay-[200ms]'
            )}`}
          >
            What We Do
          </h2>

          {/* Desktop/tablet: white background reaches the centre of the first image */}
          <p
            className={`mt-3 w-full max-w-[420px] text-[14px] leading-[22px] text-black/70 md:mt-12 md:w-[172%] md:max-w-none md:bg-white md:py-4 md:pr-[8%] md:text-[13px] md:leading-[21px] lg:mt-[75px] lg:text-[18px] lg:leading-[28px] ${reveal(
              'delay-[300ms]'
            )}`}
          >
            From research and academic support to modern digital system, we help individuals,
            organizations and institutions turn ideas into impact.
          </p>

          {/* Learn more (tablet + desktop only) */}
          <a
            href="#about"
            className={`group mt-6 hidden h-[40px] w-[140px] items-center justify-center gap-2 rounded-full bg-[#D44B08] text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(212,75,8,0.35)] focus-visible:ring-2 focus-visible:ring-[#D44B08] focus-visible:ring-offset-2 active:scale-[0.98] md:inline-flex lg:mt-10 lg:h-[48px] lg:w-[190px] lg:text-[14px] ${reveal(
              'delay-[400ms]'
            )}`}
          >
            Learn more
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 lg:h-4 lg:w-4" />
          </a>
        </div>

        {/* RIGHT: animated carousel (taller on phones so the text is readable) */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className={`relative mt-8 aspect-[361/250] w-full md:mt-0 md:aspect-[841/716] md:flex-1 ${reveal(
            'delay-[500ms]'
          )}`}
        >
          {slides.map((s, i) => {
            const pos = orders[step].indexOf(i)
            const isActive = pos === 0
            return (
              <div
                key={s.title}
                onClick={() => setStep(i)}
                className={`absolute top-0 h-full cursor-pointer overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none ${posClasses[pos]}`}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className={`h-full w-full object-cover transition-transform duration-[1400ms] ease-out ${
                    isActive ? 'scale-100' : 'scale-110'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* BIG CARD CONTENT */}
                <div
                  className={`absolute inset-x-0 bottom-0 flex flex-col items-start p-3 transition-all duration-700 md:p-5 lg:p-7 ${
                    isActive
                      ? 'translate-y-0 opacity-100 delay-500'
                      : 'pointer-events-none translate-y-4 opacity-0 delay-0'
                  }`}
                >
                  <h3 className="max-w-[95%] text-left text-[15px] font-normal leading-[18px] text-white md:text-[20px] md:leading-[23px] lg:text-[28px] lg:leading-[31px]">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-4 max-w-[95%] text-left text-[10px] font-medium leading-[14px] text-white/85 md:mt-2 md:line-clamp-none md:text-[12px] md:leading-[16px] lg:mt-3 lg:text-[16px] lg:leading-[22px]">
                    {s.desc}
                  </p>

                  {/* Tablet + desktop button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      openModal(s.title)
                    }}
                    className="mt-3 hidden h-[36px] w-[140px] items-center justify-center rounded-full bg-white text-[13px] font-semibold text-[#091E4C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D44B08] hover:text-white focus-visible:ring-2 focus-visible:ring-white active:scale-[0.98] md:inline-flex lg:mt-5 lg:h-[42px] lg:w-[180px] lg:text-[14px]"
                  >
                    Start Project
                  </button>

                  {/* Mobile: small text link */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      openModal(s.title)
                    }}
                    className="mt-2 inline-flex items-center gap-1 py-1 text-[11px] font-semibold text-white md:hidden"
                  >
                    Start Project
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>

                {/* SMALL CARD ROTATED LABEL */}
                <span
                  className={`absolute bottom-3 left-1/2 -translate-x-1/2 rotate-180 whitespace-pre-line text-left text-[10px] font-normal leading-[12px] text-white transition-all duration-700 [writing-mode:vertical-rl] md:bottom-6 md:text-[14px] md:leading-[16px] lg:text-[22px] lg:leading-[24px] ${
                    isActive ? 'pointer-events-none opacity-0 delay-0' : 'opacity-100 delay-500'
                  }`}
                >
                  {s.title.replace(' & ', ' &\n')}
                </span>
              </div>
            )
          })}
        </div>

        {/* Mobile: compact Start Project button, stays on the left */}
        <button
          onClick={() => openModal()}
          className={`group mt-6 inline-flex h-[42px] items-center justify-center gap-2 self-start rounded-full bg-[#D44B08] px-6 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#B93F06] focus-visible:ring-2 focus-visible:ring-[#D44B08] focus-visible:ring-offset-2 active:scale-[0.98] md:hidden ${reveal(
            'delay-[600ms]'
          )}`}
        >
          Start Project
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      <ProjectModal open={modalOpen} service={modalService} onClose={closeModal} onSubmit={onSubmit} />
    </section>
  )
}