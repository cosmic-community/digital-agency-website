import { getCaseStudies, getPageContent } from '@/lib/cosmic'
import { CaseStudy } from '@/types'
import Link from 'next/link'

export default async function WorkPage() {
  const [caseStudies, pageContent] = await Promise.all([
    getCaseStudies(),
    getPageContent(),
  ])

  const fallbackContent = {
    case_studies_section_title: "Our Work",
    case_studies_section_description: "Explore our portfolio of successful projects and see how we've helped businesses achieve their digital goals."
  }

  const sectionContent = pageContent?.metadata || fallbackContent

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {sectionContent.case_studies_section_title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionContent.case_studies_section_description}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study: CaseStudy) => (
            <Link 
              key={study.id} 
              href={`/work/${study.slug}`}
              className="group block"
            >
              <div className="card overflow-hidden hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                {study.metadata.featured_image && (
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img 
                      src={`${study.metadata.featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
                      alt={study.metadata.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {study.metadata.title}
                    </h2>
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
                  
                  <div className="text-gray-600 text-sm mb-4">
                    <div 
                      className="line-clamp-3 prose prose-sm"
                      dangerouslySetInnerHTML={{ __html: study.metadata.challenge }}
                    />
                  </div>
                  
                  {study.metadata.services_used && study.metadata.services_used.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.metadata.services_used.slice(0, 3).map((service, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                        >
                          {service.metadata.name}
                        </span>
                      ))}
                      {study.metadata.services_used.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{study.metadata.services_used.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors">
                      View Case Study →
                    </span>
                    
                    {study.metadata.team_members && study.metadata.team_members.length > 0 && (
                      <div className="flex -space-x-2">
                        {study.metadata.team_members.slice(0, 3).map((member, index) => (
                          <div key={index} className="relative">
                            {member.metadata.photo && (
                              <img 
                                src={`${member.metadata.photo.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                                alt={member.metadata.name}
                                className="w-6 h-6 rounded-full border-2 border-white"
                                title={member.metadata.name}
                              />
                            )}
                          </div>
                        ))}
                        {study.metadata.team_members.length > 3 && (
                          <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center">
                            <span className="text-xs text-gray-600">
                              +{study.metadata.team_members.length - 3}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {caseStudies.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No case studies available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  )
}