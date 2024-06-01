import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      category: z.enum([
        'Business',
        'Web Development',
        'Content Creation',
        'Tutorials',
      ]),
      description: z.string(),
      publishDate: z.date(),
    }),
})

const caseStudiesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      tags: z.array(z.string()),
      features: z.array(z.string()),
      thumbnail: z.object({
        src: image(),
        alt: z.string(),
      }),
      coverImage: z.object({
        src: image(),
        alt: z.string(),
      }),
      images: z.array(
        z.object({
          src: image(),
          alt: z.string(),
        }),
      ),
      projectURL: z.string().url(),
      description: z.string(),
      client: z.object({
        name: z.string(),
        description: z.string(),
        industry: z.string(),
        companySize: z.string(),
        headquarters: z.string(),
      }),
      testimonial: z.object({
        text: z.string(),
        author: z.object({
          name: z.string(),
          role: z.string(),
          image: image(),
        }),
      }),
      timeline: z.object({
        start: z.date(),
        end: z.date(),
      }),
    }),
})

export const collections = {
  blog: blogCollection,
  work: caseStudiesCollection,
}
