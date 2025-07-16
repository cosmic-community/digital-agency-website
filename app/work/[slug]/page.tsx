// app/work/[slug]/page.tsx
import { getCaseStudyBySlug, getCaseStudies } from '@/lib/cosmic'
import { CaseStudy } from '@/types'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  
  try {
    const caseStudy = await getCaseStudyBySlug(slug)
    
    if (!caseStudy) {
      notFound()
    }

    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-gray-600 mb-8">
            <Link href="/work" className="hover:text-primary-600 transition-colors">
              Work
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{caseStudy.metadata.title}</span>
          </nav>

          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {caseStudy.metadata.title}
              </h1>
              {caseStudy.metadata.duration && (
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {caseStudy.metadata.duration}
                </span>
              )}
            </div>
            
            <div className="flex items-center mb-8">
              <span className="text-primary-600 font-semibold text-lg">
                {caseStudy.metadata.client}
              </span>
              {caseStudy.metadata.industry && (
                <>
                  <span className="mx-3 text-gray-400">•</span>
                  <span className="text-gray-700 text-lg">{caseStudy.metadata.industry}</span>
                </>
              )}
            </div>

            {caseStudy.metadata.featured_image && (
              <div className="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden">
                <img 
                  src={`${caseStudy.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                  alt={caseStudy.metadata.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            )}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <div 
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: caseStudy.metadata.challenge }}
                />
              </section>

              {/* Solution */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Solution</h2>
                <div 
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: caseStudy.metadata.solution }}
                />
              </section>

              {/* Results */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
                <div 
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: caseStudy.metadata.results }}
                />
              </section>

              {/* Gallery */}
              {caseStudy.metadata.gallery && caseStudy.metadata.gallery.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {caseStudy.metadata.gallery.map((image, index) => (
                      <div key={index} className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                        <img 
                          src={`${image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                          alt={`${caseStudy.metadata.title} - Gallery ${index + 1}`}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Services Used */}
                {caseStudy.metadata.services_used && caseStudy.metadata.services_used.length > 0 && (
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Services Used</h3>
                    <div className="space-y-3">
                      {caseStudy.metadata.services_used.map((service, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          {service.metadata.icon && (
                            <img 
                              src={`${service.metadata.icon.imgix_url}?w=48&h=48&fit=crop&auto=format,compress`}
                              alt={service.metadata.name}
                              className="w-6 h-6 object-cover rounded"
                            />
                          )}
                          <span className="text-gray-700">{service.metadata.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Team Members */}
                {caseStudy.metadata.team_members && caseStudy.metadata.team_members.length > 0 && (
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Team</h3>
                    <div className="space-y-4">
                      {caseStudy.metadata.team_members.map((member, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          {member.metadata.photo && (
                            <img 
                              src={`${member.metadata.photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                              alt={member.metadata.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          )}
                          <div>
                            <div className="font-medium text-gray-900">{member.metadata.name}</div>
                            <div className="text-sm text-gray-600">{member.metadata.job_title}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Details */}
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-600">Client</span>
                      <div className="font-medium text-gray-900">{caseStudy.metadata.client}</div>
                    </div>
                    {caseStudy.metadata.industry && (
                      <div>
                        <span className="text-sm text-gray-600">Industry</span>
                        <div className="font-medium text-gray-900">{caseStudy.metadata.industry}</div>
                      </div>
                    )}
                    {caseStudy.metadata.duration && (
                      <div>
                        <span className="text-sm text-gray-600">Duration</span>
                        <div className="font-medium text-gray-900">{caseStudy.metadata.duration}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to start your project?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/#contact"
                  className="btn btn-primary"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="/work"
                  className="btn btn-outline"
                >
                  View More Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching case study:', error)
    notFound()
  }
}

// Generate static params for all case studies
export async function generateStaticParams() {
  const caseStudies = await getCaseStudies()
  
  return caseStudies.map((study: CaseStudy) => ({
    slug: study.slug,
  }))
}