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
      features: z.array(
        z.object({
          title: z.string(),
          items: z.array(z.string()),
        })
      ),
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
      ).nullable(),
      projectURL: z.string().url().nullable(),
      technology: z.string(),
      description: z.string(),
      client: z.object({
        name: z.string(),
        description: z.string(),
        industry: z.string(),
        companySize: z.string(),
        headquarters: z.string(),
      }),
      testimonial: z.object({
        text: z.string().nullable(),
        author: z.object({
          name: z.string().nullable(),
          role: z.string().nullable(),
          image: image().nullable(),
        }).nullable(),
      }).nullable(),
      timeline: z.object({
        start: z.date().nullable(),
        end: z.date().nullable(),
      }),
    }),
})

export const collections = {
  blog: blogCollection,
  work: caseStudiesCollection,
}
