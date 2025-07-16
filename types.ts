// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  status?: string;
  published_at?: string;
  thumbnail?: string;
}

// Service interface
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name: string;
    description: string;
    icon?: {
      url: string;
      imgix_url: string;
    };
    features?: string[];
    starting_price?: string;
    team_lead?: TeamMember;
  };
}

// Team Member interface
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name: string;
    job_title: string;
    bio?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    email?: string;
    linkedin?: string;
    skills?: string[];
  };
}

// Case Study interface
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    title: string;
    client: string;
    industry?: string;
    challenge: string;
    solution: string;
    results: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    services_used?: Service[];
    team_members?: TeamMember[];
    duration?: string;
  };
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    company: string;
    job_title?: string;
    testimonial: string;
    rating?: {
      key: string;
      value: string;
    };
    photo?: {
      url: string;
      imgix_url: string;
    };
    service_used?: Service | string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

export function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type === 'case-studies';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

// Utility types
export type OptionalMetadata<T extends { metadata: any }> = Partial<T['metadata']>;
export type CreateServiceData = Omit<Service, 'id' | 'created_at' | 'modified_at'>;
export type CreateTeamMemberData = Omit<TeamMember, 'id' | 'created_at' | 'modified_at'>;
export type CreateCaseStudyData = Omit<CaseStudy, 'id' | 'created_at' | 'modified_at'>;
export type CreateTestimonialData = Omit<Testimonial, 'id' | 'created_at' | 'modified_at'>;