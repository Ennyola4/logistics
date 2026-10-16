
import { useEffect, useState, type FC } from "react"
import { BsFillChatQuoteFill } from "react-icons/bs"
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi"

interface NavLink {
  label: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
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
          : "px-3 pb-2 pt-3 sm:px-6 sm:pt-5 lg:px-8"
      }`}
    >
      <div
        className={`mx-auto overflow-hidden border border-black/5 shadow-xs transition-all duration-300 ${
          isScrolled
            ? "w-full max-w-none rounded-none border-x-0 border-t-0"
            : "max-w-[1710px] rounded-[1.75rem]"
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
          <a
            href="/"
            aria-label="Home"
            onClick={closeMobileMenu}
            className="flex min-w-0 shrink-0 items-center"
          >
            <img
              src="/truck.png"
              alt="Company logo"
              className={`block w-auto object-contain transition-all duration-300 ${
                isScrolled
                  ? "h-8 max-w-[clamp(5rem,24vw,9rem)] sm:h-10 lg:h-12"
                  : "h-9 max-w-[clamp(5rem,24vw,10rem)] sm:h-12 lg:h-14"
              }`}
            />

            <span className="hidden border-l border-black/10 pl-3 text-[10px] font-extrabold leading-tight tracking-[0.14em] text-primary sm:block lg:text-[11px] lg:tracking-[0.18em]">
              Moving
              <br />
              Africa forward
            </span>
          </a>

          {/* Desktop navigation */}
          <ul className="ml-auto hidden items-center gap-0.5 lg:flex xl:gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold text-secondary transition-colors hover:bg-light hover:text-primary xl:px-3 xl:text-sm"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA and mobile menu button */}
          <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-3">
            <a
              href="/get-a-quote"
              className="hidden h-10 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-primary px-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110 lg:inline-flex xl:px-5"
            >
              Get a Quote
              <BsFillChatQuoteFill aria-hidden="true" />
            </a>

            <button
              type="button"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-light text-secondary transition-colors hover:bg-primary hover:text-white lg:hidden"
            >
              {mobileMenuOpen ? (
                <FiX size={22} aria-hidden="true" />
              ) : (
                <FiMenu size={22} aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } border-t border-black/5 bg-white px-4 pb-5 sm:px-6 lg:hidden`}
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <li
                key={label}
                className="border-b border-black/5 last:border-0"
              >
                <a
                  href={href}
                  onClick={closeMobileMenu}
                  className="block py-3 text-base font-semibold text-secondary transition-colors hover:text-primary"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 grid grid-cols-1 gap-2 min-[400px]:grid-cols-2">
            <a
              href="/get-a-quote"
              onClick={closeMobileMenu}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-bold text-white transition hover:brightness-110"
            >
              Get a Quote
              <FiArrowUpRight aria-hidden="true" />
            </a>

            <a
              href="/contact"
              onClick={closeMobileMenu}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-black/10 px-4 py-3 text-center text-sm font-semibold text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Navbar