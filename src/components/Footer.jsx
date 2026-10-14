import { FaTiktok, FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa'
import { SiX, SiGmail } from 'react-icons/si'

const socials = [
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@femoderalab?_r=1&_t=ZS-9AVjiKqm31A',
    Icon: FaTiktok,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/femodera?rpxt=MW9pczd6bzh6a2ZlNA%3D%3D&utm_source=qr',
    Icon: FaInstagram,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/message/O2GORQBRZCS7N1',
    Icon: FaWhatsapp,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1DK88w9R12/?mibextid=wwXIfr',
    Icon: FaFacebookF,
  },
  {
    label: 'X',
    href: 'https://x.com/femodera?s=11',
    Icon: SiX,
  },
  {
    label: 'Gmail',
    href: 'mailto:femoderalab@gmail.com',
    Icon: SiGmail,
  },
]

export default function Footer() {
  const goTo = (hash) => (e) => {
    e.preventDefault()
    window.location.hash = hash
  }

  return (
    <footer className="w-full bg-[#1D2B49] font-['Libre_Baskerville',serif] text-white">
      {/* Max width wrapper: stays centred and stops growing at 1440px when zoomed out */}
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mx-auto w-full max-w-[573px] px-4 py-12 pb-[max(2rem,env(safe-area-inset-bottom))] md:max-w-[1292px] md:px-6 md:py-16 xl:px-0">
          {/* Logo + social icons */}
          <div className="flex flex-col items-center gap-7 md:gap-8">
            <a
              href="#home"
              aria-label="Fera Digital Solutions"
              className="rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#D44B08] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1D2B49]"
            >
              <img
                src="/footer.png"
                alt="Fera Digital Solutions"
                className="h-[38px] w-auto object-contain md:h-[46px]"
              />
            </a>

            <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white/10 text-white/80 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D44B08] hover:text-white focus-visible:ring-2 focus-visible:ring-[#D44B08] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D2B49] active:scale-95 md:h-[48px] md:w-[48px]"
                  >
                    <Icon className="h-[18px] w-[18px] md:h-[19px] md:w-[19px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom bar: copyright + Privacy / Terms */}
          <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/15 pt-6 text-[13px] md:mt-12 md:flex-row md:gap-3 md:text-[13px]">
            <div className="flex items-center gap-1 md:order-2">
              <a
                href="#privacy"
                onClick={goTo('privacy')}
                className="flex min-h-[44px] items-center rounded-md px-3 text-white/60 outline-none transition-colors hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[#D44B08]"
              >
                Privacy Policy
              </a>
              <span aria-hidden="true" className="text-white/20">
                |
              </span>
              <a
                href="#terms"
                onClick={goTo('terms')}
                className="flex min-h-[44px] items-center rounded-md px-3 text-white/60 outline-none transition-colors hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[#D44B08]"
              >
                Terms of Service
              </a>
            </div>

            <p className="text-white/50 md:order-1">
              © {new Date().getFullYear()} Fera Digital Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}