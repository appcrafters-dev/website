import { getCollection } from 'astro:content'
import type { CaseStudy } from '@types'

export async function getAllTags() {
  // Fetch case studies and extract tags
  const caseStudies = await getCollection('work')
  const repeatingTags = caseStudies.flatMap((caseStudy) => caseStudy.data.tags)

  // Count tag frequency using reduce
  const tagCount = repeatingTags.reduce((acc, tag) => {
    acc.set(tag, (acc.get(tag) || 0) + 1)
    return acc
  }, new Map())

  // Sort tags based on frequency
  const sortedTags = Array.from(tagCount.entries())
    .sort((a, b) => b[1] - a[1])
    .map((entry) => entry[0])

  return sortedTags
}

export async function getFeaturedTags() {
  const tags = await getAllTags()

  return tags.slice(0, 4)
}

export function sortCaseStudies(caseStudies: CaseStudy[]) {
  return caseStudies.sort(
    (a, b) => {
      const aEnd = a.data.timeline.end?.valueOf() || 0;
      const bEnd = b.data.timeline.end?.valueOf() || 0;
      return bEnd - aEnd;
    }
  )
}

export async function getSortedCaseStudies() {
  const caseStudies = await getCollection('work')
  return sortCaseStudies(caseStudies)
}
