"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CreditCard,
  FileText,
  File,
  Mail,
  BookOpen,
  Tag,
  Package,
  Box,
  ShoppingBag,
  Shirt,
  Flag,
  MoreHorizontal,
} from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <CreditCard className="h-10 w-10 text-gold" />,
      title: "Name Cards",
      description:
        "Elegant, custom-designed cards that leave a memorable first impression, featuring premium finishes and materials.",
    },
    {
      icon: <FileText className="h-10 w-10 text-gold" />,
      title: "Flyers & Brochures",
      description:
        "Eye-catching designs that convey your message with clarity and style, printed on luxurious paper stocks.",
    },
    {
      icon: <File className="h-10 w-10 text-gold" />,
      title: "Letterheads",
      description:
        "Professional letterheads that enhance your corporate identity and make your correspondence stand out.",
    },
    {
      icon: <Mail className="h-10 w-10 text-gold" />,
      title: "Envelopes",
      description: "Custom printed envelopes that complement your stationery and reinforce your brand image.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-gold" />,
      title: "Planners & Books",
      description: "Beautifully crafted planners and books with customizable covers and high-quality paper.",
    },
    {
      icon: <Tag className="h-10 w-10 text-gold" />,
      title: "Stickers",
      description:
        "Vibrant, durable stickers in various shapes and sizes for product labeling or promotional purposes.",
    },
    {
      icon: <Package className="h-10 w-10 text-gold" />,
      title: "Box Sleeves",
      description: "Custom printed sleeves that add a premium touch to your product packaging.",
    },
    {
      icon: <Box className="h-10 w-10 text-gold" />,
      title: "Paper Boxes",
      description: "Sturdy and elegant paper boxes designed to protect and showcase your products.",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-gold" />,
      title: "Paper Bags",
      description: "High-quality paper bags with your branding for a sophisticated retail experience.",
    },
    {
      icon: <Shirt className="h-10 w-10 text-gold" />,
      title: "T Shirts/Apparels",
      description: "Custom printed apparel with your designs for promotions, events, or team uniforms.",
    },
    {
      icon: <Flag className="h-10 w-10 text-gold" />,
      title: "Cloth Banners",
      description: "Durable cloth banners with vibrant printing for indoor and outdoor displays.",
    },
    {
      icon: <MoreHorizontal className="h-10 w-10 text-gold" />,
      title: "Contact Us For More",
      description:
        "Have a unique printing need? Contact us to discuss custom solutions for your specific requirements.",
    },
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-radial from-black-900/10 to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 relative inline-block">
            Our <span className="text-gold">Services</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold"></span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover a suite of premium printing solutions designed to empower your brand. Whether you're looking for
            classic business cards or dynamic marketing materials, our services are tailored to meet your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index}>
              <Card className="relative overflow-hidden group h-full bg-background/50 backdrop-blur-sm border-gold/10 transition-all duration-500 hover:shadow-[0_10px_40px_-15px_rgba(212,175,55,0.2)] hover:border-gold/30">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="pb-2 relative z-10">
                  <div className="mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:text-gold">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-muted-foreground text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button
                    variant="outline"
                    className="text-gold border-gold/50 hover:bg-gold/10 hover:border-gold transition-all duration-300"
                    onClick={scrollToContact}
                  >
                    Get a Quote
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
