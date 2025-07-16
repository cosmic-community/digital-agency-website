export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-800"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          backgroundSize: '400px 400px',
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Premium Web Design Agency
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-4">
            We Grow Brands Online
          </p>
          <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
            Custom Websites, Branding & Digital Marketing
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn btn-primary px-8 py-3 text-lg bg-white text-purple-800 hover:bg-gray-100 transition-colors">
              Request a Quote
            </button>
            <div className="flex items-center space-x-2 text-purple-200">
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">★★★★★</span>
                <span className="text-sm">5 Star DesignRush Reviews</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <p className="text-purple-200 text-sm">Best Digital Agency of 2024</p>
            <div className="flex items-center space-x-1 text-purple-200">
              <span className="text-2xl font-bold">Forbes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}