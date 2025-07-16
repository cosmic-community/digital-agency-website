import { Service, PageContent } from '@/types'

interface ServicesSectionProps {
  services: Service[]
  content: PageContent | null
}

export default function ServicesSection({ services, content }: ServicesSectionProps) {
  const fallbackContent = {
    services_section_title: "Our Services",
    services_section_description: "We provide comprehensive digital solutions to help your business grow and succeed online."
  }

  const sectionContent = content?.metadata || fallbackContent

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {sectionContent.services_section_title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {sectionContent.services_section_description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card p-6 hover:shadow-lg transition-shadow">
              {service.metadata.icon && (
                <div className="mb-4">
                  <img 
                    src={`${service.metadata.icon.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
                    alt={service.metadata.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.metadata.name}
              </h3>
              
              <div 
                className="text-gray-600 mb-4 prose prose-sm"
                dangerouslySetInnerHTML={{ __html: service.metadata.description }}
              />
              
              {service.metadata.features && service.metadata.features.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.metadata.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex items-center justify-between">
                {service.metadata.starting_price && (
                  <span className="text-lg font-semibold text-primary-600">
                    Starting at {service.metadata.starting_price}
                  </span>
                )}
                
                {service.metadata.team_lead && (
                  <div className="flex items-center space-x-2">
                    {service.metadata.team_lead.metadata.photo && (
                      <img 
                        src={`${service.metadata.team_lead.metadata.photo.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                        alt={service.metadata.team_lead.metadata.name}
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full"
                      />
                    )}
                    <span className="text-sm text-gray-500">
                      Led by {service.metadata.team_lead.metadata.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}