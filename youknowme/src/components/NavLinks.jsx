import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'


export function NavLinks({
  footer = false
}) {
  let [hoveredIndex, setHoveredIndex] = useState(null)
  const { t } = useTranslation();

  const links = [
    ['Features', '/#features'],
    ['Pricing', '/#pricing'],
    ['FAQs', '/#faqs']
  ]

  if (footer) {
    links.push(
      ['Terms', '/terms'],
    )

    links.push(
      ['Privacy', '/privacy']
    )

    links.push(
      ['Commerce Disclosure', '/commercedisclosure']
    )
  }

  return links.map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-lg text-gray-700 font-light transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 bg-gray-100 rounded-lg"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{t(`${label}`)}</span>
    </Link>
  ))
}
