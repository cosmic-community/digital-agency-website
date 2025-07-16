export default function HeroSection() {
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
                PREMIUM WEB DESIGN AGENCY
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              WE GROW BRANDS
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                ONLINE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
              Custom Websites, Branding & Digital Marketing
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <button className="btn btn-primary px-8 py-4 text-lg bg-white text-purple-900 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                REQUEST A QUOTE
              </button>
              <div className="flex items-center space-x-2 text-purple-200">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-2">★★★★★</span>
                  <span className="text-sm font-medium">5 Star DesignRush Reviews</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="text-center">
                <p className="text-gray-300 text-sm mb-1">Best Digital Agency of 2024</p>
                <div className="flex items-center space-x-1 text-white">
                  <span className="text-2xl font-bold">Forbes</span>
                </div>
              </div>
              
              {/* Client logos */}
              <div className="flex items-center space-x-6 opacity-60">
                <div className="text-white/60 text-sm font-medium">SONY</div>
                <div className="text-white/60 text-sm font-medium">P&G</div>
                <div className="text-white/60 text-sm font-medium">NYU</div>
                <div className="text-white/60 text-sm font-medium">NFL</div>
              </div>
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