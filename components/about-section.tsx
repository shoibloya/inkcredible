"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronRight } from "lucide-react"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  return (
    <section id="about" ref={ref} className="py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25, delay: 0.05 }}
          className="mb-16 text-center"
        >
          <h2 className="inline-block text-3xl md:text-4xl font-bold font-serif relative">
            About <span className="text-gold">Us</span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gold"
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 0.25, delay: 0.15 }}
            ></motion.span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.25, delay: 0.1 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
              Crafting <span className="text-gold">Premium Impressions</span> Since 1989
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Inkcredible Solutions, we are passionate about crafting premium printed materials that make a lasting
              impression. With over a decade of experience in high-quality printing and a commitment to excellence, our
              team works closely with you to turn your vision into reality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From bespoke business cards to eye-catching promotional materials, our dedication to perfection ensures
              every detail reflects your brand's unique identity.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="flex items-start space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.2, delay: 0.15 }}
              >
                <ChevronRight className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Premium Materials</h4>
                  <p className="text-sm text-muted-foreground">Luxurious textures that feel substantial</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.2, delay: 0.18 }}
              >
                <ChevronRight className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Exquisite Finishes</h4>
                  <p className="text-sm text-muted-foreground">From metallic foils to embossing</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.2, delay: 0.21 }}
              >
                <ChevronRight className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Meticulous Attention</h4>
                  <p className="text-sm text-muted-foreground">Every detail perfected</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.2, delay: 0.24 }}
              >
                <ChevronRight className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Dedicated Support</h4>
                  <p className="text-sm text-muted-foreground">Expert guidance throughout</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.25, delay: 0.1 }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/10 h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-black-900/30 to-transparent z-10"></div>
              <Image
                src="/images/premium-printing.png"
                alt="Premium printing materials with elegant black and gold business cards"
                fill
                className="object-cover"
              />
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-background border border-gold/20 p-4 rounded-lg shadow-xl z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.2, delay: 0.25 }}
            >
              <div className="flex items-center space-x-4">
                <div className="size-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-bold">30+</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Years of</p>
                  <p className="font-semibold">Excellence</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 bg-background border border-gold/20 p-4 rounded-lg shadow-xl z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <div className="flex items-center space-x-4">
                <div className="size-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-bold">500+</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Satisfied</p>
                  <p className="font-semibold">Clients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
