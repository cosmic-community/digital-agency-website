export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss how we can help you achieve your digital goals and drive meaningful results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn px-8 py-3 text-lg bg-white text-purple-800 hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
            <button className="btn btn-outline px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-purple-800 transition-colors">
              View Our Portfolio
            </button>
          </div>
          
          <p className="text-purple-200 text-sm mt-6">
            Free consultation • No obligation • Quick response
          </p>
        </div>
      </div>
    </section>
  )
}