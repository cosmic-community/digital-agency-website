import { createBucketClient } from '@cosmicjs/sdk'
import { Service, CaseStudy, TeamMember, Testimonial, PageContent } from '@/types'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG!,
  readKey: process.env.COSMIC_READ_KEY!,
})

export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects.find({
      type: 'services'
    }).props(['id', 'title', 'slug', 'metadata']).depth(1)
    
    return response.objects as Service[]
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export async function getService(slug: string): Promise<Service> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'services',
      slug
    }).props(['id', 'title', 'slug', 'metadata']).depth(1)
    
    return response.object as Service
  } catch (error) {
    console.error('Error fetching service:', error)
    throw error
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects.find({
      type: 'case-studies'
    }).props(['id', 'title', 'slug', 'metadata']).depth(1)
    
    return response.objects as CaseStudy[]
  } catch (error) {
    console.error('Error fetching case studies:', error)
    return []
  }
}

export async function getCaseStudy(slug: string): Promise<CaseStudy> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'case-studies',
      slug
    }).props(['id', 'title', 'slug', 'metadata']).depth(1)
    
    return response.object as CaseStudy
  } catch (error) {
    console.error('Error fetching case study:', error)
    throw error
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects.find({
      type: 'team-members'
    }).props(['id', 'title', 'slug', 'metadata']).depth(1)
    
    return response.objects as TeamMember[]
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects.find({
      type: 'testimonials'
    }).props(['id', 'title', 'slug', 'metadata']).depth(1)
    
    return response.objects as Testimonial[]
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getPageContent(slug: string): Promise<PageContent> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'page-content',
      slug
    }).props(['id', 'title', 'slug', 'metadata']).depth(1)
    
    return response.object as PageContent
  } catch (error) {
    console.error('Error fetching page content:', error)
    throw error
  }
}