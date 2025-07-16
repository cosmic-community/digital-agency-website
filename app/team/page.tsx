import { Metadata } from 'next'
import { getTeamMembers } from '@/lib/cosmic'
import { TeamMember } from '@/types'

export const metadata: Metadata = {
  title: 'Our Team - Digital Agency',
  description: 'Meet our talented team of designers, developers, and strategists who are passionate about creating exceptional digital experiences.',
}

export default async function TeamPage() {
  const teamMembers: TeamMember[] = await getTeamMembers()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Our talented team of designers, developers, and strategists are passionate about creating exceptional digital experiences that drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`${member.metadata.photo?.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
                    alt={member.metadata.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.metadata.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.metadata.job_title}
                  </p>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {member.metadata.bio}
                  </p>
                  
                  {/* Skills */}
                  {member.metadata.skills && member.metadata.skills.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.metadata.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Contact Links */}
                  <div className="flex space-x-4">
                    {member.metadata.email && (
                      <a
                        href={`mailto:${member.metadata.email}`}
                        className="text-gray-400 hover:text-primary-600 transition-colors"
                        aria-label={`Email ${member.metadata.name}`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </a>
                    )}
                    {member.metadata.linkedin && (
                      <a
                        href={member.metadata.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-600 transition-colors"
                        aria-label={`${member.metadata.name} LinkedIn`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our team can help you achieve your digital goals and drive meaningful results for your business.
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