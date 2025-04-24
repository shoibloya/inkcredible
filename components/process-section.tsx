"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { type LucideIcon, MessagesSquare, Palette, Printer, Star, TruckIcon as TruckDelivery } from "lucide-react"

interface ProcessStep {
  icon: LucideIcon
  title: string
  description: string
}

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  const processSteps: ProcessStep[] = [
    {
      icon: MessagesSquare,
      title: "Consultation",
      description: "We start with understanding your needs and vision through a detailed consultation.",
    },
    {
      icon: Palette,
      title: "Design & Proofing",
      description: "Our expert designers create stunning visuals and provide proofs for your approval.",
    },
    {
      icon: Printer,
      title: "Premium Printing",
      description: "Using advanced technology and premium materials to bring your designs to life.",
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "Rigorous inspection ensures every item meets our exceptional standards.",
    },
    {
      icon: TruckDelivery,
      title: "Delivery",
      description: "Careful packaging and prompt delivery to your doorstep.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  }

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-black-900/60 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 relative inline-block">
            Our <span className="text-gold">Process</span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gold"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 0.25, delay: 0.1 }}
            ></motion.span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to delivery, our streamlined process ensures excellence at every step
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={isInView ? "show" : "hidden"} className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent transform -translate-y-1/2 hidden md:block"></div>

          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div key={index} variants={item} className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl opacity-70"></div>
                    <div className="relative size-20 rounded-full bg-background border-2 border-gold flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(212,175,55,0.3)] z-10">
                      <Icon className="h-8 w-8 text-gold" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
