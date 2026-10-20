
import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiClock,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPackage,
  FiTruck,
} from "react-icons/fi"
import { Link } from "react-router-dom"

const ENQUIRY_TYPES = [
  "Freight forwarding",
  "Road transport",
  "Warehousing",
  "Last-mile delivery",
  "Supply chain solutions",
  "Existing shipment support",
  "Other",
]

const FAQS = [
  {
    question: "What information should I include in my enquiry?",
    answer:
      "Share the origin and destination, what you need to move, approximate size or weight, and your preferred timing. If you are not sure of the details yet, tell us what you know and we can start there.",
  },
  {
    question: "Can I ask about more than one service?",
    answer:
      "Absolutely. Describe the full journey in your message and our team can help you consider the services that fit your needs.",
  },
  {
    question: "I need an update on an existing shipment. What should I do?",
    answer:
      "Choose “Existing shipment support” in the enquiry type and include your reference number so the team can identify the shipment.",
  },
]

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-dark text-white">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2200&q=85')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark via-dark/85 to-dark/45" aria-hidden="true" />
        <div className="absolute -right-24 -top-20 -z-10 h-80 w-80 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />

        <div className="mx-auto grid min-h-[430px] max-w-[1450px] items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.7fr] lg:px-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 bg-primary" /> Let&apos;s get moving
            </p>
            <h1 className="mt-7 text-5xl font-bold uppercase leading-[0.88] tracking-[-0.035em] sm:text-7xl lg:text-[6.25rem]">
              Tell us what<br />
              <span className="text-primary">you need.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              A shipment to plan, a question to ask, or a delivery to discuss? Share a few details and we&apos;ll help you find the next step.
            </p>
            <a href="#contact-form" className="mt-8 inline-flex min-h-12 items-center gap-3 text-sm font-bold text-white transition-colors hover:text-primary">
              Start an enquiry <FiArrowDown aria-hidden="true" />
            </a>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            className="hidden justify-self-end border border-white/20 bg-dark/50 p-7 backdrop-blur-md sm:block sm:max-w-sm lg:p-8"
          >
            <span className="grid h-12 w-12 place-items-center bg-primary text-white"><FiMessageCircle size={22} aria-hidden="true" /></span>
            <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.18em] text-primary">A good place to start</p>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase leading-tight sm:text-4xl">Every great delivery starts with a conversation.</h2>
            <p className="mt-4 text-sm leading-6 text-white/65">Tell us the basics. We&apos;ll work through the details together.</p>
          </motion.aside>
        </div>
      </section>

      <section className="mx-auto max-w-[1450px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Contact our team</p>
            <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] text-dark sm:text-5xl">How can we help move you forward?</h2>
            <p className="mt-5 text-sm leading-7 text-secondary/80 sm:text-base">
              Use the form to tell us what you&apos;re looking for. Add as much or as little detail as you have right now.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex gap-4 border border-black/10 bg-white p-4 sm:p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-primary/10 text-primary"><FiPackage size={20} aria-hidden="true" /></span>
                <div>
                  <h3 className="text-sm font-extrabold text-dark">Plan a shipment</h3>
                  <p className="mt-1 text-xs leading-5 text-secondary/75">Tell us what you&apos;re moving and where it needs to go.</p>
                </div>
              </div>
              <div className="flex gap-4 border border-black/10 bg-white p-4 sm:p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-primary/10 text-primary"><FiTruck size={20} aria-hidden="true" /></span>
                <div>
                  <h3 className="text-sm font-extrabold text-dark">Get shipment support</h3>
                  <p className="mt-1 text-xs leading-5 text-secondary/75">Include your shipment reference if you already have one.</p>
                </div>
              </div>
              <div className="flex gap-4 border border-black/10 bg-white p-4 sm:p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-primary/10 text-primary"><FiGlobe size={20} aria-hidden="true" /></span>
                <div>
                  <h3 className="text-sm font-extrabold text-dark">Explore our services</h3>
                  <p className="mt-1 text-xs leading-5 text-secondary/75">See how we can support your logistics needs.</p>
                  <Link to="/services" className="mt-2 inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:text-dark">View services <FiArrowRight aria-hidden="true" /></Link>
                </div>
              </div>
            </div>

            <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-secondary/60">
              <FiClock className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              Include your preferred timing in the message so we understand your priorities.
            </p>
          </div>

          <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-32 border border-black/10 bg-white p-5 shadow-xl shadow-dark/5 sm:p-8 lg:p-10"
          >
            <div className="mb-8 border-b border-black/10 pb-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Send an enquiry</p>
              <h2 className="mt-3 font-heading text-3xl font-bold uppercase text-dark sm:text-4xl">Let&apos;s talk logistics.</h2>
              <p className="mt-2 text-sm leading-6 text-secondary/70">Fields marked with * are required.</p>
            </div>

            {submitted ? (
              <div role="status" aria-live="polite" className="border border-primary/20 bg-primary/5 p-6 sm:p-8">
                <span className="grid h-12 w-12 place-items-center bg-primary text-white"><FiCheck size={23} aria-hidden="true" /></span>
                <h3 className="mt-5 text-lg font-extrabold text-dark">Your message is ready.</h3>
                <p className="mt-2 text-sm leading-6 text-secondary/80">
                  This contact form is a front-end demo and isn&apos;t connected to a messaging service yet, so your details have not been sent. Connect it to your preferred form endpoint to receive enquiries.
                </p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-dark">
                  Edit your message <FiArrowRight aria-hidden="true" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block text-xs font-extrabold uppercase tracking-[0.1em] text-dark">Your name *</label>
                    <input id="contact-name" name="name" type="text" autoComplete="name" required placeholder="e.g. Alex Morgan" className="min-h-12 w-full border border-black/15 bg-white px-4 text-sm text-dark outline-none transition placeholder:text-secondary/45 focus:border-primary focus:ring-2 focus:ring-primary/10" />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="mb-2 block text-xs font-extrabold uppercase tracking-[0.1em] text-dark">Company</label>
                    <input id="contact-company" name="company" type="text" autoComplete="organization" placeholder="Company name (optional)" className="min-h-12 w-full border border-black/15 bg-white px-4 text-sm text-dark outline-none transition placeholder:text-secondary/45 focus:border-primary focus:ring-2 focus:ring-primary/10" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-xs font-extrabold uppercase tracking-[0.1em] text-dark">Email address *</label>
                    <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" className="min-h-12 w-full border border-black/15 bg-white px-4 text-sm text-dark outline-none transition placeholder:text-secondary/45 focus:border-primary focus:ring-2 focus:ring-primary/10" />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="mb-2 block text-xs font-extrabold uppercase tracking-[0.1em] text-dark">Phone number</label>
                    <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" className="min-h-12 w-full border border-black/15 bg-white px-4 text-sm text-dark outline-none transition placeholder:text-secondary/45 focus:border-primary focus:ring-2 focus:ring-primary/10" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-enquiry" className="mb-2 block text-xs font-extrabold uppercase tracking-[0.1em] text-dark">What can we help with? *</label>
                    <select id="contact-enquiry" name="enquiryType" required defaultValue="" className="min-h-12 w-full border border-black/15 bg-white px-4 text-sm text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10">
                      <option value="" disabled>Select an enquiry type</option>
                      {ENQUIRY_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-reference" className="mb-2 block text-xs font-extrabold uppercase tracking-[0.1em] text-dark">Shipment reference</label>
                    <input id="contact-reference" name="reference" type="text" placeholder="If you have one" className="min-h-12 w-full border border-black/15 bg-white px-4 text-sm text-dark outline-none transition placeholder:text-secondary/45 focus:border-primary focus:ring-2 focus:ring-primary/10" />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-xs font-extrabold uppercase tracking-[0.1em] text-dark">Tell us a little more *</label>
                  <textarea id="contact-message" name="message" required rows={5} placeholder="What are you shipping? Where should it go? Include any timing or handling details that may help." className="w-full resize-y border border-black/15 bg-white px-4 py-3 text-sm leading-6 text-dark outline-none transition placeholder:text-secondary/45 focus:border-primary focus:ring-2 focus:ring-primary/10" />
                </div>

                <label className="flex items-start gap-3 text-xs leading-5 text-secondary/70">
                  <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 accent-primary" />
                  <span>I agree that the information I provide may be used to respond to this enquiry. *</span>
                </label>

                <button type="submit" className="inline-flex min-h-14 w-full items-center justify-center gap-3 bg-primary px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto">
                  Review enquiry <FiArrowUpRight size={18} aria-hidden="true" />
                </button>
                <p className="text-[11px] leading-5 text-secondary/55">This demo form currently validates your input in the browser only; it does not send or store your information.</p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <section className="bg-light">
        <div className="mx-auto grid max-w-[1450px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-16 lg:py-24">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">A few helpful details</p>
            <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] text-dark sm:text-5xl">Before you hit send.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-secondary/75">A little context can help us understand your request and point you in the right direction.</p>
            <div className="mt-7 flex items-start gap-3 border-t border-black/10 pt-5">
              <FiMapPin className="mt-1 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm leading-6 text-secondary/75">For route enquiries, include both your collection and delivery locations.</p>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <FiMail className="mt-1 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm leading-6 text-secondary/75">Please don&apos;t include passwords, payment details, or other sensitive information.</p>
            </div>
          </div>

          <div className="space-y-3">
            {FAQS.map(({ question, answer }, index) => (
              <details key={question} className="group border border-black/10 bg-white p-5 open:border-primary/30 sm:p-6" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-extrabold text-dark marker:hidden">
                  {question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center border border-black/10 text-primary transition group-open:rotate-90 group-open:border-primary/30"><FiArrowRight size={16} aria-hidden="true" /></span>
                </summary>
                <p className="mt-4 max-w-2xl border-t border-black/10 pt-4 text-sm leading-6 text-secondary/75">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1450px] px-5 py-14 sm:px-8 sm:py-18 lg:px-16">
        <div className="flex flex-col justify-between gap-6 border border-black/10 bg-white p-6 sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Still exploring?</p>
            <h2 className="mt-2 font-heading text-3xl font-bold uppercase text-dark sm:text-4xl">See how we can help.</h2>
          </div>
          <Link to="/services" className="inline-flex min-h-12 items-center justify-center gap-3 border border-black/15 px-5 text-sm font-bold text-dark transition hover:border-primary hover:text-primary">
            Explore our services <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ContactUs
