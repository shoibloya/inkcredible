"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxDividerProps {
  reversed?: boolean
}

export default function ParallaxDivider({ reversed = false }: ParallaxDividerProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <div ref={ref} className="relative h-32 md:h-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black-900/10 via-gold/5 to-black-900/10"></div>

      <motion.div className="absolute inset-0 w-full h-full" style={{ y: reversed ? y2 : y1 }}>
        <div className="absolute top-0 left-0 w-full h-full flex justify-between opacity-30">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-full w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent"
              style={{ left: `${i * 10}%` }}
            ></div>
          ))}
        </div>
      </motion.div>

      <motion.div className="absolute inset-0 w-full h-full" style={{ y: reversed ? y1 : y2 }}>
        <div className="absolute top-0 left-0 w-full h-full flex items-center opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
              style={{ top: `${i * 12.5}%` }}
            ></div>
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
    </div>
  )
}
