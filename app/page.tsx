"use client"

import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import ProcessSection from "@/components/process-section"
import ParallaxDivider from "@/components/parallax-divider"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Get the element ID from the hash
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)

      // If the element exists, scroll to it after a short delay
      // The delay ensures the page is fully loaded before scrolling
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 500)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 text-foreground overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ParallaxDivider />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <ParallaxDivider reversed />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
