"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useInView, AnimatePresence } from "framer-motion"

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  const testimonials = [
    {
      quote:
        "The quality and service exceeded our expectations – our new business cards truly represent our brand and have become a talking point in every meeting!",
      author: "Sarah Chen",
      company: "Innovate Solutions",
      rating: 5,
    },
    {
      quote:
        "Fast turnaround and unmatched attention to detail. Highly recommended for anyone seeking premium printing solutions that make an impression.",
      author: "Michael Tan",
      company: "Apex Consulting",
      rating: 5,
    },
    {
      quote:
        "Inkcredible Solutions delivered exceptional quality business cards that perfectly captured our brand identity. Their attention to detail is remarkable.",
      author: "Jessica Wong",
      company: "Creative Studios",
      rating: 5,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return
    setDirection(1)
    setIsAnimating(true)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 200)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setDirection(-1)
    setIsAnimating(true)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 200)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (isInView) nextTestimonial()
    }, 4000)
    return () => clearInterval(interval)
  }, [isInView])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" ref={ref} className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-black-900/10 to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 relative inline-block">
            Client <span className="text-gold">Testimonials</span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gold"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 0.25, delay: 0.1 }}
            ></motion.span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover what our clients have to say about their experience working with us
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.25, delay: 0.1 }}
            className="absolute -top-10 left-10 text-gold opacity-20"
          >
            <Quote size={120} />
          </motion.div>

          <div className="relative overflow-hidden py-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <Card className="border-none bg-transparent shadow-none">
                  <CardContent className="pt-6 px-4 md:px-10 text-center">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + i * 0.03, duration: 0.2, type: "spring" }}
                        >
                          <svg className="w-6 h-6 text-gold fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-foreground mb-8 font-serif leading-relaxed">
                      "{testimonials[activeIndex].quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-lg">{testimonials[activeIndex].author}</p>
                      <p className="text-muted-foreground">{testimonials[activeIndex].company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gold/50 hover:bg-gold/10 hover:border-gold text-gold size-10"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={cn(
                  "w-3 h-3 p-0 rounded-full",
                  index === activeIndex ? "bg-gold" : "bg-gold/30 hover:bg-gold/50",
                )}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1)
                  setActiveIndex(index)
                }}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gold/50 hover:bg-gold/10 hover:border-gold text-gold size-10"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
