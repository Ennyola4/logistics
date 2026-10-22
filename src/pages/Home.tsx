import { motion, } from "framer-motion"
import { Link } from "react-router-dom"
import Tracker from "../components/Tracker"
import {
  FiArrowDown,
  FiArrowUpRight,
  FiShield,
} from "react-icons/fi"
import GetAQuoteButton from "../components/GetAQuoteButton"
import Stats from "../components/Stats"
import WhatWeDo from "../components/WhatWeDo"



const GALLERY_IMAGES = [
  {
    src: "https://www.tawi.com/cdn-cgi/image/width=768,format=auto/globalassets/tawi/lifting-insights/top-logistic-trends_blogpost.jpg?ref=03078CE130",
    alt: "A delivery truck transporting cargo on the road",
    label: "Road freight",
    layout: "col-span-1 row-span-2 col-start-1 row-start-1 sm:col-span-3 sm:row-span-4 sm:col-start-1 sm:row-start-1",
  },
  {
    src: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=85",
    alt: "Cargo containers ready for international shipment",
    label: "Global shipping",
    layout: "col-span-1 row-span-2 col-start-2 row-start-1 sm:col-span-3 sm:row-span-3 sm:col-start-4 sm:row-start-1",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
    alt: "Freight organized inside a modern logistics warehouse",
    label: "Smart warehousing",
    layout: "col-span-1 row-span-2 col-start-1 row-start-3 sm:col-span-2 sm:row-span-3 sm:col-start-4 sm:row-start-4",
  },
  {
    src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=85",
    alt: "A freight truck moving goods across the country",
    label: "On the move",
    layout: "col-span-1 row-span-2 col-start-2 row-start-3 sm:col-span-3 sm:row-span-2 sm:col-start-1 sm:row-start-5",
  },
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=85",
    alt: "A logistics truck at a distribution center",
    label: "Last-mile delivery",
    layout: "col-span-2 row-span-2 col-start-1 row-start-5 sm:col-span-1 sm:row-span-3 sm:col-start-6 sm:row-start-4",
  },
] as const

const Home = () => {
  return (
    <>
      <main id="top">
        <section className="relative mx-auto grid min-h-[620px] max-w-[1710px] items-center gap-10 overflow-hidden px-5 pb-16 sm:px-8 md:min-h-[680px] md:grid-cols-[0.9fr_1.1fr] md:px-12 md:py-16 lg:px-20 lg:py-20">
          <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-light blur-3xl" />
          <motion.div
            className="relative z-10 max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-2 mt-8 inline-flex items-center gap-2 border border-primary/15 shadow-sm bg-light/70 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-primary">
              <span className="h-2 w-2 bg-primary" />
              Logistics without limits
            </div>
            <h1 className="max-w-[680px] text-4xl font-bold uppercase leading-[0.88] tracking-[-0.035em] text-dark sm:text-5xl lg:text-[4.0rem]">
              We move <span className="text-primary">Africa</span> forward.
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-secondary/75 sm:text-lg sm:leading-8">
              From first mile to final destination, we make shipping simpler, supply chains smarter, and opportunity easier to reach.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/get-a-quote" className="inline-flex min-h-14 items-center gap-5  bg-primary px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110">
                Plan a shipment <FiArrowUpRight size={18} aria-hidden="true" className="ml-3.5" />
              </Link>
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
            className="relative min-h-[390px] sm:min-h-[470px] md:min-h-[500px]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-6 gap-2 sm:grid-cols-6 sm:gap-3" aria-label="Logistics photo gallery">
              {GALLERY_IMAGES.map(({ src, alt, label, layout }, index) => (
                <motion.figure
                  key={src}
                  className={`relative overflow-hidden rounded-2xl border-[5px] border-white bg-light shadow-xl shadow-dark/20 transition-shadow hover:shadow-2xl sm:rounded-3xl sm:border-[7px] ${layout}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <img src={src} alt={alt} className="h-full w-full object-cover" loading={index > 1 ? "lazy" : "eager"} />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/75 to-transparent px-2 pb-2 pt-6 text-[9px] font-bold uppercase tracking-[0.12em] text-white sm:px-4 sm:pb-3 sm:pt-10 sm:text-xs sm:tracking-[0.16em]">
                    {label}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </motion.div>
        </section>
        <Stats />
        <Tracker />

        <WhatWeDo />

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
            <GetAQuoteButton />
          </motion.div>
        </section>
      </main>
    </>
  )
}

export default Home
