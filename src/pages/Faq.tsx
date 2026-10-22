
import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiBox,
  FiChevronDown,
  FiGlobe,
  FiHelpCircle,
  FiSearch,
  FiTruck,
} from "react-icons/fi"
import { Link } from "react-router-dom"

const FAQ_CATEGORIES = [
  { id: "all", label: "All questions", icon: FiHelpCircle },
  { id: "shipping", label: "Shipping & services", icon: FiTruck },
  { id: "tracking", label: "Tracking & delivery", icon: FiBox },
  { id: "international", label: "International", icon: FiGlobe },
] as const

type CategoryId = (typeof FAQ_CATEGORIES)[number]["id"]

const QUESTIONS: { category: Exclude<CategoryId, "all">; question: string; answer: string }[] = [
  {
    category: "shipping",
    question: "What logistics services do you offer?",
    answer: "Our services include freight forwarding, road transport, warehousing, last-mile delivery, and supply chain support. Visit our Services page or contact our team to discuss the needs of your shipment.",
  },
  {
    category: "shipping",
    question: "How do I request a shipping quote?",
    answer: "Send us an enquiry with your collection and delivery locations, cargo type, approximate dimensions or weight, and preferred timing. The more detail you can share, the better we can understand your requirements.",
  },
  {
    category: "shipping",
    question: "What details do you need to plan a shipment?",
    answer: "Useful details include origin and destination, cargo description, size and weight, handling requirements, and any target dates. If some information is not available yet, start with what you know and we can clarify the rest together.",
  },
  {
    category: "shipping",
    question: "Can you help with warehousing and storage?",
    answer: "We can discuss warehousing and storage as part of a broader logistics plan. Tell us what kind of goods you handle, your expected volumes, and where you need support so we can understand the fit.",
  },
  {
    category: "tracking",
    question: "How can I track my shipment?",
    answer: "Online shipment tracking is coming soon. For help with a shipment already in progress, contact our team and include your shipment reference so they can identify your enquiry.",
  },
  {
    category: "tracking",
    question: "What should I do if my delivery is delayed?",
    answer: "Contact our team with your shipment reference and the latest delivery information you have. They can help review the status and discuss the next steps.",
  },
  {
    category: "tracking",
    question: "Can I change a delivery address or timing?",
    answer: "Changes may depend on where the shipment is in its journey. Please get in touch as soon as possible with your shipment reference and the requested change so the team can advise you.",
  },
  {
    category: "international",
    question: "Do you handle international freight?",
    answer: "We support freight movements across borders. Routes, service options, and requirements depend on the origin, destination, cargo, and timing. Share those details with us to start planning.",
  },
  {
    category: "international",
    question: "What documents are needed for cross-border shipping?",
    answer: "Documentation varies by route, goods, and applicable regulations. Provide an accurate cargo description and route details, then confirm specific document requirements with our team before dispatch.",
  },
  {
    category: "international",
    question: "Can you help coordinate customs requirements?",
    answer: "We can discuss customs coordination as part of your freight enquiry. Requirements vary, so please share the route and shipment details early to help clarify what may be needed.",
  },
]

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [openQuestion, setOpenQuestion] = useState<string | null>(QUESTIONS[0].question)

  const filteredQuestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    return QUESTIONS.filter((item) => activeCategory === "all" || item.category === activeCategory)
      .filter((item) => !query || `${item.question} ${item.answer}`.toLowerCase().includes(query))
  }, [activeCategory, searchQuery])

  return (
    <main className="overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-dark text-white">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2200&q=85')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark via-dark/85 to-dark/45" aria-hidden="true" />
        <div className="absolute -right-24 top-12 -z-10 h-80 w-80 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />
        <div className="mx-auto grid min-h-[400px] max-w-[1450px] items-center gap-8 px-4 py-14 min-[375px]:px-5 sm:min-h-[440px] sm:gap-10 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] lg:px-16 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="min-w-0 max-w-3xl">
            <p className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 bg-primary" /> Help, made clearer
            </p>
            <h1 className="mt-7 break-words text-[clamp(2.5rem,11vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.035em] sm:text-5xl lg:text-[4.25rem]">
              Good questions.<br /><span className="text-primary">Clear answers.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Find helpful information about planning shipments, our services, and what to do when you need support.
            </p>
            <a href="#faq-list" className="mt-8 inline-flex min-h-12 items-center gap-3 text-sm font-bold text-white transition-colors hover:text-primary">
              Browse FAQs <FiArrowDown aria-hidden="true" />
            </a>
          </motion.div>

          <motion.aside initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="hidden max-w-sm justify-self-end border border-white/20 bg-dark/55 p-7 backdrop-blur-md sm:block lg:p-8">
            <span className="grid h-12 w-12 place-items-center bg-primary text-white"><FiHelpCircle size={22} aria-hidden="true" /></span>
            <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Need a hand?</p>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase leading-tight sm:text-4xl">We&apos;re here to help you move forward.</h2>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white hover:text-primary">
              Talk to our team <FiArrowUpRight aria-hidden="true" />
            </Link>
          </motion.aside>
        </div>
      </section>

      <section id="faq-list" className="mx-auto max-w-[1450px] scroll-mt-28 px-4 py-14 min-[375px]:px-5 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
        <div className="grid min-w-0 items-start gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Frequently asked questions</p>
            <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] text-dark sm:text-5xl">The details that help.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-secondary/75 sm:text-base">Search for a topic or choose a category to find answers relevant to your shipment.</p>

            <label className="mt-7 flex min-h-12 items-center gap-3 border border-black/15 bg-white px-4 transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
              <FiSearch className="shrink-0 text-secondary/60" aria-hidden="true" />
              <span className="sr-only">Search questions</span>
              <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} type="search" placeholder="Search questions" className="w-full bg-transparent text-sm text-dark outline-none placeholder:text-secondary/50" />
            </label>

            <div className="mt-5 flex max-w-full gap-2 overflow-x-auto overscroll-x-contain pb-2 lg:flex-col lg:overflow-visible">
              {FAQ_CATEGORIES.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => { setActiveCategory(id); setOpenQuestion(null) }}
                  aria-pressed={activeCategory === id}
                  className={`inline-flex min-h-11 shrink-0 items-center gap-3 border px-4 text-left text-xs font-bold transition-colors lg:w-full ${activeCategory === id ? "border-dark bg-dark text-white" : "border-black/10 bg-white text-secondary hover:border-primary hover:text-primary"}`}
                >
                  <Icon size={16} aria-hidden="true" /> {label}
                </button>
              ))}
            </div>
          </div>

          <div aria-live="polite" className="min-w-0 space-y-3">
            {filteredQuestions.length ? filteredQuestions.map(({ question, answer }, index) => {
              const isOpen = openQuestion === question
              return (
                <motion.article
                  key={question}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.035, 0.2) }}
                  className={`min-w-0 border bg-white transition-colors ${isOpen ? "border-primary/35 shadow-sm" : "border-black/10 hover:border-black/20"}`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenQuestion(isOpen ? null : question)}
                      className="flex min-h-[70px] w-full min-w-0 items-center justify-between gap-3 px-4 py-4 text-left min-[375px]:gap-4 min-[375px]:px-5 sm:px-6"
                    >
                      <span className="flex min-w-0 flex-1 items-start gap-3 min-[375px]:gap-4">
                        <span className="shrink-0 pt-0.5 text-[10px] font-extrabold tracking-[0.12em] text-primary">{String(index + 1).padStart(2, "0")}</span>
                        <span className="min-w-0 break-words text-sm font-extrabold leading-6 text-dark sm:text-base">{question}</span>
                      </span>
                      <span className={`grid h-9 w-9 shrink-0 place-items-center border transition-all ${isOpen ? "rotate-180 border-primary bg-primary text-white" : "border-black/10 text-secondary"}`}>
                        <FiChevronDown size={17} aria-hidden="true" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="ml-8 border-t border-black/10 px-4 py-5 text-sm leading-7 text-secondary/80 min-[375px]:ml-9 min-[375px]:px-5 sm:ml-10 sm:px-6">{answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              )
            }) : (
              <div className="border border-dashed border-black/20 bg-light px-6 py-14 text-center">
                <p className="font-heading text-2xl font-bold uppercase text-dark">No matching questions</p>
                <p className="mt-2 text-sm text-secondary/70">Try another search or select a different topic.</p>
                <button type="button" onClick={() => { setSearchQuery(""); setActiveCategory("all") }} className="mt-5 text-sm font-bold text-primary hover:text-dark">Clear filters</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="mx-auto flex max-w-[1450px] flex-col justify-between gap-7 px-5 py-14 sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:px-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Still have questions?</p>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase text-dark sm:text-4xl">Let&apos;s find the answer together.</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-secondary/75">Tell us what you need help with and our team will point you in the right direction.</p>
          </div>
          <Link to="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-primary px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110">
            Contact our team <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Faq
