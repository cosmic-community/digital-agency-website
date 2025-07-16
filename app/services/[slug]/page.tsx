import { getService } from '@/lib/cosmic'
import { Service } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  
  try {
    const service: Service = await getService(slug)
    
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center text-sm text-gray-600 mb-8">
                <Link href="/services" className="hover:text-primary-600">
                  Services
                </Link>
                <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900">{service.metadata.name}</span>
              </nav>
              
              {/* Service Header */}
              <div className="flex items-start space-x-8">
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {service.metadata.name}
                  </h1>
                  
                  {/* Service Description */}
                  <div 
                    className="text-xl text-gray-600 mb-8 prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: service.metadata.description || '' }}
                  />
                  
                  {/* Starting Price */}
                  {service.metadata.starting_price && (
                    <div className="mb-8">
                      <span className="text-3xl font-bold text-primary-600">
                        {service.metadata.starting_price}
                      </span>
                      <span className="text-gray-600 text-lg ml-2">starting from</span>
                    </div>
                  )}
                  
                  <button className="btn btn-primary text-lg px-8 py-3">
                    Get Started
                  </button>
                </div>
                
                {/* Service Icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center">
                    {service.metadata.icon ? (
                      <img 
                        src={`${service.metadata.icon.imgix_url}?w=48&h=48&fit=crop&auto=format,compress`}
                        alt={service.metadata.name}
                        className="w-12 h-12 object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 font-bold text-lg">
                          {service.metadata.name.substring(0, 2)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Features Section */}
                {service.metadata.features && service.metadata.features.length > 0 && (
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      What's Included
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.metadata.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* CTA Section */}
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-primary-100 mb-6">
                    Let's discuss how we can help you achieve your goals with our {service.metadata.name.toLowerCase()} services.
                  </p>
                  <button className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3">
                    Contact Us Today
                  </button>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Team Lead */}
                {service.metadata.team_lead && (
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Team Lead
                    </h3>
                    <div className="text-center">
                      <img 
                        src={`${service.metadata.team_lead.metadata.photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                        alt={service.metadata.team_lead.metadata.name}
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                      />
                      <h4 className="text-lg font-semibold text-gray-900">
                        {service.metadata.team_lead.metadata.name}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {service.metadata.team_lead.metadata.job_title}
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        {service.metadata.team_lead.metadata.bio}
                      </p>
                      
                      {/* Skills */}
                      {service.metadata.team_lead.metadata.skills && service.metadata.team_lead.metadata.skills.length > 0 && (
                        <div>
                          <h5 className="text-sm font-semibold text-gray-900 mb-2">Skills:</h5>
                          <div className="flex flex-wrap gap-2">
                            {service.metadata.team_lead.metadata.skills.map((skill: string, index: number) => (
                              <span key={index} className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Contact Info */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span className="text-gray-700">contact@company.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">New York, NY</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="text-gray-700">(555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    notFound()
  }
}