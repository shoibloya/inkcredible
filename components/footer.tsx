"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black-900 text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center mb-4">
              <span className="font-bold text-2xl font-serif tracking-tight">
                <span className="text-gold">Ink</span>credible Solutions
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Experience exquisite design and impeccable quality for all your printing needs. Elevating brands through
              premium print solutions since 1989.
            </p>

            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-300 hover:text-gold transition-colors size-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-gold/50"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-gold transition-colors size-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-gold/50"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-gold transition-colors size-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-gold/50"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-gold transition-colors size-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-gold/50"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gold"></span>
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/#about" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-gold transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gold"></span>
            </h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p className="flex items-start">
                <span className="w-1.5 h-1.5 bg-gold/70 rounded-full mr-2 mt-2"></span>
                <span>
                  3014 Ubi Rd 1, #02-296,
                  <br />
                  Singapore 408702
                </span>
              </p>
              <p className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gold/70 rounded-full mr-2"></span>
                <a href="https://wa.me/6591388993" className="hover:text-gold transition-colors">
                  +65 9138 8993
                </a>
              </p>
              <p className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gold/70 rounded-full mr-2"></span>
                <a href="mailto:main@inkcrediblesolutions.com" className="hover:text-gold transition-colors">
                  main@inkcrediblesolutions.com
                </a>
              </p>
            </address>
          </motion.div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Inkcredible Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
