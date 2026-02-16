import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Page from '../models/Page.model.js'

dotenv.config()

const seedPages = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cloudintellect')
    console.log('✅ Connected to MongoDB')

    const pages = [
      {
        slug: 'home',
        title: 'Home',
        description: 'Homepage of Cloud Intellect',
        navbarLabel: 'Home',
        showInNavbar: true,
        navbarOrder: 1,
        order: 1,
        isActive: true,
        content: {}
      },
      {
        slug: 'about',
        title: 'About Us',
        description: 'About Cloud Intellect',
        navbarLabel: 'About',
        showInNavbar: true,
        navbarOrder: 2,
        order: 2,
        isActive: true,
        content: {}
      },
      {
        slug: 'why-choose-us',
        title: 'Why Choose Us',
        description: 'Why choose Cloud Intellect',
        navbarLabel: 'Why Choose Us',
        showInNavbar: true,
        navbarOrder: 3,
        order: 3,
        isActive: true,
        content: {}
      },
      {
        slug: 'salesforce-developer',
        title: 'Salesforce Developer',
        description: 'Salesforce Developer Course',
        navbarLabel: 'SFDC',
        showInNavbar: true,
        navbarOrder: 4,
        order: 4,
        isActive: true,
        content: {}
      },
      {
        slug: 'salesforce-marketing-cloud',
        title: 'Salesforce Marketing Cloud',
        description: 'Salesforce Marketing Cloud Course',
        navbarLabel: 'SFMC',
        showInNavbar: true,
        navbarOrder: 5,
        order: 5,
        isActive: true,
        content: {}
      },
      {
        slug: 'sfmc-sfdc',
        title: 'SFMC & SFDC',
        description: 'SFMC and SFDC Combined Course',
        navbarLabel: 'SFMC & SFDC',
        showInNavbar: true,
        navbarOrder: 6,
        order: 6,
        isActive: true,
        content: {}
      },
      {
        slug: 'alumni-success',
        title: 'Alumni Success',
        description: 'Alumni Success Stories',
        navbarLabel: 'Alumni',
        showInNavbar: true,
        navbarOrder: 7,
        order: 7,
        isActive: true,
        content: {}
      },
      {
        slug: 'webinars',
        title: 'Webinars',
        description: 'Upcoming Webinars',
        navbarLabel: 'Webinars',
        showInNavbar: true,
        navbarOrder: 8,
        order: 8,
        isActive: true,
        content: {}
      },
      {
        slug: 'placements',
        title: 'Placements',
        description: 'Student Placements and Career Outcomes',
        navbarLabel: 'Placements',
        showInNavbar: true,
        navbarOrder: 9,
        order: 9,
        isActive: true,
        content: {
          hero: {
            tag: '100% PLACEMENT SUPPORT',
            heading: 'Our Students Work at Top Companies.',
            description: 'Meet our recent students now working in real Salesforce roles at leading companies.',
            backgroundImage: '/images/BG (1).webp',
            primaryButtonText: 'Explore Programs',
            primaryButtonHref: '#programs',
            secondaryButtonText: 'View Placements',
            secondaryButtonHref: '#placements'
          },
          stats: {
            stats: [
              { value: '5000+', label: 'Learners Trained' },
              { value: '1400+', label: 'Placed' },
              { value: '90%', label: 'Satisfaction' },
              { value: '100%', label: 'Compliance' }
            ]
          }
        }
      },
      {
        slug: 'gallery',
        title: 'Gallery',
        description: 'Life at Cloud Intellect - Gallery',
        navbarLabel: 'Gallery',
        showInNavbar: true,
        navbarOrder: 10,
        order: 10,
        isActive: true,
        content: {
          hero: {
            tag: 'GLIMPSE OF OUR CAMPUS',
            heading: 'Life at Cloud Intellect',
            description: 'A glimpse into our vibrant learning ecosystem. From intense classroom sessions to celebratory moments, see what makes our community special.',
            backgroundImage: '/images/BG (2).webp',
            primaryButtonText: 'Explore Programs',
            primaryButtonHref: '#programs',
            secondaryButtonText: 'View Placements',
            secondaryButtonHref: '#placements'
          }
        }
      },
      {
        slug: 'testimonials',
        title: 'Testimonials',
        description: 'Real Stories. Real Careers.',
        navbarLabel: 'Testimonials',
        showInNavbar: true,
        navbarOrder: 11,
        order: 11,
        isActive: true,
        content: {
          hero: {
            tag: 'SPECIALIZATION PROGRAM',
            heading: 'Real Stories. Real Careers.',
            description: 'These are real students from Cloud Intellect who started from different backgrounds and built their careers in Salesforce.',
            backgroundImage: '/images/BG (2).webp',
            primaryButtonText: 'Explore Programs',
            primaryButtonHref: '#programs',
            secondaryButtonText: 'View Placements',
            secondaryButtonHref: '#placements'
          },
          beNextSuccessStory: {
            heading: 'Be Our Next Success Story',
            description: 'Join 5000+ learners who have successfully transitioned into the Salesforce ecosystem. Your journey starts here.',
            buttonText: 'Apply Today',
            buttonHref: '#apply'
          }
        }
      },
      {
        slug: 'contact',
        title: 'Contact Us',
        description: 'Get in touch with Cloud Intellect',
        navbarLabel: 'Contact',
        showInNavbar: true,
        navbarOrder: 12,
        order: 12,
        isActive: true,
        content: {
          hero: {
            tag: 'GET IN TOUCH',
            heading: 'Start Your Journey With Cloud Intellect',
            description: 'Whether you have questions about our courses, placements, or just want to say hello, we\'re here to help you navigate your Salesforce career.',
            backgroundImage: '/images/BG (2).webp',
            primaryButtonText: 'Explore Programs',
            primaryButtonHref: '#programs',
            secondaryButtonText: 'View Placements',
            secondaryButtonHref: '#placements'
          },
          contactInfo: {
            email: 'info@cloudintellect.in',
            phoneNumbers: [
              { number: '+91 876-699-6944', label: 'Call Us' },
              { number: '+91 876-699-6945', label: 'Call Us' }
            ],
            programs: [
              'Salesforce Developer',
              'Salesforce Marketing Cloud',
              'SFMC & SFDC Combined',
              'Other'
            ],
            mapEmbedUrl: ''
          },
          locations: {
            locations: [
              {
                city: 'Pune',
                address: '3rd floor block 306, Baner Biz Bay, Laxman Nagar, Baner, Pune, Maharashtra 411045',
                mapUrl: ''
              },
              {
                city: 'Nagpur',
                address: 'Cloud Intellect, Plot no. 5, Sanjay Heights, Beltarodi Rd, near ICICI Bank, Besa, Nagpur, Maharashtra 440037',
                mapUrl: ''
              }
            ]
          }
        }
      }
    ]

    // Clear existing pages
    await Page.deleteMany({})
    console.log('🗑️  Cleared existing pages')

    // Insert pages
    await Page.insertMany(pages)
    console.log(`✅ Seeded ${pages.length} pages`)

    console.log('🎉 Pages seeding completed successfully!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding pages:', error)
    process.exit(1)
  }
}

seedPages()
