import { useEffect, useRef, useState } from 'react'

// Placeholder testimonials and photos. Replace with your real clients' words and pictures.
const avatar = (n) => `https://i.pravatar.cc/200?img=${n}`

const testimonials = [
  {
    name: 'PROF. SUNNY DAVID',
    role: 'Department of Computer Science',
    img: avatar(12),
    text: 'Fera delivered our school management system ahead of schedule. The code was clean, well documented and our staff were trained on it within a week.',
  },
  {
    name: 'ADAEZE OKONKWO',
    role: 'MSc Student, Data Science',
    img: avatar(47),
    text: 'My data analysis chapter was clear, properly structured and easy to defend. My supervisor commended the methodology section.',
  },
  {
    name: 'DR. IBRAHIM MUSA',
    role: 'Research Lead, Health Institute',
    img: avatar(33),
    text: 'They built our prediction model and explained every step of it. The results were reproducible, which is what mattered most to us.',
  },
  {
    name: 'GRACE ADEBAYO',
    role: 'Founder, Brightpath Academy',
    img: avatar(5),
    text: 'Our website and student portal look professional and work smoothly. Parents tell us how easy it is to check results and fees.',
  },
  {
    name: 'EMEKA NWOSU',
    role: 'PhD Candidate, Engineering',
    img: avatar(15),
    text: 'Great communication from start to finish. My journal article was formatted correctly and accepted after only minor revisions.',
  },
  {
    name: 'FATIMA BELLO',
    role: 'Operations Manager, Nova Logistics',
    img: avatar(44),
    text: 'The dashboard they built gives us live numbers we used to wait weeks for. Support after launch has been fast and friendly.',
  },
  {
    name: 'TUNDE ALABI',
    role: 'Final Year Student, Computer Science',
    img: avatar(60),
    text: 'My final year project was fully implemented and I understood every part of it. The documentation made my presentation easy.',
  },
  {
    name: 'CHIOMA EZE',
    role: 'Programme Director, Hope Foundation',
    img: avatar(32),
    text: 'Their survey system collected and cleaned our field data without a hitch. The CSV exports saved our team days of work.',
  },
  {
    name: 'DR. SAMUEL OGUNDELE',
    role: 'Lecturer, Economics',
    img: avatar(68),
    text: 'Rigorous, honest and on time. Their literature review was thorough and every reference was properly cited.',
  },
  {
    name: 'BLESSING AKPAN',
    role: 'PGD Student, Public Health',
    img: avatar(49),
    text: 'They kept me updated at every stage and delivered within the days promised. I would happily recommend them to my classmates.',
  },
]

const rowOne = testimonials.slice(0, 5)
const rowTwo = testimonials.slice(5)

function Card({ t }) {
  return (
    <figure className="mr-[16px] flex h-[220px] w-[300px] shrink-0 select-none flex-col justify-between rounded-[20px] bg-white p-5 md:mr-[20px] md:h-[250px] md:w-[430px] md:p-6 xl:mr-[28px] xl:h-[312px] xl:w-[585px] xl:p-8">
      <blockquote className="text-[13px] font-normal leading-[20px] text-black md:text-[15px] md:leading-[26px] xl:text-[18px] xl:leading-[34px]">
        {t.text}
      </blockquote>

      <figcaption className="flex items-center gap-3 xl:gap-4">
        <img
          src={t.img}
          alt={t.name}
          draggable={false}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
              t.name
            )}&background=D94801&color=fff&size=200`
          }}
          className="h-[48px] w-[48px] shrink-0 rounded-full object-cover md:h-[60px] md:w-[60px] xl:h-[89px] xl:w-[89px]"
        />
        <div className="flex min-w-0 flex-col text-left">
          <span className="text-[13px] font-bold leading-[18px] text-black md:text-[15px] md:leading-[22px] xl:text-[18px] xl:leading-[28px]">
            {t.name}
          </span>
          <span className="text-[12px] font-normal leading-[16px] text-black/70 md:text-[13px] md:leading-[20px] xl:text-[14px] xl:leading-[24px]">
            {t.role}
          </span>
        </div>
      </figcaption>
    </figure>
  )
}

/*
  One scrolling row.
  dir = -1 moves left, dir = 1 moves right.
  Pressing or touching stops it, letting go continues it.
  Dragging with a mouse or finger moves the row by hand.
*/
function MarqueeRow({ items, dir, speed }) {
  const trackRef = useRef(null)
  const pos = useRef(0)
  const started = useRef(false)
  const paused = useRef(false)
  const dragging = useRef(false)
  const lastX = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf
    let last = performance.now()

    const wrap = (half) => {
      while (pos.current > 0) pos.current -= half
      while (pos.current <= -half) pos.current += half
    }

    const tick = (now) => {
      const dt = Math.min(now - last, 50)
      last = now
      const half = track.scrollWidth / 2
      if (half > 0) {
        if (!started.current) {
          // Right-moving rows start shifted left so there is content to reveal
          pos.current = dir > 0 ? -half : 0
          started.current = true
        }
        if (!paused.current && !dragging.current && !reduce) {
          pos.current += (dir * speed * dt) / 1000
        }
        wrap(half)
        track.style.transform = `translate3d(${pos.current}px,0,0)`
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [dir, speed])

  const onDown = (e) => {
    paused.current = true
    dragging.current = true
    lastX.current = e.clientX
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }
  const onMove = (e) => {
    if (!dragging.current) return
    pos.current += e.clientX - lastX.current
    lastX.current = e.clientX
  }
  const onUp = () => {
    dragging.current = false
    paused.current = false
  }

  return (
    <div
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      onPointerLeave={() => !dragging.current && (paused.current = false)}
      className="w-full cursor-grab touch-pan-y overflow-hidden active:cursor-grabbing"
    >
      <div ref={trackRef} className="flex w-max will-change-transform">
        {items.map((t) => (
          <Card key={t.name} t={t} />
        ))}
        {/* Duplicate set so the loop never shows a gap */}
        {items.map((t) => (
          <div key={`dup-${t.name}`} aria-hidden="true">
            <Card t={t} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const reveal = (delay) =>
    `transition-all duration-700 ease-out motion-reduce:transition-none ${delay} ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="w-full overflow-hidden bg-black font-['Libre_Baskerville',serif]"
    >
      {/* Max width wrapper: everything stops growing at 1440px and stays centred when zoomed out */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-center py-16 md:py-24 xl:min-h-[min(65vw,1231px)] xl:py-20">
        {/* Heading */}
        <div className="mx-auto flex max-w-[573px] flex-col items-center gap-3 px-4 text-center md:max-w-[760px] md:gap-5 xl:gap-6">
          <span
            className={`text-[11px] font-bold uppercase leading-[20px] tracking-[0.16em] text-white md:text-[12px] xl:text-[16px] xl:leading-[38px] ${reveal(
              'delay-[100ms]'
            )}`}
          >
            Testimonials
          </span>

          <h2
            className={`text-[28px] font-bold leading-[36px] text-white md:text-[38px] md:leading-[46px] xl:text-[48px] xl:leading-[59px] ${reveal(
              'delay-[200ms]'
            )}`}
          >
            Review from Our Clients
          </h2>

          <p
            className={`max-w-[340px] text-[14px] font-normal leading-[22px] text-white/70 md:max-w-none md:text-[15px] md:leading-[24px] xl:text-[18px] xl:leading-[28px] ${reveal(
              'delay-[300ms]'
            )}`}
          >
            We value every projects and are committed to delivering quality work.
          </p>
        </div>

        {/* Two rows: top moves left, bottom moves right */}
        <div
          className={`relative mt-10 md:mt-14 xl:mt-16 ${reveal('delay-[450ms]')}`}
        >
          <div className="flex flex-col gap-[16px] md:gap-[20px] xl:gap-[28px]">
            <MarqueeRow items={rowOne} dir={-1} speed={35} />
            <MarqueeRow items={rowTwo} dir={1} speed={35} />
          </div>

          {/* Soft edge fade so cards slide in and out smoothly at the max-width edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black to-transparent md:w-16 xl:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-black to-transparent md:w-16 xl:w-32" />
        </div>
      </div>
    </section>
  )
}