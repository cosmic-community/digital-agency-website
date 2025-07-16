import { getServices, getTeamMembers, getCaseStudies, getTestimonials, getPageContent } from '@/lib/cosmic'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import TeamSection from '@/components/TeamSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'

export default async function HomePage() {
  const [services, teamMembers, caseStudies, testimonials, pageContent] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getTestimonials(),
    getPageContent(),
  ])

  return (
    <div className="min-h-screen">
      <HeroSection content={pageContent} />
      <ServicesSection services={services} content={pageContent} />
      <CaseStudiesSection caseStudies={caseStudies} content={pageContent} />
      <TeamSection teamMembers={teamMembers} content={pageContent} />
      <TestimonialsSection testimonials={testimonials} content={pageContent} />
      <CTASection content={pageContent} />
    </div>
  )
}