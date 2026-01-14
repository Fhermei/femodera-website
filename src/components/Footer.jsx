import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer
      className="pt-20 pb-10 text-gray-300"
      style={{ backgroundColor: "#3B2A1A" }}
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src={logo}
              alt="Femodera logo"
              className="h-10 mb-6"
            />
            <p className="max-w-md text-gray-300 leading-relaxed">
              Femodera is an academic and technology support lab focused on
              ethical research assistance, data analytics, and engineering-grade
              software solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-100">
              Navigation
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-100">
              Contact
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li>📞 +234 706 175 4538</li>
              <li>✉️ femoderalab@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Femodera. All rights reserved.
          </p>
          <p className="mt-4 sm:mt-0">
            Built with academic integrity & technical excellence.
          </p>
        </div>

      </div>
    </footer>
  );
}
