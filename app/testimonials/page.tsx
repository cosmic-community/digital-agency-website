import { Metadata } from 'next'
import { getTestimonials } from '@/lib/cosmic'
import { Testimonial } from '@/types'

export const metadata: Metadata = {
  title: 'Client Testimonials - Digital Agency',
  description: 'Read what our satisfied clients have to say about working with us. Discover how we\'ve helped businesses achieve their digital goals.',
}

export default async function TestimonialsPage() {
  const testimonials: Testimonial[] = await getTestimonials()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Don't just take our word for it. See what our satisfied clients have to say about working with us and the results we've achieved together.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                {/* Rating */}
                {testimonial.metadata.rating && (
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < parseInt(testimonial.metadata.rating?.key || '0')
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.metadata.testimonial}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={`${testimonial.metadata.photo?.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                      alt={testimonial.metadata.client_name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">
                      {testimonial.metadata.client_name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.metadata.job_title && (
                        <span>{testimonial.metadata.job_title}, </span>
                      )}
                      {testimonial.metadata.company}
                    </div>
                  </div>
                </div>

                {/* Service Used */}
                {testimonial.metadata.service_used && typeof testimonial.metadata.service_used === 'object' && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                      Service: <span className="text-primary-600 font-medium">{testimonial.metadata.service_used.metadata.name}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Trusted by Industry Leaders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">5.0</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you achieve your digital goals and drive meaningful results for your business.
            </p>
            <button className="btn btn-primary px-8 py-3 text-lg">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}