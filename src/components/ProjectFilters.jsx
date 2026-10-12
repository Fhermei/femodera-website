import { Search, X } from 'lucide-react'
import { filters } from './projectsData'

// Row 1: all filter buttons. Row 2: search. 10px gap between rows.
export default function ProjectFilters({ active, setActive, query, setQuery }) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-wrap justify-center gap-[6px] md:gap-[8px] xl:flex-nowrap xl:justify-start">
        {filters.map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => setActive(label)}
            aria-pressed={active === label}
            className={`whitespace-nowrap rounded-[4px] border px-[8px] py-[3px] text-[8px] font-medium uppercase leading-[14px] transition-all duration-300 active:scale-[0.96] md:px-[10px] md:text-[9px] md:leading-[16px] ${
              active === label
                ? 'border-[#D44B08] bg-[#D44B08] text-white'
                : 'border-black/40 bg-white text-black/70 hover:border-[#D44B08] hover:bg-[#D44B08] hover:text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <label className="relative block w-full">
        <span className="sr-only">Search projects</span>
        <Search className="pointer-events-none absolute left-3 top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-black/50" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="h-[32px] w-full rounded-[4px] border border-black/30 bg-white pl-9 pr-9 text-[11px] text-[#091E4C] outline-none transition placeholder:text-black/50 focus:border-[#D44B08] focus:ring-2 focus:ring-[#D44B08]/20 md:h-[34px]"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="absolute right-2 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full text-black/50 transition hover:bg-black/5 hover:text-black"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </label>
    </div>
  )
}