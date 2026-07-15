import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#1D2B49] text-white/80">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img src={logo} alt="Fera Digital Solutions" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-sm text-white/60 leading-relaxed max-w-md">
              Fera Digital Solutions is a technology innovation and research lab 
              delivering software development, AI/ML solutions, and academic 
              research support for clients worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-sm text-white/60 hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="text-sm text-white/60 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#about" className="text-sm text-white/60 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>femoderalab@gmail.com</li>
              <li>+234 810 610 8753</li>
              <li>Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Fera Digital Solutions. All rights reserved.</p>
          <p>Built by Oyewole Oluwafemi David</p>
        </div>
      </div>
    </footer>
  )
}