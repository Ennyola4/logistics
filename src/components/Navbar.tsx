
import { useEffect, useState, type FC } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FiArrowRight, FiArrowUpRight, FiClock, FiX } from "react-icons/fi"
import { RiMenuUnfold2Line } from "react-icons/ri"
import { Link, NavLink } from "react-router-dom"

interface NavLink {
  label: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
]

const WORLD_FLAG_CODES = `ad ae af ag ai al am ao aq ar as at au aw ax az ba bb bd be bf bg bh bi bj bl bm bn bo bq br bs bt bv bw by bz ca cc cd cf cg ch ci ck cl cm cn co cr cu cv cw cx cy cz de dj dk dm do dz ec ee eg eh er es et fi fj fk fm fo fr ga gb gd ge gf gg gh gi gl gm gn gp gq gr gs gt gu gw gy hk hm hn hr ht hu id ie il im in io iq ir is it je jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md me mf mg mh mk ml mm mn mo mp mq mr ms mt mu mv mw mx my mz na nc ne nf ng ni nl no np nr nu nz om pa pe pf pg ph pk pl pm pn pr ps pt pw py qa re ro rs ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr ss st sv sx sy sz tc td tf tg th tj tk tl tm tn to tr tt tv tw tz ua ug um us uy uz va vc ve vg vi vn vu wf ws ye yt za zm zw`.split(" ")

const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-xs transition-all duration-300 ${
        isScrolled
          ? "px-0 pb-0 pt-0"
          : "px-3 pb-2 pt-3 sm:px-6  lg:px-8"
      }`}
    >
      <div
        className={`mx-auto overflow-hidden  transition-all duration-300 ${
          isScrolled
            ? "w-full max-w-none  border-x-0 border-t-0"
            : "max-w-[1710px] "
        }`}
      >
        {/* Announcement bar */}
        <div
          role="region"
          aria-label="Moving the world forward with global reach"
          className={`overflow-hidden bg-dark text-white transition-all duration-300 ${
            isScrolled
              ? "max-h-0 min-h-0 py-0 opacity-0"
              : "min-h-9 py-2 opacity-100"
          }`}
          aria-hidden={isScrolled}
        >
          <div className="flag-marquee-track" aria-hidden="true">
            {[0, 1].map((copy) => (
              <div className="flag-marquee-group" key={copy}>
                <span className="flag-marquee-divider" />
                {WORLD_FLAG_CODES.map((code) => (
                  <span className={`fi fi-${code} flag-marquee-flag`} key={`${copy}-${code}`} />
                ))}
                <span className="flag-marquee-divider" />
              </div>
            ))}
          </div>
        </div>

        {/* Main navigation */}
        <nav
          aria-label="Main navigation"
          className={`relative mx-auto flex w-full items-center justify-between gap-2 bg-light text-secondary transition-all duration-300 ${
            isScrolled
              ? "min-h-[68px] px-4 py-2 sm:min-h-[76px] sm:px-6 lg:px-10"
              : "min-h-[76px] px-3 py-3 sm:min-h-[88px] sm:px-6 lg:min-h-[100px] lg:px-8 xl:px-10"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="Home"
            onClick={closeMobileMenu}
            className="flex min-w-0 shrink-0 items-center"
          >
            <img
              src="/logisticsLogo1.png"
              alt="Company logo"
              className={`block w-auto object-contain transition-all duration-300 ${
                isScrolled
                  ? "h-8 max-w-[clamp(5rem,24vw,9rem)] sm:h-10 lg:h-12"
                  : "h-9 max-w-[clamp(5rem,24vw,10rem)] sm:h-12 lg:h-14"
              }`}
            />
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <NavLink
                  to={href}
                  end={href === "/"}
                  className={({ isActive }) =>
                    `relative whitespace-nowrap rounded-full px-2 py-2 text-[12px] font-semibold transition-colors hover:bg-white hover:text-primary xl:px-3 xl:text-sm after:absolute after:bottom-1 after:left-2 after:h-0.5 after:bg-primary after:transition-all xl:after:left-3 ${
                      isActive
                        ? "text-primary after:w-[calc(100%-1rem)] xl:after:w-[calc(100%-1.5rem)]"
                        : "text-secondary after:w-0 hover:after:w-[calc(100%-1rem)] xl:hover:after:w-[calc(100%-1.5rem)]"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Shipment tracker and mobile menu button */}
          <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
            <div className="hidden items-center gap-2 border border-black/10 bg-white p-1.5 lg:flex">
              <label htmlFor="navbar-tracking-number" className="sr-only">Track a shipment</label>
              <input
                id="navbar-tracking-number"
                type="text"
                placeholder="Track shipment"
                disabled
                className="h-9 w-28 bg-transparent px-2 text-xs font-semibold text-dark outline-none placeholder:text-secondary/60 disabled:cursor-not-allowed xl:w-32"
              />
              <button
                type="button"
                disabled
                title="Shipment tracking is coming soon"
                className="inline-flex h-9 items-center gap-1.5 bg-dark px-2.5 text-[10px] font-extrabold uppercase tracking-[0.08em] text-white/80 disabled:cursor-not-allowed sm:px-3"
              >
                Coming soon <FiClock size={13} aria-hidden="true" />
              </button>
            </div>

            <motion.button
              type="button"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-300 lg:hidden ${
                mobileMenuOpen
                  ? "bg-primary text-white"
                  : "bg-light text-secondary hover:bg-primary hover:text-white"
              }`}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                  transition={{ duration: 0.16 }}
                  className="grid place-items-center"
                >
                  {mobileMenuOpen ? (
                    <FiX size={21} aria-hidden="true" />
                  ) : (
                    <RiMenuUnfold2Line size={21} aria-hidden="true" />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        {/* Mobile navigation */}
        <AnimatePresence initial={false}>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              key="mobile-navigation"
              initial={{ height: 0, opacity: 0, y: -8 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-white/10 bg-dark text-white lg:hidden"
            >
              <nav aria-label="Mobile navigation" className="px-5 pb-5 pt-4 sm:px-7">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/45">Navigate</p>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">Menu / 0{NAV_LINKS.length}</span>
                </div>
                <motion.ul
                  initial="closed"
                  animate="open"
                  variants={{
                    open: { transition: { staggerChildren: 0.055, delayChildren: 0.04 } },
                    closed: { transition: { staggerChildren: 0.025, staggerDirection: -1 } },
                  }}
                  className="flex flex-col"
                >
                  {NAV_LINKS.map(({ label, href }, index) => (
                    <motion.li
                      key={label}
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: -12 },
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="border-b border-white/10 last:border-0"
                    >
                      <NavLink
                        to={href}
                        end={href === "/"}
                        onClick={closeMobileMenu}
                        className="group relative flex min-h-[58px] items-center gap-4 py-3 transition-colors after:absolute after:bottom-0 after:left-11 after:h-px after:bg-primary after:transition-all"
                      >
                        {({ isActive }) => (
                          <>
                            <span className="w-7 text-[10px] font-extrabold tracking-[0.12em] text-primary/80">0{index + 1}</span>
                            <span className={`flex-1 text-lg font-bold tracking-tight transition-colors group-hover:text-white ${isActive ? "text-white" : "text-white/85"}`}>{label}</span>
                            <FiArrowRight className="text-white/30 transition-all group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" />
                            {isActive && <span className="absolute bottom-0 left-11 right-0 h-px bg-primary" aria-hidden="true" />}
                          </>
                        )}
                      </NavLink>
                    </motion.li>
                  ))}
                </motion.ul>

                <div className="mt-5 grid grid-cols-1 gap-2 min-[400px]:grid-cols-2">
                  <Link
                    to="/get-a-quote"
                    onClick={closeMobileMenu}
                    className="inline-flex min-h-12 items-center justify-center gap-2 bg-primary px-4 py-3 text-center text-sm font-bold text-white transition hover:brightness-110"
                  >
                    Get a Quote <FiArrowUpRight aria-hidden="true" />
                  </Link>
                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/20 px-4 py-3 text-center text-sm font-semibold text-white/85 transition-colors hover:border-white/50 hover:text-white"
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>

  )
}

export default Navbar