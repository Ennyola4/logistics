import {
	FiArrowRight,
	FiCheck,
	FiClock,
	FiMapPin,
	FiPackage,
	FiTruck,
} from "react-icons/fi"

const MILESTONES = [
	{ label: "Shipment booked", detail: "Nairobi, Kenya · Oct 14, 09:20", complete: true },
	{ label: "In transit", detail: "Departed Nairobi distribution hub · Oct 15, 16:45", complete: true },
	{ label: "Arrived at destination hub", detail: "Accra, Ghana · Estimated Oct 17", complete: false },
	{ label: "Out for delivery", detail: "We’ll notify you when your shipment is nearby", complete: false },
]

const Tracker = () => {
	return (
		<section id="track" className="overflow-hidden bg-[#f7f7f6] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
			<div className="mx-auto max-w-[1450px]">
				<div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
					<div>
						<p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-light px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-primary">
							<span className="h-2 w-2 rounded-full bg-primary" /> Coming soon
						</p>
						<h2 className="mt-5 max-w-xl font-heading text-4xl font-bold uppercase leading-[0.95] text-dark sm:text-6xl">
							Track every mile.<br />Coming soon.
						</h2>
						<p className="mt-5 max-w-lg text-sm leading-7 text-secondary/70 sm:text-base">
							We&apos;re building a simpler way to follow your delivery from dispatch to destination. Shipment tracking will be available here soon.
						</p>

						<div className="mt-8" aria-disabled="true">
							<label htmlFor="tracking-number" className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em] text-dark">
								Tracking number <span className="ml-1 font-semibold normal-case tracking-normal text-secondary/45">(available soon)</span>
							</label>
							<div className="flex flex-col gap-3 min-[440px]:flex-row">
								<div className="flex min-h-14 min-w-0 flex-1 items-center gap-3  border border-black/10 bg-white/70 px-4 opacity-70">
									<FiPackage className="shrink-0 text-primary" size={19} aria-hidden="true" />
									<input
										id="tracking-number"
										type="text"
										placeholder="Tracking will be available soon"
										disabled
										className="w-full min-w-0 bg-transparent text-sm font-semibold text-dark outline-none placeholder:normal-case placeholder:font-medium placeholder:text-secondary/50 disabled:cursor-not-allowed"
									/>
								</div>
								<button
									type="button"
									disabled
									className="inline-flex min-h-14 cursor-not-allowed items-center justify-center gap-3  bg-primary/70 px-6 text-sm font-bold text-white/90"
								>
									Coming soon <FiClock size={17} aria-hidden="true" />
								</button>
							</div>
							<p className="mt-3 text-xs text-secondary/60">We&apos;re putting the finishing touches on shipment visibility.</p>
						</div>
					</div>

					<div className="relative">
						<div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
						<div className="relative rounded-[1.75rem] border border-black/5 bg-white p-5 shadow-[0_24px_70px_-35px_rgba(32,32,32,0.3)] sm:p-8">
							<div className="flex flex-wrap items-start justify-between gap-4 border-b border-black/8 pb-6">
								<div className="flex items-center gap-3">
									<span className="grid h-12 w-12 place-items-center rounded-2xl bg-light text-primary"><FiTruck size={22} aria-hidden="true" /></span>
									<div>
										<p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-secondary/50">Tracking preview</p>
										<p className="mt-1 text-sm font-extrabold tracking-wide text-dark">Sample shipment</p>
									</div>
								</div>
								<span className="inline-flex items-center gap-2 rounded-full bg-[#faf1df] px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#87621d]">
									<span className="h-1.5 w-1.5 rounded-full bg-[#d5a744]" /> Preview only
								</span>
							</div>

							<div className="grid grid-cols-2 gap-4 border-b border-black/8 py-5 sm:gap-6">
								<div>
									<p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-secondary/45">From</p>
									<p className="mt-2 flex items-center gap-2 text-sm font-bold text-dark"><FiMapPin className="shrink-0 text-primary" size={15} aria-hidden="true" /> Nairobi, KE</p>
								</div>
								<div>
									<p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-secondary/45">To</p>
									<p className="mt-2 flex items-center gap-2 text-sm font-bold text-dark"><FiMapPin className="shrink-0 text-primary" size={15} aria-hidden="true" /> Accra, GH</p>
								</div>
							</div>

							<div className="flex items-center justify-between gap-3 rounded-2xl bg-[#faf7f4] px-4 py-4 sm:px-5">
								<div className="flex items-center gap-3">
									<span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-primary shadow-sm"><FiClock size={18} aria-hidden="true" /></span>
									<div><p className="text-[10px] font-extrabold uppercase tracking-[0.13em] text-secondary/50">Estimated delivery</p><p className="mt-1 text-sm font-extrabold text-dark">Friday, October 17</p></div>
								</div>
								<FiArrowRight className="shrink-0 text-primary" size={18} aria-hidden="true" />
							</div>

							<div className="mt-7">
								<div className="mb-5 flex items-center justify-between">
									<h3 className="text-sm font-extrabold text-dark">Example journey</h3>
									<span className="text-[10px] font-bold uppercase tracking-[0.12em] text-secondary/45">Preview</span>
								</div>
								<ol className="space-y-0">
									{MILESTONES.map(({ label, detail, complete }, index) => (
										<li key={label} className="relative flex gap-4 pb-5 last:pb-0">
											{index < MILESTONES.length - 1 && <span className={`absolute left-[11px] top-6 h-[calc(100%-0.5rem)] w-px ${complete ? "bg-primary/35" : "bg-black/10"}`} aria-hidden="true" />}
											<span className={`relative z-10 grid h-6 w-6 shrink-0 place-items-center rounded-full ${complete ? "bg-primary text-white" : "border-2 border-black/10 bg-white text-transparent"}`}>
												{complete && <FiCheck size={13} strokeWidth={3} aria-hidden="true" />}
											</span>
											<div className="min-w-0 pt-0.5">
												<p className={`text-xs font-extrabold ${complete ? "text-dark" : "text-secondary/50"}`}>{label}</p>
												<p className="mt-1 text-[11px] leading-5 text-secondary/55">{detail}</p>
											</div>
										</li>
									))}
								</ol>
							</div>
							<p className="mt-6 border-t border-black/8 pt-4 text-[10px] leading-5 text-secondary/45">
							This is a visual preview only. Live shipment data and tracking will launch soon.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Tracker
