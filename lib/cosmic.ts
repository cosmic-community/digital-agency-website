import { createBucketClient } from '@cosmicjs/sdk'
import { Service, TeamMember, CaseStudy, Testimonial, PageContent } from '@/types'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG!,
  readKey: process.env.COSMIC_READ_KEY!,
  apiEnvironment: "staging",
})

export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error) {
    console.error('Error fetching case studies:', error)
    return []
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    const response = await cosmic.objects
      .findOne({ 
        type: 'case-studies', 
        slug: slug 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object
  } catch (error) {
    console.error('Error fetching case study:', error)
    return null
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getPageContent(): Promise<PageContent | null> {
  try {
    const response = await cosmic.objects
      .findOne({ 
        type: 'page-content', 
        slug: 'homepage-content' 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object
  } catch (error) {
    console.error('Error fetching page content:', error)
    return null
  }
}