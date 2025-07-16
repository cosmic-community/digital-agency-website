import { getServices } from '@/lib/cosmic'
import { Service } from '@/types'
import Link from 'next/link'

export default async function ServicesPage() {
  const services: Service[] = await getServices()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive digital solutions to help your business grow and succeed online. 
              Explore our range of services designed to drive meaningful results for your business.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              {/* Service Icon */}
              <div className="p-8 pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center mb-6">
                  {service.metadata.icon ? (
                    <img 
                      src={`${service.metadata.icon.imgix_url}?w=32&h=32&fit=crop&auto=format,compress`}
                      alt={service.metadata.name}
                      className="w-8 h-8 object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-sm">
                        {service.metadata.name.substring(0, 2)}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Service Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.metadata.name}
                </h3>
                
                {/* Service Description */}
                <div 
                  className="text-gray-600 mb-6 line-clamp-3"
                  dangerouslySetInnerHTML={{ 
                    __html: service.metadata.description?.substring(0, 150) + '...' || ''
                  }}
                />
                
                {/* Features List */}
                {service.metadata.features && service.metadata.features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.metadata.features.slice(0, 3).map((feature: string, index: number) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Starting Price */}
                {service.metadata.starting_price && (
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-primary-600">
                      {service.metadata.starting_price}
                    </span>
                    <span className="text-gray-600 text-sm ml-2">starting from</span>
                  </div>
                )}
                
                {/* Team Lead */}
                {service.metadata.team_lead && (
                  <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-lg">
                    <img 
                      src={`${service.metadata.team_lead.metadata.photo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                      alt={service.metadata.team_lead.metadata.name}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {service.metadata.team_lead.metadata.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {service.metadata.team_lead.metadata.job_title}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* CTA Button */}
              <div className="p-8 pt-0">
                <Link 
                  href={`/services/${service.slug}`}
                  className="w-full btn btn-primary text-center inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}