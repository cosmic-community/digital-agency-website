import { CaseStudy } from '@/types'

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <section id="work" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="card overflow-hidden hover:shadow-lg transition-shadow">
              {study.metadata.featured_image && (
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={`${study.metadata.featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
                    alt={study.metadata.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {study.metadata.title}
                  </h3>
                  {study.metadata.duration && (
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {study.metadata.duration}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center mb-4">
                  <span className="text-primary-600 font-medium">
                    {study.metadata.client}
                  </span>
                  {study.metadata.industry && (
                    <>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-600">{study.metadata.industry}</span>
                    </>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <div 
                      className="text-gray-600 text-sm prose prose-sm"
                      dangerouslySetInnerHTML={{ __html: study.metadata.challenge }}
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                    <div 
                      className="text-gray-600 text-sm prose prose-sm"
                      dangerouslySetInnerHTML={{ __html: study.metadata.results }}
                    />
                  </div>
                </div>
                
                {study.metadata.services_used && study.metadata.services_used.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Services Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.metadata.services_used.map((service, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                        >
                          {service.metadata.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {study.metadata.team_members && study.metadata.team_members.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Team</h4>
                    <div className="flex -space-x-2">
                      {study.metadata.team_members.slice(0, 4).map((member, index) => (
                        <div key={index} className="relative">
                          {member.metadata.photo && (
                            <img 
                              src={`${member.metadata.photo.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                              alt={member.metadata.name}
                              width={32}
                              height={32}
                              className="w-8 h-8 rounded-full border-2 border-white"
                              title={member.metadata.name}
                            />
                          )}
                        </div>
                      ))}
                      {study.metadata.team_members.length > 4 && (
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center">
                          <span className="text-xs text-gray-600">
                            +{study.metadata.team_members.length - 4}
                          </span>
                        </div>
                      )}
                    </div>
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