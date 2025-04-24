"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ShoppingBag } from "lucide-react"

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-800/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gold/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-purple-600/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="text-center md:text-left">
            <motion.div variants={item}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif mb-4 leading-tight">
                Elevate Your <span className="text-gold">Brand Identity</span>
              </h1>
            </motion.div>

            <motion.div variants={item}>
              <p className="text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 text-muted-foreground">
                Experience exquisite design and impeccable quality – trusted by Singapore's leading businesses.
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-purple-950 font-medium px-8 py-6 text-base transition-all hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                onClick={scrollToContact}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Get Your Free Quote
              </Button>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative aspect-square max-w-md mx-auto md:ml-auto">
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-900 via-purple-800 to-gold/70 shadow-2xl z-10"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: -5 }}
              transition={{ duration: 0.25, delay: 0.2 }}
            ></motion.div>
            <motion.div
              className="absolute inset-0 rounded-2xl -translate-x-4 -translate-y-4 bg-gradient-to-tr from-purple-800 to-gold shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 5 }}
              transition={{ duration: 0.25, delay: 0.3 }}
            ></motion.div>
            <motion.div
              className="relative z-20 rounded-2xl aspect-square bg-purple-950 border border-gold/20 shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/80 via-purple-950/40 to-black/80 mix-blend-overlay"></div>
              <div className="flex flex-col justify-center items-center h-full p-8 text-center">
                <span className="text-sm uppercase tracking-widest text-gold/80 mb-2">Premium Quality</span>
                <h3 className="text-xl md:text-2xl font-serif text-white font-bold mb-2">Business Cards</h3>
                <p className="text-sm text-white/80 mb-4">That Make a Lasting Impression</p>
                <div className="w-24 h-1 bg-gradient-to-r from-gold/30 via-gold to-gold/30"></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
