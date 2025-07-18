import { Testimonial, PageContent } from '@/types'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  content: PageContent | null
}

export default function TestimonialsSection({ testimonials, content }: TestimonialsSectionProps) {
  const fallbackContent = {
    testimonials_section_title: "What Our Clients Say",
    testimonials_section_description: "Don't just take our word for it. See what our satisfied clients have to say about working with us."
  }

  const sectionContent = content?.metadata || fallbackContent

  const renderStars = (rating: string) => {
    const numStars = parseInt(rating)
    return (
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <svg 
            key={index} 
            className={`w-5 h-5 ${index < numStars ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {sectionContent.testimonials_section_title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {sectionContent.testimonials_section_description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card p-6 hover:shadow-lg transition-shadow">
              {testimonial.metadata.rating && (
                renderStars(testimonial.metadata.rating.key)
              )}
              
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.metadata.testimonial}"
              </blockquote>
              
              <div className="flex items-center">
                {testimonial.metadata.photo && (
                  <img 
                    src={`${testimonial.metadata.photo.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata.client_name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                )}
                
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.metadata.client_name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.metadata.job_title && (
                      <span>{testimonial.metadata.job_title} at </span>
                    )}
                    <span className="text-primary-600">{testimonial.metadata.company}</span>
                  </div>
                </div>
              </div>
              
              {testimonial.metadata.service_used && typeof testimonial.metadata.service_used === 'object' && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {testimonial.metadata.service_used.metadata.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}