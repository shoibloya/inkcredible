"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="blog" ref={ref} className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-black-900/10 to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 relative inline-block">
            Our <span className="text-gold">Blog</span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gold"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 0.25, delay: 0.1 }}
            ></motion.span>
          </h2>
          <p className="text-lg text-muted-foreground">Insights and expertise from our printing professionals</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-background/50 backdrop-blur-sm border border-gold/10 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_10px_40px_-15px_rgba(212,175,55,0.2)] hover:border-gold/30 transition-all duration-300"
        >
          <div className="p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4">
              Business Card Paper Types in Singapore: A Complete Guide
            </h3>
            <p className="text-sm text-gold mb-4">April 21, 2023</p>
            <p className="text-gray-300 mb-6">
              Selecting the right paper for your business card is a crucial decision that can significantly affect how
              your brand is received in Singapore's highly competitive business culture. From thickness and texture to
              finish and durability, every aspect of your business card material speaks volumes about your company's
              values and attention to detail.
            </p>
            <div className="flex justify-end">
              <Button asChild variant="outline" className="border-gold/50 text-gold hover:bg-gold/10 hover:border-gold">
                <Link href="/blog/business-card-paper-types" className="inline-flex items-center group">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
