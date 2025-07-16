import { getServices, getTeamMembers, getCaseStudies, getTestimonials } from '@/lib/cosmic'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import TeamSection from '@/components/TeamSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'

export default async function HomePage() {
  const [services, teamMembers, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getTestimonials(),
  ])

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection services={services} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <TeamSection teamMembers={teamMembers} />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </div>
  )
}