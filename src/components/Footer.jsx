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
    <footer className="bg-[#1D2B49] font-['Libre_Baskerville',serif] text-white">
      <div className="mx-auto w-full max-w-[573px] px-4 py-12 md:max-w-[1292px] md:px-6 md:py-16 xl:px-0">
        {/* Logo + social icons */}
        <div className="flex flex-col items-center gap-8">
          <a href="#home" aria-label="Fera Digital Solutions">
            <img
              src="/footer.png"
              alt="Fera Digital Solutions"
              className="h-[34px] w-auto object-contain md:h-[44px]"
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
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D44B08] hover:text-white active:scale-95 md:h-[44px] md:w-[44px]"
                >
                  <Icon className="h-[16px] w-[16px] md:h-[18px] md:w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar: copyright + Privacy / Terms */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[11px] md:flex-row md:text-[12px]">
          <p className="text-white/50">© {new Date().getFullYear()} Fera Digital Solutions</p>

          <div className="flex items-center gap-4">
            <a
              href="#privacy"
              onClick={goTo('privacy')}
              className="text-white/50 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <span className="text-white/20">|</span>
            <a
              href="#terms"
              onClick={goTo('terms')}
              className="text-white/50 transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}