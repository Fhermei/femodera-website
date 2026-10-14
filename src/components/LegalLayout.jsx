import { useEffect, useState } from 'react'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import logo from '../assets/logo.png'

const EMAIL = 'femoderalab@gmail.com'
const PHONE = '+234 810 610 8753'

function Block({ b }) {
  if (typeof b === 'string') {
    return (
      <p className="text-[16px] leading-[28px] text-black/70 md:text-[17px] md:leading-[31px]">{b}</p>
    )
  }

  if (b.note) {
    return (
      <div className="rounded-[16px] border-l-4 border-[#D44B08] bg-[#F5F5F5] p-4 text-[15px] leading-[26px] text-[#091E4C] md:p-5 md:text-[16px] md:leading-[28px]">
        {b.note}
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-3">
      {b.list.map((item, i) => (
        <li
          key={i}
          className="flex gap-3 text-[16px] leading-[28px] text-black/70 md:text-[17px] md:leading-[31px]"
        >
          <span aria-hidden="true" className="mt-[11px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#D44B08] md:mt-[13px]" />
          <span>
            {typeof item === 'string' ? (
              item
            ) : (
              <>
                <strong className="font-bold text-[#091E4C]">{item.lead}</strong> {item.text}
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function LegalLayout({ label, title, intro, updated, sections, other }) {
  const [active, setActive] = useState(sections[0].id)
  const [tocOpen, setTocOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  // Highlight the section currently being read
  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-15% 0px -75% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  // Scroll with JS instead of #links, so the site's hash routing is not disturbed
  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTocOpen(false)
  }

  const goHash = (hash) => (e) => {
    e.preventDefault()
    window.location.hash = hash
  }

  return (
    <div className="min-h-screen w-full bg-white font-['Libre_Baskerville',serif]">
      {/* Header: same floating pill as the main navbar */}
      <div className="sticky top-0 z-50 bg-white/85 px-4 py-3 backdrop-blur md:px-6">
        <header className="mx-auto flex h-[56px] w-full max-w-[1292px] items-center justify-between rounded-full bg-[#FBFDFF] px-5 shadow-[0_0_5px_3px_rgba(160,160,160,0.1)] md:h-[64px] md:px-8">
          <a
            href="#"
            className="flex shrink-0 items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#D44B08] focus-visible:ring-offset-4"
          >
            <img
              src={logo}
              alt="Fera Digital Solutions"
              className="h-[26px] w-[82px] object-contain md:h-[32px] md:w-[104px]"
            />
          </a>

          <a
            href="#"
            className="group inline-flex h-[40px] items-center justify-center gap-2 rounded-full border border-[#091E4C] px-4 text-[13px] font-semibold text-[#091E4C] outline-none transition-all duration-300 hover:bg-[#091E4C] hover:text-white focus-visible:ring-2 focus-visible:ring-[#091E4C] focus-visible:ring-offset-2 active:scale-[0.98] md:px-5"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </a>
        </header>
      </div>

      {/* Title band */}
      <div className="w-full bg-[#021230]">
        <div className="mx-auto w-full max-w-[1292px] px-4 py-14 text-center md:px-6 md:py-20 lg:text-left xl:px-0">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#D94801] md:text-[12px] lg:text-[14px]">
            {label}
          </span>
          <h1 className="mt-3 text-[34px] font-bold leading-[42px] text-white md:text-[46px] md:leading-[54px] lg:text-[56px] lg:leading-[64px]">
            {title}
          </h1>
          <div className="mx-auto mt-5 h-[3px] w-12 rounded-full bg-[#D44B08] lg:mx-0" />
          <p className="mt-5 text-[13px] text-white/60 md:text-[14px]">Last updated: {updated}</p>
          <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-[26px] text-white/80 md:text-[17px] md:leading-[30px] lg:mx-0">
            {intro}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto w-full max-w-[1292px] px-4 py-10 md:px-6 md:py-16 lg:grid lg:grid-cols-[270px_1fr] lg:gap-16 xl:px-0">
        {/* Contents: collapsible on phones + tablet, sticky sidebar on desktop */}
        <aside className="lg:relative">
          <div className="lg:sticky lg:top-[110px]">
            <button
              type="button"
              onClick={() => setTocOpen((v) => !v)}
              aria-expanded={tocOpen}
              className="flex h-[52px] w-full items-center justify-between rounded-full border border-black/15 bg-white px-5 text-[14px] font-semibold text-[#091E4C] outline-none focus-visible:ring-2 focus-visible:ring-[#D44B08] lg:hidden"
            >
              On this page
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${tocOpen ? 'rotate-180' : ''}`} />
            </button>

            <nav
              aria-label="Contents"
              className={`${tocOpen ? 'mt-3 block' : 'hidden'} rounded-[20px] bg-[#F5F5F5] p-3 lg:mt-0 lg:block lg:max-h-[calc(100vh-150px)] lg:overflow-y-auto lg:bg-transparent lg:p-0 lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden`}
            >
              <p className="hidden pb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-black/45 lg:block">
                Contents
              </p>
              <ul className="flex flex-col">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => jump(s.id)}
                      className={`flex min-h-[44px] w-full items-center gap-3 rounded-[12px] px-3 text-left text-[14px] leading-[20px] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#D44B08] lg:rounded-none lg:border-l-2 lg:py-2 ${
                        active === s.id
                          ? 'font-bold text-[#D44B08] lg:border-[#D44B08]'
                          : 'text-[#091E4C]/70 hover:text-[#091E4C] lg:border-black/10'
                      }`}
                    >
                      <span className="w-6 shrink-0 text-[12px] opacity-70">{String(i + 1).padStart(2, '0')}</span>
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Sections */}
        <main className="mt-10 min-w-0 lg:mt-0">
          <div className="max-w-[760px]">
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-[100px] border-t border-black/10 py-8 first:border-t-0 first:pt-0 md:py-10 md:first:pt-0"
              >
                <span className="text-[13px] font-bold tracking-[0.12em] text-[#D94801]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-1 text-[24px] font-bold leading-[1.25] text-[#091E4C] md:text-[30px]">
                  {s.title}
                </h2>
                <div className="mt-5 flex flex-col gap-4 md:gap-5">
                  {s.blocks.map((b, j) => (
                    <Block key={j} b={b} />
                  ))}
                </div>
              </section>
            ))}

            {/* Contact card */}
            <div className="mt-6 rounded-[28px] bg-[#021230] p-6 text-center md:p-10 md:text-left">
              <h3 className="text-[22px] font-bold leading-[1.25] text-white md:text-[28px]">
                Have a question about this page?
              </h3>
              <p className="mt-3 text-[15px] leading-[26px] text-white/75 md:text-[16px]">
                Write to us and a real person will reply.
              </p>
              <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:gap-6">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex h-[50px] items-center justify-center rounded-full bg-[#D44B08] px-8 text-[15px] font-semibold text-white outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(212,75,8,0.4)] focus-visible:ring-2 focus-visible:ring-[#D44B08] focus-visible:ring-offset-2 focus-visible:ring-offset-[#021230] active:scale-[0.98] md:text-[14px]"
                >
                  Email us
                </a>
                <a
                  href={`tel:${PHONE.replace(/\s/g, '')}`}
                  className="text-[15px] text-white/80 underline-offset-4 outline-none hover:text-white hover:underline focus-visible:underline"
                >
                  {PHONE}
                </a>
              </div>
            </div>

            {/* Link to the other document */}
            <p className="mt-8 text-center text-[14px] text-black/60 md:text-left">
              Also read our{' '}
              <a
                href={`#${other.hash}`}
                onClick={goHash(other.hash)}
                className="font-bold text-[#D94801] underline-offset-4 hover:underline"
              >
                {other.label}
              </a>
              .
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}