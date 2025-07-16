import { createBucketClient } from '@cosmicjs/sdk'
import { Service, TeamMember, CaseStudy, Testimonial, PageContent } from '@/types'

if (!process.env.COSMIC_BUCKET_SLUG) {
  throw new Error('COSMIC_BUCKET_SLUG is required')
}

if (!process.env.COSMIC_READ_KEY) {
  throw new Error('COSMIC_READ_KEY is required')
}

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG,
  readKey: process.env.COSMIC_READ_KEY,
  writeKey: process.env.COSMIC_WRITE_KEY,
  apiEnvironment: 'staging',
})

// Error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Page content functions
export async function getPageContent(): Promise<PageContent | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'page-content',
    })
    
    const pageContent = response.object as PageContent
    
    if (!pageContent || !pageContent.metadata) {
      return null
    }
    
    return pageContent
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch page content')
  }
}

// Service functions
export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .depth(1)
      .props(['id', 'title', 'slug', 'metadata'])
    
    return response.objects as Service[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch services')
  }
}

export async function getService(slug: string): Promise<Service | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'services',
      slug,
    }).depth(1)
    
    const service = response.object as Service
    
    if (!service || !service.metadata) {
      return null
    }
    
    return service
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw error
  }
}

// Team member functions
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
    
    return response.objects as TeamMember[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch team members')
  }
}

export async function getTeamMember(slug: string): Promise<TeamMember | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'team-members',
      slug,
    })
    
    const teamMember = response.object as TeamMember
    
    if (!teamMember || !teamMember.metadata) {
      return null
    }
    
    return teamMember
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw error
  }
}

// Case study functions
export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .depth(1)
      .props(['id', 'title', 'slug', 'metadata'])
    
    return response.objects as CaseStudy[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch case studies')
  }
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'case-studies',
      slug,
    }).depth(1)
    
    const caseStudy = response.object as CaseStudy
    
    if (!caseStudy || !caseStudy.metadata) {
      return null
    }
    
    return caseStudy
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw error
  }
}

// Testimonial functions
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .depth(1)
      .props(['id', 'title', 'slug', 'metadata'])
    
    return response.objects as Testimonial[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch testimonials')
  }
}

export async function getTestimonial(slug: string): Promise<Testimonial | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'testimonials',
      slug,
    }).depth(1)
    
    const testimonial = response.object as Testimonial
    
    if (!testimonial || !testimonial.metadata) {
      return null
    }
    
    return testimonial
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw error
  }
}