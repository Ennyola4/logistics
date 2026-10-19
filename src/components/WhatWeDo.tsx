import { FiArrowRight, FiArrowUpRight, FiGlobe, FiPackage, FiTruck } from "react-icons/fi"
import { motion } from "framer-motion"

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

const WhatWeDo = () => {
    return (
        <div>
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
        </div>
    )
}

export default WhatWeDo
