# Digital Agency Website

![App Preview](https://imgix.cosmicjs.com/88bf6a30-625a-11f0-a051-23c10f41277a-photo-1460925895917-afdab827c52f-1752680142462.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A professional digital agency website showcasing services, team members, case studies, and client testimonials. Built with Next.js and powered by Cosmic CMS, this modern website features a clean, professional design with dynamic content management capabilities. REVERT

## ✨ Features

- **Dynamic Service Showcase** - Display services with detailed descriptions, features, and pricing
- **Team Member Profiles** - Comprehensive team directory with photos, bios, and skills
- **Case Study Portfolio** - Detailed project showcases with results and client testimonials  
- **Client Testimonials** - Social proof with ratings and client feedback
- **Responsive Design** - Optimized for all devices with mobile-first approach
- **SEO Optimized** - Built-in SEO best practices and meta tag management

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=company-website-production-2c6e2500-625a-11f0-bcb0-e9360551c020)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with services, team members, testimonials, and case studies"

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: "staging" in cosmic config. Make the style like

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🚀 Technologies Used

- **Next.js 15** - React framework for production
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **Bun** - Fast JavaScript runtime and package manager

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your content bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up your environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Add your Cosmic credentials to `.env.local`:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

5. Run the development server:
   ```bash
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const services = await cosmic.objects
  .find({ type: 'services' })
  .depth(1)
  .props(['id', 'title', 'slug', 'metadata'])
```

### Fetching Team Members
```typescript
const teamMembers = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
```

### Fetching Case Studies
```typescript
const caseStudies = await cosmic.objects
  .find({ type: 'case-studies' })
  .depth(1)
  .props(['id', 'title', 'slug', 'metadata'])
```

## 🎨 Cosmic CMS Integration

This application integrates with your existing Cosmic content structure:

- **Services** - Displays service offerings with features and pricing
- **Team Members** - Shows team profiles with photos and skills
- **Case Studies** - Showcases project results and client success stories
- **Testimonials** - Features client feedback and ratings

Each content type is fully integrated with proper TypeScript interfaces and optimized for performance.

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `out`
4. Add environment variables

For production, make sure to set your environment variables in your hosting platform's dashboard.

<!-- README_END -->