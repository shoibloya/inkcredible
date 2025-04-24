import Image from "next/image"

export default function SimpleBlogSection() {
  return (
    <section id="blog" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-black-900/10 to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 relative inline-block">
            Our <span className="text-gold">Blog</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold"></span>
          </h2>
          <p className="text-lg text-muted-foreground">Insights and expertise from our printing professionals</p>
        </div>

        <div className="max-w-4xl mx-auto bg-background/50 backdrop-blur-sm border border-gold/10 rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-64 md:h-80">
            <Image src="/blog-two.png" alt="Business card essentials 2025" fill className="object-cover" />
          </div>
          <div className="p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4">
              What to Include on a Business Card in 2025 (Singapore Edition)
            </h3>
            <p className="text-sm text-gold mb-4">May 15, 2023</p>
            <p className="text-gray-300 mb-6">
              In the quick-paced business climate of Singapore, the humble business card still plays a significant part
              despite our increasingly expanding digital age. As we continue into 2025, these little marketing miracles
              continue to be important touchstones in Singapore's relationship-oriented business culture.
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
      </div>
    </section>
  )
}
