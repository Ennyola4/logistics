import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BsFillChatQuoteFill } from 'react-icons/bs'
import { FiX } from 'react-icons/fi'

const defaultQuotes = [
  'Every great journey starts with a clear plan.',
  'Reliable delivery moves your business forward.',
  'The right route makes every mile count.',
  'Good logistics turn distance into opportunity.',
  'Your next shipment deserves a smarter solution.',
  'On time, every time—that is the difference.',
  'Moving goods is easy. Moving business forward is what we do.',
  'A dependable partner makes the road ahead simpler.',
  'From first mile to final delivery, we have you covered.',
  'Let us find a shipping solution that fits your needs.',
] as const

type GetAQuoteButtonProps = {
  quotes?: readonly string[]
  buttonText?: string
}

export const GetAQuoteButton = ({
  quotes = defaultQuotes,
  buttonText = 'Get a quote',
}: GetAQuoteButtonProps) => {
  const [quoteIndex, setQuoteIndex] = useState(-1)
  const availableQuotes = quotes.length > 0 ? quotes : defaultQuotes

  const generateQuote = () => {
    setQuoteIndex((currentIndex) => (currentIndex + 1) % availableQuotes.length)
  }

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={generateQuote}
        className="inline-flex min-h-14 shrink-0 items-center justify-center gap-4  bg-primary px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer focus-visible:outline-primary"
      >
        {buttonText} <BsFillChatQuoteFill size={18} aria-hidden="true" />
      </button>
      <AnimatePresence mode="wait">
        {quoteIndex >= 0 && (
          <motion.div
            key={quoteIndex}
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 54, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
            className="absolute bottom-full left-0 z-50 mb-4 w-72 max-w-[calc(100vw-2.5rem)] origin-bottom-left rounded-2xl border border-black/5 bg-white p-4 text-dark shadow-2xl shadow-black/45 sm:w-80"
          >
            <span className="absolute -bottom-2 left-6 h-4 w-4 rotate-45 border-b border-r border-black/5 bg-white" aria-hidden="true" />
            <div className="relative flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <BsFillChatQuoteFill size={16} aria-hidden="true" />
              </span>
              <blockquote className="flex-1 pt-1 text-sm leading-relaxed">
                “{availableQuotes[quoteIndex % availableQuotes.length]}”
              </blockquote>
              <button
                type="button"
                onClick={() => setQuoteIndex(-1)}
                aria-label="Dismiss quote"
                className="-mr-1 -mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full text-secondary/70 transition hover:bg-black/5 hover:text-dark focus-visible:outline-2 focus-visible:outline-primary"
              >
                <FiX size={16} aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GetAQuoteButton
