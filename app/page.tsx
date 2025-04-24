import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import ProcessSection from "@/components/process-section"
import ParallaxDivider from "@/components/parallax-divider"
import SimpleBlogSection from "@/components/simple-blog-section"

export default function Home() {
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
        <SimpleBlogSection />
      </main>
      <Footer />
    </div>
  )
}
