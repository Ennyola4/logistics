
import {
  FiArrowUp,
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi"
import { Link } from "react-router-dom"

const FOOTER_LINKS = {
  Explore: [
    { label: "Home", href: "/" },
    { label: "Our services", href: "/services" },
    { label: "About us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Freight forwarding", href: "/services#freight" },
    { label: "Road transport", href: "/services#transport" },
    { label: "Warehousing", href: "/services#warehousing" },
    { label: "Get a quote", href: "/get-a-quote" },
  ],
}

const Footer = () => (
  <footer className="bg-dark text-white">
    <div className="mx-auto max-w-[1450px] px-5 pb-8 pt-14 sm:px-8 sm:pt-20 lg:px-16">
      <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1fr] lg:gap-10 lg:pb-16">
        <div className="max-w-sm">
          <Link to="/" aria-label="Logistics home" className="inline-flex items-center gap-3">
            <img src="/logisticsLogo1.png" alt="" className="h-12 w-auto object-contain" />
            <span className="border-l border-white/20 pl-3 text-[10px] font-extrabold uppercase leading-tight tracking-[0.16em] text-white/90">
              Moving Africa<br />forward
            </span>
          </Link>
          <p className="mt-6 text-sm leading-7 text-white/60">
            Connecting businesses and communities with dependable logistics, from the first mile to the final destination.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {[
              { label: "LinkedIn", icon: FiLinkedin, href: "https://www.linkedin.com/" },
              { label: "Instagram", icon: FiInstagram, href: "https://www.instagram.com/" },
              { label: "Facebook", icon: FiFacebook, href: "https://www.facebook.com/" },
            ].map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <Icon size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading}>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-white">{heading}</h2>
            <ul className="mt-5 space-y-3">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="group inline-flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white">
                    {label}
                    <FiArrowUpRight className="opacity-0 transition-opacity group-hover:opacity-100" size={13} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-white">Get in touch</h2>
          <ul className="mt-5 space-y-4">
            <li>
              <Link to="/contact" className="flex items-start gap-3 text-sm leading-6 text-white/60 transition-colors hover:text-white">
                <FiMapPin className="mt-1 shrink-0 text-primary" size={16} aria-hidden="true" />
                Talk to our team about your delivery needs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white">
                <FiMail className="shrink-0 text-primary" size={16} aria-hidden="true" />
                Send us a message
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white">
                <FiPhone className="shrink-0 text-primary" size={16} aria-hidden="true" />
                Request a call back
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-5 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Logistics. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link to="/privacy" className="transition-colors hover:text-white">Privacy</Link>
          <Link to="/terms" className="transition-colors hover:text-white">Terms</Link>
          <a href="#top" className="inline-flex items-center gap-2 font-semibold text-white/70 transition-colors hover:text-white">
            Back to top <FiArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
