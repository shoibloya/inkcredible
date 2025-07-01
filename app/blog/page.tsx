import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 text-foreground">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 relative inline-block">
              Our <span className="text-gold">Blog</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold" />
            </h1>
            <p className="text-lg text-muted-foreground">
              Insights and expertise from our printing professionals
            </p>
          </div>

          {/* Blog cards */}
          <div className="max-w-4xl mx-auto space-y-10">

            {/* NEW POST — Business-Card Designs */}
            <div className="bg-background/50 backdrop-blur-sm border border-gold/10 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/blog-five.png"
                  alt="Business card design trends Singapore 2025"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
                  7 Modern Business-Card Designs to Elevate Your Brand in Singapore (2025 Edition)
                </h2>
                <p className="text-sm text-gold mb-4">June 11, 2025</p>
                <p className="text-gray-300 mb-6">
                  Discover cutting-edge textures, finishes, and layouts that
                  will help your card rise above the noise in Singapore’s
                  competitive market.
                </p>
                <div className="flex justify-end">
                  <a
                    href="/blog/business-card-designs-in-singapore"
                    className="inline-flex items-center text-gold hover:underline"
                  >
                    Read Full Article →
                  </a>
                </div>
              </div>
            </div>

            {/* Existing post — Business-Card Essentials */}
            <div className="bg-background/50 backdrop-blur-sm border border-gold/10 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/blog-two.png"
                  alt="Business card essentials 2025"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
                  What to Include on a Business Card in 2025 (Singapore Edition)
                </h2>
                <p className="text-sm text-gold mb-4">May 15, 2023</p>
                <p className="text-gray-300 mb-6">
                  In Singapore’s quick-paced business climate, the humble
                  business card still plays a significant role despite our
                  increasingly digital age.
                </p>
                <div className="flex justify-end">
                  <a
                    href="/blog/business-card-essentials-2025"
                    className="inline-flex items-center text-gold hover:underline"
                  >
                    Read Full Article →
                  </a>
                </div>
              </div>
            </div>

            {/* Existing post — Paper Types */}
            <div className="bg-background/50 backdrop-blur-sm border border-gold/10 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/blog-one.png"
                  alt="Business card paper types"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
                  Business Card Paper Types in Singapore: A Complete Guide
                </h2>
                <p className="text-sm text-gold mb-4">April 21, 2023</p>
                <p className="text-gray-300 mb-6">
                  Selecting the right paper stock can dramatically influence
                  how your brand is perceived in Singapore’s competitive
                  business culture.
                </p>
                <div className="flex justify-end">
                  <a
                    href="/blog/business-card-paper-types"
                    className="inline-flex items-center text-gold hover:underline"
                  >
                    Read Full Article →
                  </a>
                </div>
              </div>
            </div>

            {/* Existing post — Print Materials */}
            <div className="bg-background/50 backdrop-blur-sm border border-gold/10 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/blog-three.png"
                  alt="High-quality print materials Singapore"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
                  The Strategic Power of High-Quality Print Materials in
                  Singapore’s Competitive Market
                </h2>
                <p className="text-sm text-gold mb-4">May 31, 2025</p>
                <p className="text-gray-300 mb-6">
                  In Singapore’s hyperconnected landscape—where digital ads
                  dominate—premium print remains a silent powerhouse.
                </p>
                <div className="flex justify-end">
                  <a
                    href="/blog/high-quality-business-card-print-material"
                    className="inline-flex items-center text-gold hover:underline"
                  >
                    Read Full Article →
                  </a>
                </div>
              </div>
            </div>

            {/* Existing post — QR Integration */}
            <div className="bg-background/50 backdrop-blur-sm border border-gold/10 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/blog-four.png"
                  alt="QR code business card integration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
                  Bridging Physical and Digital: Successful QR Code Integration
                  with Premium Business Cards in Singapore
                </h2>
                <p className="text-sm text-gold mb-4">May 31, 2025</p>
                <p className="text-gray-300 mb-6">
                  Premium QR business cards are redefining networking by merging
                  tactile elegance with smart digital functionality.
                </p>
                <div className="flex justify-end">
                  <a
                    href="/blog/qr-code-integration-business-card"
                    className="inline-flex items-center text-gold hover:underline"
                  >
                    Read Full Article →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
