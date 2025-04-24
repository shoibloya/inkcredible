"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-foreground flex items-center">
          <span className="font-bold text-xl font-serif tracking-tight">
            <span className="text-gold">Ink</span>credible Solutions
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/90 hover:text-gold transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/90 hover:text-gold transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground/90 hover:text-gold transition-colors duration-300"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className="text-foreground/90 hover:text-gold transition-colors duration-300"
            >
              Blog
            </button>
          </nav>
          <Button onClick={() => scrollToSection("contact")} className="bg-gold hover:bg-gold/80 text-purple-950 px-6">
            Contact Us
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-black-900 border-gold/20">
            <div className="flex flex-col space-y-4 mt-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-gold transition-colors py-2 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-gold transition-colors py-2 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground hover:text-gold transition-colors py-2 text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="text-foreground hover:text-gold transition-colors py-2 text-left"
              >
                Blog
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gold hover:bg-gold/80 text-purple-950 w-full mt-4"
              >
                Contact Us
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
