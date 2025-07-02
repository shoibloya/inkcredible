import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 text-foreground">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* PAGE HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 relative inline-block">
              Our <span className="text-gold">Blog</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold" />
            </h1>
            <p className="text-lg text-muted-foreground">
              Insights and expertise from our printing professionals
            </p>
          </div>

          {/* BLOG INDEX */}
          <div className="max-w-4xl mx-auto space-y-10">
            {/* NEW POST — Premium Printing Troubleshooting (18 Jun 2025) */}
            <div className="bg-background/50 backdrop-blur-sm border border-gold/10 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/blog-six.png"
                  alt="Premium business-card printing issues"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
                  How to Fix Common Printing Issues with Premium Business Card Printing
                </h2>
                <p className="text-sm text-gold mb-4">June 18, 2025</p>
                <p className="text-gray-300 mb-6">
                  Diagnose and solve color-matching glitches, thick-stock jams,
                  textured-paper pitfalls, and specialty-finish failures—so every
                  premium card looks flawless.
                </p>
                <div className="flex justify-end">
                  <a
                    href="/blog/how-to-fix-common-printing-issues-with-premium-business-card-printing"
                    className="inline-flex items-center text-gold hover:underline"
                  >
                    Read Full Article →
                  </a>
                </div>
              </div>
            </div>

            {/* NEWER POST — Business-Card Designs (11 Jun 2025) */}
            <div className="bg-background/50 backdrop-blur-sm border border-gold/10 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/blog-five.png"
                  alt="Business-card design trends Singapore 2025"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
                  7 Modern Business-Card Designs to Elevate Your Brand in Singapore&nbsp;(2025&nbsp;Edition)
                </h2>
                <p className="text-sm text-gold mb-4">June 11, 2025</p>
                <p className="text-gray-300 mb-6">
                  Explore trending textures, finishes, and layouts that make
                  your card stand out in Singapore’s competitive scene.
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

            {/* EXISTING POST — High-Quality Print Materials (31 May 2025) */}
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
                  The Strategic Power of High-Quality Print Materials in Singapore’s Competitive Market
                </h2>
                <p className="text-sm text-gold mb-4">May 31, 2025</p>
                <p className="text-gray-300 mb-6">
                  In Singapore’s hyper-connected landscape—where digital ads
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

            {/* EXISTING POST — QR Integration (31 May 2025) */}
            <div className="bg-background/50 backdrop-blur-sm border border-gold/10 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/blog-four.png"
                  alt="QR code business-card integration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
                  Bridging Physical and Digital: Successful QR Code Integration with Premium Business Cards in Singapore
                </h2>
                <p className="text-sm text-gold mb-4">May 31, 2025</p>
                <p className="text-gray-300 mb-6">
                  Premium QR cards merge tactile elegance with smart digital
                  functionality for next-level networking.
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

            {/* EXISTING POST — Business-Card Essentials (15 May 2023) */}
            <div className="bg-background/50 backdrop-blur-sm border border-gold/10 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/blog-two.png"
                  alt="Business-card essentials 2025"
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
                  Even in today’s digital age, the humble business card still
                  drives first impressions in Singapore’s fast-moving climate.
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

            {/* EXISTING POST — Paper Types (21 Apr 2023) */}
            <div className="bg-background/50 backdrop-blur-sm border border-gold/10 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/blog-one.png"
                  alt="Business-card paper types guide"
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
                  Choosing the perfect stock can make or break first impressions
                  in Singapore’s competitive scene.
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}