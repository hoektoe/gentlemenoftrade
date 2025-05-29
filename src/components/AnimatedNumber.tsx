'use client'
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef } from 'react'

export function AnimatedNumber({
  start,
  end,
  decimals = 0,
}: {
  start: number
  end: number
  decimals?: number
}) {
  // Create the ref with proper type for motion components
  const ref = useRef<HTMLSpanElement>(null)
  // Cast the ref for useInView while maintaining type safety
  const isInView = useInView(ref as React.RefObject<HTMLElement>, {
    once: true,
    amount: 0.5,
  })

  let value = useMotionValue(start)
  let spring = useSpring(value, { damping: 30, stiffness: 100 })
  let display = useTransform(spring, (num) => num.toFixed(decimals))

  useEffect(() => {
    value.set(isInView ? end : start)
  }, [start, end, isInView, value])

  return <motion.span ref={ref}>{display}</motion.span>
}
