import { TeamMember } from '@/types'

interface TeamSectionProps {
  teamMembers: TeamMember[]
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our talented team of designers, developers, and strategists are passionate about creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="card p-6 text-center hover:shadow-lg transition-shadow">
              {member.metadata.photo && (
                <div className="mb-4">
                  <img 
                    src={`${member.metadata.photo.imgix_url}?w=256&h=256&fit=crop&auto=format,compress`}
                    alt={member.metadata.name}
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.metadata.name}
              </h3>
              
              <p className="text-primary-600 font-medium mb-3">
                {member.metadata.job_title}
              </p>
              
              {member.metadata.bio && (
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.metadata.bio}
                </p>
              )}
              
              {member.metadata.skills && member.metadata.skills.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.metadata.skills.slice(0, 4).map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.metadata.skills.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{member.metadata.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              )}
              
              <div className="flex justify-center space-x-3">
                {member.metadata.email && (
                  <a 
                    href={`mailto:${member.metadata.email}`}
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                    title="Email"
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
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}