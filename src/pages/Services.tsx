import { motion } from "framer-motion"
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiBox,
  FiCheck,
  FiClock,
  FiGlobe,
  FiMapPin,
  FiPackage,
  FiRefreshCw,
  FiShield,
  FiTruck,
} from "react-icons/fi"
import { Link } from "react-router-dom"

const SERVICES = [
  {
    id: "freight",
    number: "01",
    title: "Freight forwarding",
    category: "Across borders",
    description:
      "Move goods by air, sea, or a combination of both. We coordinate every handoff, document, and milestone so your cargo stays on course.",
    icon: FiGlobe,
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Shipping containers aboard a cargo vessel",
    features: ["Air & ocean freight", "Customs coordination", "Shipment visibility"],
  },
  {
    id: "transport",
    number: "02",
    title: "Road transport",
    category: "Every mile covered",
    description:
      "Dependable full- and part-load transport for regional and cross-border deliveries, supported by careful planning and clear updates.",
    icon: FiTruck,
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Freight truck traveling along a highway",
    features: ["Full & partial loads", "Regional distribution", "Route coordination"],
  },
  {
    id: "warehousing",
    number: "03",
    title: "Warehousing",
    category: "Space to grow",
    description:
      "Keep inventory close to customers with flexible storage and fulfillment that adapts as your operation changes.",
    icon: FiPackage,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Organized inventory inside a modern warehouse",
    features: ["Flexible storage", "Pick & pack support", "Inventory handling"],
  },
  {
    id: "last-mile",
    number: "04",
    title: "Last-mile delivery",
    category: "Right to the door",
    description:
      "Make the final leg count with coordinated delivery that brings orders closer to the people and businesses waiting for them.",
    icon: FiMapPin,
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Delivery truck ready for a final-mile shipment",
    features: ["Scheduled delivery", "Delivery coordination", "Proof of delivery"],
  },
  {
    id: "supply-chain",
    number: "05",
    title: "Supply chain solutions",
    category: "Connected by design",
    description:
      "Bring your logistics together with practical planning and a joined-up view of how products move through your business.",
    icon: FiRefreshCw,
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Packages moving through a distribution operation",
    features: ["Shipment planning", "Multimodal coordination", "Process support"],
  },
  {
    id: "cargo-care",
    number: "06",
    title: "Cargo care & support",
    category: "Handled with care",
    description:
      "Get a real partner for the details around your shipment, from handling requirements to timely answers when plans change.",
    icon: FiShield,
    image:
      "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Logistics team coordinating goods in a warehouse",
    features: ["Handling guidance", "Responsive assistance", "Milestone updates"],
  },
]

const PILLARS = [
  {
    icon: FiClock,
    title: "Reliable by design",
    description: "Thoughtful planning and proactive updates help keep every move on track.",
  },
  {
    icon: FiBox,
    title: "Built around your cargo",
    description: "A solution shaped by what you ship, where it needs to go, and when it needs to arrive.",
  },
  {
    icon: FiCheck,
    title: "One accountable partner",
    description: "A coordinated team to help simplify the details from collection to delivery.",
  },
]

const Services = () => (
  <main>
    <section className="relative isolate overflow-hidden bg-dark text-white">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2200&q=85')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark via-dark/85 to-dark/45" aria-hidden="true" />
      <div className="absolute -right-28 top-20 -z-10 h-80 w-80 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid min-h-[540px] max-w-[1450px] items-end gap-12 px-5 pb-14 pt-20 sm:px-8 sm:pb-20 lg:min-h-[610px] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
            <span className="h-2 w-2 bg-primary" /> Logistics, made simpler
          </p>
          <h1 className="mt-7 text-5xl font-bold uppercase leading-[0.88] tracking-[-0.035em] sm:text-7xl lg:text-[6.5rem]">
            More than a move.<br />
            <span className="text-primary">Momentum.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            From the first mile to the final destination, our services connect the pieces of your supply chain—and keep your business moving forward.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex min-h-14 items-center gap-4 bg-primary px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Talk to our team <FiArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <a
              href="#our-services"
              className="inline-flex min-h-14 items-center gap-3 border border-white/30 px-5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Explore services <FiArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="hidden justify-self-end border border-white/20 bg-dark/50 p-7 backdrop-blur-md sm:block sm:max-w-sm lg:p-8"
        >
          <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">A connected journey</span>
          <p className="mt-4 font-heading text-3xl font-bold uppercase leading-tight sm:text-4xl">
            Plan it. Move it. Deliver it.
          </p>
          <p className="mt-4 text-sm leading-6 text-white/65">
            Flexible logistics support for the real-world needs of growing businesses.
          </p>
          <div className="mt-7 flex items-center gap-3 border-t border-white/15 pt-5 text-xs font-bold uppercase tracking-[0.12em] text-white/75">
            <span className="grid h-9 w-9 place-items-center bg-primary text-white"><FiGlobe size={18} aria-hidden="true" /></span>
            Local knowledge. Wider reach.
          </div>
        </motion.aside>
      </div>
    </section>

    <section id="our-services" className="mx-auto max-w-[1450px] scroll-mt-28 px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Our services</p>
          <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] text-dark sm:text-6xl">
            The right support<br className="hidden sm:block" /> for every shipment.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-secondary/80 sm:text-base">
          Choose a service or bring us the whole challenge. We&apos;ll help you find a practical way forward.
        </p>
      </div>

      <div className="mt-11 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map(({ id, number, title, category, description, icon: Icon, image, imageAlt, features }, index) => (
          <motion.article
            id={id}
            key={id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: "easeOut" }}
            className="group scroll-mt-32 overflow-hidden border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-dark/10"
          >
            <div className="relative h-52 overflow-hidden bg-light sm:h-56">
              <img src={image} alt={imageAlt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 bg-white px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-dark">{category}</span>
              <span className="absolute bottom-4 left-5 text-xs font-extrabold tracking-[0.18em] text-white">/{number}</span>
              <span className="absolute bottom-4 right-5 grid h-11 w-11 place-items-center bg-primary text-white"><Icon size={20} aria-hidden="true" /></span>
            </div>
            <div className="p-6 sm:p-7">
              <h3 className="font-heading text-3xl font-bold uppercase text-dark">{title}</h3>
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-secondary/80">{description}</p>
              <ul className="mt-5 space-y-2 border-t border-black/10 pt-5">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs font-semibold text-dark/75">
                    <FiCheck className="shrink-0 text-primary" aria-hidden="true" /> {feature}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-primary transition-colors hover:text-dark">
                Discuss this service <FiArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>

    <section className="bg-light">
      <div className="mx-auto max-w-[1450px] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Why work with us</p>
            <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] text-dark sm:text-6xl">Logistics with a human touch.</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-secondary/80 sm:text-base">
              Good logistics is more than moving freight. It&apos;s knowing what matters to your business and making the complicated feel clear.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="border border-black/10 bg-white p-6 sm:p-5 lg:p-6"
              >
                <span className="grid h-12 w-12 place-items-center bg-primary/10 text-primary"><Icon size={21} aria-hidden="true" /></span>
                <h3 className="mt-6 text-base font-extrabold text-dark">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-secondary/75">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-[1450px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
      <div className="relative overflow-hidden bg-dark px-6 py-10 text-white sm:px-10 sm:py-14 lg:flex lg:items-center lg:justify-between lg:px-14">
        <div className="absolute -right-12 -top-24 h-72 w-72 rounded-full border-[40px] border-white/5" aria-hidden="true" />
        <div className="relative max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Have a shipment in mind?</p>
          <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] sm:text-5xl">Let&apos;s get it moving.</h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 sm:text-base">Tell us what you need to move. We&apos;ll help you explore the right next step.</p>
        </div>
        <Link to="/contact" className="relative mt-7 inline-flex min-h-14 shrink-0 items-center justify-center gap-4 bg-primary px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110 lg:mt-0">
          Get in touch <FiArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  </main>
)

export default Services
