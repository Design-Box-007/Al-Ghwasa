// components/Comman/RevealWrapper.tsx
'use client'

import { motion } from 'framer-motion'
import React from 'react'

type Direction = 'top' | 'bottom' | 'left' | 'right'

interface RevealWrapperProps {
  children: React.ReactNode
  /** Direction from which the overlay exits (default: bottom→top) */
  direction?: Direction
  /** Seconds to wait before the reveal starts */
  delay?: number
  /** Seconds the overlay takes to slide away */
  duration?: number
  /** Extra Tailwind / class names for the root */
  className?: string
}

const overlayVariants: Record<
  Direction,
  { initial: Record<string, string | number>; animate: Record<string, string | number> }
> = {
  // y = 0 → 100 %  (slides down)
  top:    { initial: { y: 0 },      animate: { y: '100%' } },
  // y = 0 → -100 % (slides up)
  bottom: { initial: { y: 0 },      animate: { y: '-100%' } },
  // x = 0 → 100 %  (slides right)
  left:   { initial: { x: 0 },      animate: { x: '100%' } },
  // x = 0 → -100 % (slides left)
  right:  { initial: { x: 0 },      animate: { x: '-100%' } },
}

const RevealWrapper: React.FC<RevealWrapperProps> = ({
  children,
  direction = 'bottom',
  delay = 0,
  duration = 1.2,
  className = '',
}) => {
  const { initial, animate } = overlayVariants[direction]

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      /* Content fades in just as the overlay is finishing */
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay + duration * 0.6, duration: duration * 0.4, ease: 'easeOut' }}
    >
      {children}

      {/* Sliding overlay */}
      <motion.span
        className="absolute inset-0 z-20 bg-white pointer-events-none"
        initial={{ ...initial }}
        animate={{ ...animate }}
        transition={{ delay, duration, ease: 'easeOut' }}
      />
    </motion.div>
  )
}

export default RevealWrapper
