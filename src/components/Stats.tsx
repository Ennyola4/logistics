import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { animate } from "framer-motion"

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

const Stats = () => {
    return (
        <div>
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
        </div>
    )
}

export default Stats
