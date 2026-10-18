import { animate, motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Tracker from "../components/Tracker"
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiClock,
  FiGlobe,
  FiMapPin,
  FiPackage,
  FiShield,
  FiTruck,
} from "react-icons/fi"
import GetAQuoteButton from "../components/GetAQuoteButton"

const SERVICES = [
  {
    number: "01",
    title: "Freight forwarding",
    description: "Move cargo across borders and oceans with one dependable logistics partner.",
    icon: FiGlobe,
  },
  {
    number: "02",
    title: "Road transport",
    description: "Reliable, real-time road delivery connecting every point in your supply chain.",
    icon: FiTruck,
  },
  {
    number: "03",
    title: "Warehousing",
    description: "Flexible storage and fulfillment designed to keep your business moving.",
    icon: FiPackage,
  },
]

const CountUp = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  const isInView = useInView(ref, { once: true, amount: 0.6 })

  useEffect(() => {
    if (!isInView) return

    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (current) => setCount(Math.round(current)),
    })
    return () => controls.stop()
  }, [isInView, value])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const Home = () => {
  return (
    <>
      <main id="top">
        <section className="relative mx-auto grid min-h-[620px] max-w-[1710px] items-center gap-10 overflow-hidden px-5 pb-16 pt-10 sm:px-8 md:min-h-[680px] md:grid-cols-[0.9fr_1.1fr] md:px-12 md:py-16 lg:px-20 lg:py-20">
          <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-light blur-3xl" />
          <motion.div
            className="relative z-10 max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-7 inline-flex items-center gap-2 border border-primary/15 shadow-sm bg-light/70 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-primary">
              <span className="h-2 w-2 bg-primary" />
              Logistics without limits
            </div>
            <h1 className="max-w-[680px] text-4xl font-bold uppercase leading-[0.88] tracking-[-0.035em] text-dark sm:text-5xl lg:text-[6.5rem]">
              We move <span className="text-primary">Africa</span> forward.
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-secondary/75 sm:text-lg sm:leading-8">
              From first mile to final destination, we make shipping simpler, supply chains smarter, and opportunity easier to reach.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="/get-a-quote" className="inline-flex min-h-14 items-center gap-5  bg-primary px-6 text-sm font-bold text-white shadow-lg  transition hover:-translate-y-0.5 hover:brightness-110">
                Plan a shipment <FiArrowUpRight size={18} aria-hidden="true" className="ml-3.5" />
              </a>
              <a href="#services" className="inline-flex min-h-14 items-center gap-3 border border-primary/20 px-5 text-sm font-bold text-dark transition hover:bg-black/5">
                Explore our services <FiArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="mt-12 flex items-center gap-4 border-t border-black/10 pt-6">
              <div className="flex -space-x-2" aria-hidden="true">
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-[#e9c8a7] text-xs font-bold text-dark">A</span>
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-[#9bb7a4] text-xs font-bold text-dark">K</span>
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-[#d9a29d] text-xs font-bold text-dark">M</span>
              </div>
              <p className="text-xs leading-5 text-secondary/70 sm:text-sm">
                <span className="font-extrabold text-dark">Built on trust.</span> Moving businesses across the continent.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative min-h-[380px] sm:min-h-[400px] md:min-h-[400px]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85"
                alt="Modern logistics warehouse with freight ready for delivery"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/80 via-dark/10 to-transparent" />
              <div className="absolute bottom-7 left-7 max-w-xs text-white sm:bottom-10 sm:left-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Across borders. Beyond expectations.</p>
                <p className="mt-3 font-heading text-4xl font-semibold uppercase leading-none sm:text-5xl">Your cargo, in good hands.</p>
              </div>
            </div>
            <motion.div
              className="absolute -left-4 top-8 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-8 sm:top-12 sm:p-5"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-light text-primary"><FiMapPin size={21} aria-hidden="true" /></span>
              <div><p className="text-sm font-extrabold text-dark">Across Africa</p><p className="mt-0.5 text-xs text-secondary/65">One connected network</p></div>
            </motion.div>
            <motion.div
              className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl bg-primary p-4 text-white shadow-xl sm:bottom-8 sm:right-[-1.25rem] sm:p-5"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiClock size={22} aria-hidden="true" />
              <div><p className="text-sm font-extrabold">On time, every time</p><p className="mt-0.5 text-xs text-white/75">We keep business in motion</p></div>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          className="bg-dark text-white"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mx-auto grid max-w-[1450px] grid-cols-2 gap-y-8 px-5 py-10 sm:px-8 md:grid-cols-4 md:py-12 lg:px-16">
            {[
              { value: 50, suffix: "+", label: "Countries connected" },
              { value: 1200, label: "Dedicated specialists" },
              { value: 98, suffix: "%", label: "On-time deliveries" },
              { value: 24, suffix: "/7", label: "Shipment visibility" },
            ].map(({ value, suffix, label }) => (
              <motion.div
                key={label}
                className="border-l border-white/15 pl-4 sm:pl-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.12 }}
              >
                <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
                  <CountUp value={value} suffix={suffix} />
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55 sm:text-xs">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <Tracker />

        <section id="services" className="mx-auto max-w-[1450px] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">What we do</p>
              <h2 className="mt-4 font-heading text-3xl font-bold uppercase leading-[0.95] text-dark sm:text-6xl">Every move, made easier.</h2>
            </motion.div>
            <a href="/services" className="inline-flex items-center gap-3 self-start text-sm font-bold text-dark transition-colors hover:text-primary sm:self-auto">
              View all services <FiArrowRight aria-hidden="true" />
            </a>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {SERVICES.map(({ number, title, description, icon: Icon }, index) => (
              <motion.article
                key={number}
                className="group  border border-black/15 shadow-xs bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-dark/5 sm:p-8"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold tracking-[0.16em] text-primary">/{number}</span>
                  <span className="grid h-12 w-12 place-items-center shadow-sm bg-light text-primary transition-colors group-hover:bg-primary group-hover:text-white"><Icon size={22} aria-hidden="true" /></span>
                </div>
                <h3 className="mt-9 text-xl font-extrabold text-dark">{title}</h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-secondary/70">{description}</p>
                <a href="/services" aria-label={`Learn more about ${title}`} className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-dark transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-white"><FiArrowUpRight aria-hidden="true" /></a>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="w-full pb-16 sm:pb-20">
          <motion.div
            className="flex w-full flex-col justify-evenly gap-8 overflow-visible bg-light p-7 shadow-sm sm:p-10 md:flex-row md:items-center md:p-14"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-primary"><FiShield aria-hidden="true" /> A partner you can count on</div>
              <h2 className="font-heading text-4xl font-bold uppercase leading-[0.95] text-dark sm:text-5xl">Let&apos;s get your next delivery moving.</h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-secondary/75 sm:text-base">Tell us where it needs to go. We&apos;ll help you find the smarter way to get it there.</p>
            </div>
           <GetAQuoteButton/>
          </motion.div>
        </section>
      </main>
    </>
  )
}

export default Home
