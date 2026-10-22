
import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiCalendar,
  FiClock,
  FiSearch,
  FiX,
} from "react-icons/fi"

const CATEGORIES = ["All stories", "Supply chain", "Freight", "Business", "Sustainability"] as const

type Category = (typeof CATEGORIES)[number]

type Article = {
  id: number
  category: Exclude<Category, "All stories">
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  imageAlt: string
  featured?: boolean
  content: string[]
}

const ARTICLES: Article[] = [
  {
    id: 1,
    category: "Supply chain",
    title: "A more resilient supply chain starts with better visibility",
    excerpt: "Small blind spots can create big delays. Here are practical ways to bring more clarity to every stage of a shipment.",
    date: "October 16, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Warehouse team coordinating inventory and shipments",
    featured: true,
    content: [
      "A resilient supply chain is not only about having a backup plan. It is about being able to see what is happening early enough to make a useful decision. When teams have a shared picture of inventory, handoffs, and timing, it becomes easier to respond to change without losing sight of the customer.",
      "Start with the milestones that matter most: when a shipment is collected, when it reaches a transfer point, and when it is expected to arrive. Agree on who owns each update and how exceptions should be communicated. Even a simple, consistent process can reduce uncertainty across teams.",
      "Visibility works best as a partnership. Share the information your logistics provider needs, ask questions when something is unclear, and review recurring delays together. The goal is not more data for its own sake—it is better decisions and a smoother journey for every shipment.",
    ],
  },
  {
    id: 2,
    category: "Freight",
    title: "Choosing the right freight option for your next move",
    excerpt: "Cost, timing, and cargo requirements all matter. A few questions can help you find the right balance for your shipment.",
    date: "October 08, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Cargo containers on a ship at sea",
    content: [
      "There is no single freight option that works for every shipment. The right fit depends on when goods are needed, their size and handling requirements, the route, and the flexibility available in your plan.",
      "Before comparing options, gather the basics: collection and delivery locations, dimensions, weight, cargo type, and the date the goods need to arrive. Clear details help a logistics partner evaluate realistic routes and explain the trade-offs between speed, cost, and handling.",
      "If timing is flexible, say so. If it is not, make the deadline clear from the beginning. A transparent conversation helps shape a solution around what matters most to your business.",
    ],
  },
  {
    id: 3,
    category: "Business",
    title: "Logistics questions growing businesses should ask early",
    excerpt: "As order volumes change, the way goods move can become a competitive advantage—or a source of friction.",
    date: "September 29, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Packages moving through a distribution center",
    content: [
      "Growth changes the demands placed on a supply chain. Routes that worked for a few orders may need a different approach as customers, volumes, and delivery expectations evolve.",
      "Ask where delays most often occur, which information would help you plan better, and how your logistics setup can adapt during busy periods. These conversations can reveal useful improvements before a bottleneck becomes a customer problem.",
      "Review your logistics regularly—not only when something goes wrong. A clear view of what is working makes it easier to make thoughtful adjustments as your business grows.",
    ],
  },
  {
    id: 4,
    category: "Sustainability",
    title: "Making thoughtful choices across the delivery journey",
    excerpt: "Better planning can help reduce avoidable complexity while keeping service needs in focus.",
    date: "September 17, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Freight truck moving along a highway through green landscape",
    content: [
      "Every shipment involves choices: timing, route, handling, and how loads are planned. Looking at these decisions together can help businesses find opportunities to simplify movement and reduce unnecessary steps.",
      "Start by understanding your shipment patterns. Are there predictable orders that could be planned earlier? Can collection and delivery windows be coordinated more effectively? Better information can support more considered logistics decisions.",
      "There is no one-size-fits-all approach. The best changes are practical, measurable, and aligned with the service your customers need.",
    ],
  },
  {
    id: 5,
    category: "Supply chain",
    title: "Why the last mile deserves a place in the big picture",
    excerpt: "The final handoff is a small part of the route, but it can shape how the entire delivery feels to a customer.",
    date: "September 04, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Delivery vehicle prepared for a local delivery route",
    content: [
      "The last mile is where a carefully planned shipment meets the person or business waiting for it. Clear expectations at this stage can make a meaningful difference to the delivery experience.",
      "Accurate addresses, accessible delivery windows, and a plan for exceptions all help. So does making sure the final-mile approach is considered early, rather than added at the end of a route plan.",
      "When businesses include the destination experience in their wider logistics conversations, it is easier to spot opportunities for a more dependable handoff.",
    ],
  },
  {
    id: 6,
    category: "Freight",
    title: "A smoother cross-border shipment begins with preparation",
    excerpt: "Good documentation and clear shipment details help make complex routes easier to coordinate.",
    date: "August 21, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Logistics workers preparing a shipment for transport",
    content: [
      "Cross-border shipments involve multiple steps and partners. Getting the core details together early gives everyone a clearer starting point and makes it easier to identify what needs attention.",
      "Prepare accurate cargo descriptions, quantities, weights, and origin and destination details. Requirements can vary by route and shipment, so confirm the relevant documentation with your logistics partner before dispatch.",
      "Build in time for coordination and keep communication open if shipment details change. Preparation cannot remove every uncertainty, but it can make the journey easier to manage.",
    ],
  },
]

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All stories")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  const featuredArticle = ARTICLES.find((article) => article.featured)!
  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    return ARTICLES.filter((article) => !article.featured)
      .filter((article) => activeCategory === "All stories" || article.category === activeCategory)
      .filter((article) => !query || `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(query))
  }, [activeCategory, searchQuery])

  useEffect(() => {
    if (!selectedArticle) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedArticle(null)
    }
    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [selectedArticle])

  const ArticleCard = ({ article, index }: { article: Article; index: number }) => (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
      className="group flex h-full flex-col overflow-hidden border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-dark/5"
    >
      <button type="button" onClick={() => setSelectedArticle(article)} className="relative block aspect-[16/10] w-full overflow-hidden bg-light text-left" aria-label={`Read article: ${article.title}`}>
        <img src={article.image} alt={article.imageAlt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-primary">{article.category}</span>
      </button>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-semibold text-secondary/60">
          <span className="inline-flex items-center gap-1.5"><FiCalendar aria-hidden="true" /> {article.date}</span>
          <span className="inline-flex items-center gap-1.5"><FiClock aria-hidden="true" /> {article.readTime}</span>
        </div>
        <h3 className="mt-4 font-heading text-2xl font-bold uppercase leading-tight text-dark transition-colors group-hover:text-primary sm:text-[1.7rem]">{article.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-secondary/75">{article.excerpt}</p>
        <button type="button" onClick={() => setSelectedArticle(article)} className="mt-5 inline-flex items-center gap-2 self-start text-xs font-extrabold uppercase tracking-[0.12em] text-primary transition-colors hover:text-dark">
          Read article <FiArrowRight aria-hidden="true" />
        </button>
      </div>
    </motion.article>
  )

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-dark text-white">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url('${featuredArticle.image}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark via-dark/85 to-dark/45" aria-hidden="true" />
        <div className="absolute -right-24 top-12 -z-10 h-80 w-80 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />
        <div className="mx-auto grid min-h-[500px] max-w-[1450px] items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:px-16 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 bg-primary" /> The logistics journal
            </p>
            <h1 className="mt-7 text-5xl font-bold uppercase leading-[0.88] tracking-[-0.035em] sm:text-5xl lg:text-[4.25rem]">
              Ideas for the<br /><span className="text-primary">way forward.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Perspectives, practical guides, and stories about moving goods—and business—forward.
            </p>
            <a href="#latest-stories" className="mt-8 inline-flex min-h-12 items-center gap-3 text-sm font-bold text-white transition-colors hover:text-primary">
              Browse the latest <FiArrowDown aria-hidden="true" />
            </a>
          </motion.div>

          <motion.button
            type="button"
            onClick={() => setSelectedArticle(featuredArticle)}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group hidden max-w-md justify-self-end border border-white/20 bg-dark/55 p-6 text-left backdrop-blur-md sm:block lg:p-8"
          >
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Editor&apos;s pick · {featuredArticle.category}</span>
            <h2 className="mt-4 font-heading text-3xl font-bold uppercase leading-tight sm:text-4xl">{featuredArticle.title}</h2>
            <p className="mt-4 text-sm leading-6 text-white/65">{featuredArticle.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition-colors group-hover:text-primary">
              Read the story <FiArrowUpRight aria-hidden="true" />
            </span>
          </motion.button>
        </div>
      </section>

      <section id="latest-stories" className="mx-auto max-w-[1450px] scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Fresh perspectives</p>
            <h2 className="mt-3 font-heading text-4xl font-bold uppercase leading-[0.95] text-dark sm:text-5xl">Latest stories</h2>
          </div>
          <label className="flex min-h-12 w-full items-center gap-3 border border-black/15 bg-white px-4 transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 lg:max-w-sm">
            <FiSearch className="shrink-0 text-secondary/60" aria-hidden="true" />
            <span className="sr-only">Search articles</span>
            <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} type="search" placeholder="Search the journal" className="w-full bg-transparent text-sm text-dark outline-none placeholder:text-secondary/50" />
          </label>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter stories by category">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`shrink-0 border px-4 py-2.5 text-xs font-bold transition-colors ${activeCategory === category ? "border-dark bg-dark text-white" : "border-black/15 bg-white text-secondary hover:border-primary hover:text-primary"}`}
            >
              {category}
            </button>
          ))}
        </div>

        {activeCategory === "All stories" && searchQuery.trim() === "" && (
          <div className="mt-8 grid overflow-hidden border border-black/10 bg-white lg:grid-cols-[1.1fr_0.9fr]">
            <button type="button" onClick={() => setSelectedArticle(featuredArticle)} className="group relative min-h-[260px] overflow-hidden bg-light text-left sm:min-h-[360px]">
              <img src={featuredArticle.image} alt={featuredArticle.imageAlt} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/5 to-transparent" />
              <span className="absolute left-5 top-5 bg-white px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-primary">Featured story</span>
              <span className="absolute bottom-5 left-5 text-xs font-bold text-white">{featuredArticle.category} · {featuredArticle.readTime}</span>
            </button>
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Editor&apos;s pick</p>
              <h3 className="mt-4 font-heading text-3xl font-bold uppercase leading-tight text-dark sm:text-4xl">{featuredArticle.title}</h3>
              <p className="mt-4 text-sm leading-6 text-secondary/75">{featuredArticle.excerpt}</p>
              <div className="mt-5 flex items-center gap-3 text-[10px] font-semibold text-secondary/60"><FiCalendar aria-hidden="true" /> {featuredArticle.date}<span className="h-1 w-1 rounded-full bg-primary" />{featuredArticle.readTime}</div>
              <button type="button" onClick={() => setSelectedArticle(featuredArticle)} className="mt-7 inline-flex items-center gap-2 self-start text-xs font-extrabold uppercase tracking-[0.12em] text-primary hover:text-dark">
                Read featured story <FiArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        {filteredArticles.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredArticles.map((article, index) => <ArticleCard key={article.id} article={article} index={index} />)}
          </div>
        ) : (
          <div className="mt-8 border border-dashed border-black/20 bg-light px-6 py-14 text-center">
            <p className="font-heading text-2xl font-bold uppercase text-dark">No stories found</p>
            <p className="mt-2 text-sm text-secondary/70">Try another search or choose a different category.</p>
            <button type="button" onClick={() => { setSearchQuery(""); setActiveCategory("All stories") }} className="mt-5 text-sm font-bold text-primary hover:text-dark">Clear filters</button>
          </div>
        )}
      </section>

      <section className="bg-light">
        <div className="mx-auto grid max-w-[1450px] gap-8 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Have a logistics question?</p>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase text-dark sm:text-4xl">Let&apos;s talk about what moves you.</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-secondary/75">Our team can help you explore the right next step for your shipment.</p>
          </div>
          <a href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110">
            Contact our team <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-dark/75 p-0 backdrop-blur-sm sm:items-center sm:p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedArticle(null) }}
          >
            <motion.article
              role="dialog"
              aria-modal="true"
              aria-labelledby="article-dialog-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto bg-white shadow-2xl sm:max-h-[88vh]"
            >
              <button type="button" onClick={() => setSelectedArticle(null)} aria-label="Close article" className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center bg-dark/80 text-white transition hover:bg-primary">
                <FiX size={20} aria-hidden="true" />
              </button>
              <div className="relative h-56 bg-light sm:h-80">
                <img src={selectedArticle.image} alt={selectedArticle.imageAlt} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                <span className="absolute bottom-5 left-6 bg-white px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-primary">{selectedArticle.category}</span>
              </div>
              <div className="px-6 py-7 sm:px-10 sm:py-9">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-semibold text-secondary/60">
                  <span className="inline-flex items-center gap-1.5"><FiCalendar aria-hidden="true" /> {selectedArticle.date}</span>
                  <span className="inline-flex items-center gap-1.5"><FiClock aria-hidden="true" /> {selectedArticle.readTime}</span>
                </div>
                <h2 id="article-dialog-title" className="mt-4 font-heading text-3xl font-bold uppercase leading-tight text-dark sm:text-5xl">{selectedArticle.title}</h2>
                <p className="mt-4 border-l-2 border-primary pl-4 text-base font-semibold leading-7 text-secondary/80">{selectedArticle.excerpt}</p>
                <div className="mt-6 space-y-4">
                  {selectedArticle.content.map((paragraph) => <p key={paragraph} className="text-sm leading-7 text-secondary/80 sm:text-base">{paragraph}</p>)}
                </div>
                <button type="button" onClick={() => setSelectedArticle(null)} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-dark">
                  Back to all stories <FiArrowRight aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default Blog
