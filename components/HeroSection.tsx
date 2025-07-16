import { PageContent } from '@/types'

interface HeroSectionProps {
  content: PageContent | null
}

export default function HeroSection({ content }: HeroSectionProps) {
  // Fallback content if no Cosmic content is available
  const fallbackContent = {
    hero_badge_text: "PREMIUM WEB DESIGN AGENCY",
    hero_main_headline: "WE GROW BRANDS",
    hero_highlight_text: "ONLINE",
    hero_subtitle: "Custom Websites, Branding & Digital Marketing",
    hero_button_text: "REQUEST A QUOTE",
    hero_review_text: "5 Star DesignRush Reviews",
    hero_award_text: "Best Digital Agency of 2024",
    hero_award_source: "Forbes",
    hero_client_logos: "SONY, P&G, NYU, NFL"
  }

  const heroContent = content?.metadata || fallbackContent
  const clientLogos = heroContent.hero_client_logos?.split(', ') || []

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with improved gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"></div>
      
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background pattern for texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          backgroundSize: '400px 400px',
        }}></div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left column - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-medium text-purple-200 bg-purple-800/30 rounded-full border border-purple-500/30">
                {heroContent.hero_badge_text}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {heroContent.hero_main_headline}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                {heroContent.hero_highlight_text}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
              {heroContent.hero_subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <button className="btn btn-primary px-8 py-4 text-lg bg-white text-purple-900 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                {heroContent.hero_button_text}
              </button>
              <div className="flex items-center space-x-2 text-purple-200">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-2">★★★★★</span>
                  <span className="text-sm font-medium">{heroContent.hero_review_text}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="text-center">
                <p className="text-gray-300 text-sm mb-1">{heroContent.hero_award_text}</p>
                <div className="flex items-center space-x-1 text-white">
                  <span className="text-2xl font-bold">{heroContent.hero_award_source}</span>
                </div>
              </div>
              
              {/* Client logos */}
              {clientLogos.length > 0 && (
                <div className="flex items-center space-x-6 opacity-60">
                  {clientLogos.map((logo, index) => (
                    <div key={index} className="text-white/60 text-sm font-medium">{logo}</div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right column - Visual elements */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Mockup screens */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/10"></div>
              <div className="relative p-8">
                <div className="space-y-4">
                  <div className="h-4 bg-white/20 rounded w-3/4"></div>
                  <div className="h-4 bg-white/20 rounded w-1/2"></div>
                  <div className="h-32 bg-white/10 rounded-lg"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-16 bg-white/10 rounded"></div>
                    <div className="h-16 bg-white/10 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}