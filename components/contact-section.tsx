"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Mail, MessageSquare, MapPin, ArrowRight, Check } from "lucide-react"
import { motion, useInView } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })
  const [consentDialogOpen, setConsentDialogOpen] = useState(false)
  const [consentGiven, setConsentGiven] = useState(false)
  const [contactMethod, setContactMethod] = useState<{ type: string; url: string } | null>(null)

  const handleContactClick = (type: string, url: string) => {
    setContactMethod({ type, url })
    setConsentDialogOpen(true)
  }

  const handleProceed = () => {
    if (contactMethod) {
      window.open(contactMethod.url, "_blank")
      setConsentDialogOpen(false)
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
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
    <>
      <section id="contact" ref={ref} className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black-900/80 to-black-900/90"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/5 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.25 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-white relative inline-block">
              Let's <span className="text-gold">Connect</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gold"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.25, delay: 0.1 }}
              ></motion.span>
            </h2>
            <p className="text-lg text-gray-300">
              Get in touch with us for a free consultation or quote – we're here to help you stand out.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.div
                  variants={item}
                  className="bg-background/10 backdrop-blur-md rounded-lg p-6 border border-gold/10 transition-all hover:border-gold/30 hover:shadow-[0_10px_40px_-15px_rgba(212,175,55,0.2)]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold/20 p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                      <p className="text-gray-300 mb-1">Mon-Fri: 9am-6pm</p>
                      <button
                        onClick={() => handleContactClick("WhatsApp", "https://wa.me/6591388993")}
                        className="text-gold hover:underline transition-colors flex items-center gap-1 group"
                      >
                        +65 9138 8993
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={item}
                  className="bg-background/10 backdrop-blur-md rounded-lg p-6 border border-gold/10 transition-all hover:border-gold/30 hover:shadow-[0_10px_40px_-15px_rgba(212,175,55,0.2)]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                      <p className="text-gray-300 mb-1">We'll reply as soon as possible</p>
                      <button
                        onClick={() => handleContactClick("Email", "mailto:main@inkcrediblesolutions.com")}
                        className="text-gold hover:underline transition-colors flex items-center gap-1 group"
                      >
                        main@inkcrediblesolutions.com
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={item}
                  className="bg-background/10 backdrop-blur-md rounded-lg p-6 border border-gold/10 transition-all hover:border-gold/30 hover:shadow-[0_10px_40px_-15px_rgba(212,175,55,0.2)]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Located At</h3>
                      <p className="text-gray-300 mb-1">3014 Ubi Rd 1, #02-296,</p>
                      <p className="text-gray-300">Singapore 408702</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={item} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/10 aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black-900/20 to-transparent z-10"></div>
                  <Image
                    src="/images/contact-image.png"
                    alt="Business card and communication tools"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-background border border-gold/20 p-4 rounded-lg shadow-xl z-20">
                  <div className="flex items-center space-x-4">
                    <div className="size-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <Check className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">PDPA</p>
                      <p className="font-semibold">Compliant</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Dialog open={consentDialogOpen} onOpenChange={setConsentDialogOpen}>
        <DialogContent className="bg-black-900 border-gold/20 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif">Contact Consent</DialogTitle>
            <DialogDescription className="text-gray-300">
              Before we connect, we need your permission to contact you.
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-start space-x-3 py-4">
            <Checkbox
              id="consent-popup"
              checked={consentGiven}
              onCheckedChange={(checked) => setConsentGiven(checked === true)}
              className="border-gold data-[state=checked]:bg-gold data-[state=checked]:text-black mt-1"
            />
            <div className="space-y-1">
              <Label htmlFor="consent-popup" className="text-sm text-gray-200 font-normal leading-relaxed">
                I consent to Inkcredible Solutions contacting me regarding my inquiry.
              </Label>
              <p className="text-xs text-gray-400">You must check this box before proceeding.</p>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setConsentDialogOpen(false)}
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              onClick={handleProceed}
              disabled={!consentGiven}
              className="bg-gold hover:bg-gold/90 text-black disabled:opacity-50"
            >
              Proceed to {contactMethod?.type}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
