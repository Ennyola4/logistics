
import { motion } from "framer-motion"
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiCompass,
  FiGlobe,
  FiHeart,
  FiPackage,
  FiShield,
  FiTruck,
  FiUsers,
} from "react-icons/fi"
import { Link } from "react-router-dom"

const VALUES = [
  {
    icon: FiHeart,
    title: "People first",
    description: "We build dependable relationships by listening, communicating clearly, and treating every delivery with care.",
  },
  {
    icon: FiShield,
    title: "Trust in every mile",
    description: "We take ownership of the details and work to make every handoff feel considered and dependable.",
  },
  {
    icon: FiCompass,
    title: "Progress with purpose",
    description: "We look for practical, thoughtful ways to connect businesses, communities, and opportunity.",
  },
]

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85",
    alt: "Cargo containers being transported across the water",
    label: "Connecting markets",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=85",
    alt: "A freight truck moving goods along a road",
    label: "The road ahead",
    className: "md:col-span-5",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
    alt: "Logistics operations inside a distribution warehouse",
    label: "Every detail matters",
    className: "md:col-span-5",
  },
]

const AboutUs = () => (
  <main>
    <section className="relative isolate overflow-hidden bg-dark text-white">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2200&q=85')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark via-dark/85 to-dark/40" aria-hidden="true" />
      <div className="absolute -right-28 top-16 -z-10 h-80 w-80 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid min-h-[520px] max-w-[1450px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.7fr] lg:px-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
            <span className="h-2 w-2 bg-primary" /> About our company
          </p>
          <h1 className="mt-7 text-5xl font-bold uppercase leading-[0.88] tracking-[-0.035em] sm:text-5xl lg:text-[4.5rem]">
            We move goods.<br />
            <span className="text-primary">We move possibility.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            We believe better logistics can bring people, businesses, and opportunities closer. We&apos;re here to make every journey feel more connected.
          </p>
          <a href="#our-story" className="mt-8 inline-flex min-h-12 items-center gap-3 text-sm font-bold text-white transition-colors hover:text-primary">
            Get to know us <FiArrowDown aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="hidden max-w-sm justify-self-end border border-white/20 bg-dark/55 p-7 backdrop-blur-md sm:block lg:p-8"
        >
          <span className="grid h-12 w-12 place-items-center bg-primary text-white"><FiGlobe size={22} aria-hidden="true" /></span>
          <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Our point of view</p>
          <p className="mt-3 font-heading text-3xl font-bold uppercase leading-tight sm:text-4xl">Every connection can take us further.</p>
          <p className="mt-4 text-sm leading-6 text-white/65">The right logistics partner makes the distance between an idea and its destination feel smaller.</p>
        </motion.div>
      </div>
    </section>

    <section id="our-story" className="mx-auto max-w-[1450px] scroll-mt-28 px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-primary/60" aria-hidden="true" />
          <img
            src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=85"
            alt="Packages moving through a busy logistics distribution center"
            loading="lazy"
            className="relative aspect-[4/3] w-full object-cover"
          />
          <div className="absolute -bottom-5 right-4 bg-primary px-5 py-4 text-white sm:right-8 sm:px-7 sm:py-5">
            <p className="font-heading text-2xl font-bold uppercase sm:text-3xl">Moving forward</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">Together, every day</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="pt-5 lg:pt-0"
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Our story</p>
          <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] text-dark sm:text-6xl">
            Logistics is about more than the destination.
          </h2>
          <p className="mt-6 text-sm leading-7 text-secondary/80 sm:text-base sm:leading-8">
            It&apos;s about the people waiting for a delivery, the business counting on its next shipment, and the communities connected along the way. That perspective shapes how we work.
          </p>
          <p className="mt-4 text-sm leading-7 text-secondary/80 sm:text-base sm:leading-8">
            We bring services together around real needs: practical planning, clear communication, and thoughtful care at every step. From a single delivery to a wider supply chain, our goal is to make moving goods feel simpler and more dependable.
          </p>
          <Link to="/services" className="mt-7 inline-flex items-center gap-3 text-sm font-extrabold text-primary transition-colors hover:text-dark">
            Explore what we do <FiArrowRight aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>

    <section className="bg-light">
      <div className="mx-auto max-w-[1450px] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <div className="mb-11 max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Our mission & vision</p>
          <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] text-dark sm:text-6xl">A clear purpose.<br className="hidden sm:block" /> A bigger horizon.</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="relative isolate min-h-[290px] overflow-hidden bg-dark p-7 text-white sm:p-10"
          >
            <div className="absolute -right-14 -top-14 -z-10 h-56 w-56 rounded-full border-[32px] border-white/5" aria-hidden="true" />
            <span className="grid h-12 w-12 place-items-center bg-primary text-white"><FiPackage size={21} aria-hidden="true" /></span>
            <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Our mission</p>
            <h3 className="mt-3 max-w-xl font-heading text-3xl font-bold uppercase leading-tight sm:text-4xl">Make logistics simpler, so business can go further.</h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/65">We connect dependable services and attentive people to help customers move goods with greater clarity and confidence.</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative isolate min-h-[290px] overflow-hidden border border-black/10 bg-white p-7 sm:p-10"
          >
            <div className="absolute -right-14 -top-14 -z-10 h-56 w-56 rounded-full border-[32px] border-primary/5" aria-hidden="true" />
            <span className="grid h-12 w-12 place-items-center bg-primary/10 text-primary"><FiGlobe size={21} aria-hidden="true" /></span>
            <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Our vision</p>
            <h3 className="mt-3 max-w-xl font-heading text-3xl font-bold uppercase leading-tight text-dark sm:text-4xl">A more connected future, within everyone&apos;s reach.</h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-secondary/75">We aspire to help create a world where distance is less of a barrier to opportunity, growth, and meaningful connection.</p>
          </motion.article>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-[1450px] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">What guides us</p>
          <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] text-dark sm:text-6xl">The way we move matters.</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-secondary/75 sm:text-base">Our values show up in the everyday choices that make a journey work better.</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {VALUES.map(({ icon: Icon, title, description }, index) => (
          <motion.article
            key={Icon.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="border border-black/10 bg-white p-6 transition-colors hover:border-primary/30 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center bg-light text-primary"><Icon size={21} aria-hidden="true" /></span>
            </div>
            <h3 className="mt-8 text-lg font-extrabold text-dark">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-secondary/75">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>

    <section className="bg-dark text-white">
      <div className="mx-auto max-w-[1450px] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">The people behind every move</p>
            <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] sm:text-6xl">Good journeys<br />take a team.</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            From planning and coordination to the final handoff, logistics is a team effort. We value the people who bring care, local understanding, and a problem-solving mindset to every part of the journey.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { icon: FiUsers, title: "People at the center", text: "We make room for real conversations and responsive support." },
            { icon: FiTruck, title: "One connected journey", text: "We work across each stage to keep the bigger picture in view." },
            { icon: FiGlobe, title: "Opportunity in motion", text: "We believe every connection can help communities thrive." },
          ].map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="border border-white/15 p-6 sm:p-7"
            >
              <Icon className="text-primary" size={23} aria-hidden="true" />
              <h3 className="mt-5 text-sm font-extrabold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section id="gallery" className="mx-auto max-w-[1450px] scroll-mt-28 px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">A look at what we do</p>
          <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] text-dark sm:text-6xl">In motion, together.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-secondary/75">A glimpse into the connected world of moving, storing, and delivering goods.</p>
      </div>
      <div className="grid auto-rows-[210px] gap-4 md:auto-rows-[230px] md:grid-cols-12">
        {GALLERY.map(({ src, alt, label, className }, index) => (
          <motion.figure
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative overflow-hidden bg-light ${className}`}
          >
            <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
              <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-white sm:text-sm">{label}</span>
              <span className="grid h-9 w-9 shrink-0 place-items-center border border-white/50 text-white transition-colors group-hover:bg-primary group-hover:border-primary"><FiArrowUpRight aria-hidden="true" /></span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-[1450px] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-16">
      <div className="relative overflow-hidden bg-primary px-6 py-10 text-white sm:px-10 sm:py-14 lg:flex lg:items-center lg:justify-between lg:px-14">
        <div className="absolute -right-14 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" aria-hidden="true" />
        <div className="relative max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/75">Let&apos;s make the next connection</p>
          <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] sm:text-5xl">Your journey starts here.</h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base">Have a shipment to plan or a question for our team? We&apos;d be glad to hear from you.</p>
        </div>
        <Link to="/contact" className="relative mt-7 inline-flex min-h-14 shrink-0 items-center justify-center gap-4 bg-dark px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-dark/90 lg:mt-0">
          Contact our team <FiArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  </main>
)

export default AboutUs
