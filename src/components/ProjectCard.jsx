import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { flipColors } from './projectsData'

// White by default, flips to a coloured card on its own timer
// (different timing + colour per card). Hover flips it too.
export default function ProjectCard({ project, index, run, onOpen }) {
  const [mounted, setMounted] = useState(false)
  const [auto, setAuto] = useState(false)
  const [hover, setHover] = useState(false)

  // Fade-up when the card appears
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60 + (index % 4) * 120)
    return () => clearTimeout(t)
  }, [index])

  // Each card has its own rhythm: wait 5s+ then flip, hold, flip back, repeat
  useEffect(() => {
    if (!run) return
    const wait = 5000 + (index % 4) * 1200
    const hold = 3000 + (index % 3) * 500
    const t = setTimeout(() => setAuto((a) => !a), auto ? hold : wait)
    return () => clearTimeout(t)
  }, [run, auto, index])

  const on = auto || hover
  const color = flipColors[index % flipColors.length]

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen()
        }
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative mx-auto aspect-[346/331] w-full max-w-[420px] cursor-pointer overflow-hidden shadow-[0_0_12px_rgba(0,0,0,0.08)] outline-none transition-all duration-700 ease-out focus-visible:ring-2 focus-visible:ring-[#D44B08] motion-reduce:transition-none md:max-w-none ${
        on ? color : 'bg-white'
      } ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
    >
      {/* Image: 328x252 -> 288x104 on flip, corners disappear */}
      <div
        className={`absolute overflow-hidden transition-all duration-700 ease-in-out motion-reduce:transition-none ${
          on
            ? 'left-[8.4%] right-[8.4%] top-[7%] h-[31.4%] rounded-none'
            : 'left-[2.6%] right-[2.6%] top-[2.7%] h-[76%] rounded-[10px]'
        }`}
      >
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src = `https://picsum.photos/seed/project${project.id}/656/504`
          }}
          className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-out ${
            on ? 'scale-110' : 'scale-100'
          }`}
        />
      </div>

      {/* Text block: white with a 50px top-right curve, slides up on flip */}
      <div
        className={`absolute inset-x-0 bottom-0 flex flex-col overflow-hidden px-[5%] transition-all duration-700 ease-in-out motion-reduce:transition-none ${
          on
            ? 'top-[43%] rounded-tr-none bg-white/0 pt-[2%]'
            : 'top-[59%] rounded-tr-[50px] bg-white pt-[4%]'
        }`}
      >
        <span
          className={`text-[8px] font-medium uppercase leading-[18px] transition-colors duration-700 ${
            on ? 'text-white/80' : 'text-black/60'
          }`}
        >
          {project.category}
        </span>

        <div className="mt-0.5 flex items-center justify-between gap-2">
          <h3
            className={`line-clamp-2 text-[13px] font-medium leading-[1.25] transition-colors duration-700 xl:text-[16px] ${
              on ? 'text-white' : 'text-[#091E4C]'
            }`}
          >
            {project.title}
          </h3>
          <ArrowRight
            className={`h-4 w-4 shrink-0 text-[#091E4C] transition-all duration-500 ${
              on ? 'hidden' : 'block'
            }`}
          />
        </div>

        <p
          className={`mt-1.5 line-clamp-2 text-[9px] font-medium italic leading-[14px] transition-colors duration-700 xl:text-[10px] ${
            on ? 'text-white/80' : 'text-black/70'
          }`}
        >
          {project.description}
        </p>
      </div>

      {/* Learn more (rounded) appears on flip */}
      <button
        type="button"
        tabIndex={on ? 0 : -1}
        onClick={(e) => {
          e.stopPropagation()
          onOpen()
        }}
        className={`absolute bottom-[6%] left-[5%] inline-flex h-[32px] items-center justify-center rounded-full bg-white px-6 text-[11px] font-semibold text-[#091E4C] transition-all duration-500 hover:bg-[#D44B08] hover:text-white active:scale-[0.97] ${
          on ? 'translate-y-0 opacity-100 delay-300' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        Learn more
      </button>
    </article>
  )
}