import type { Site, SocialObjects, StackObjects } from './types'
import rails from './images/logos/icons/rails.png'
import javascript from './images/logos/icons/javascript.png'
import html5 from './images/logos/icons/html5.png'
import flutter from './images/logos/icons/flutter.png'
import css from './images/logos/icons/css.png'
import netlify from './images/logos/icons/netlify.png'
import python from './images/logos/icons/python.png'
import postgresql from './images/logos/icons/postgresql.png'
import tailwind from './images/logos/icons/tailwindcss.png'
import ruby from './images/logos/icons/ruby.png'
import figma from './images/logos/icons/figma.png'
import sketch from './images/logos/icons/sketch.png'
import c from './images/logos/icons/c.png'
import firebase from './images/logos/icons/firebase.png'

export const SITE: Site = {
  website: 'https://jane-astro.vercel.app', // replace this with your deployed domain
  author: 'Rodrigo Aguilar',
  description:
    "I'm a passionate developer, entrepreneur, and general technology enthusiast living in San Francisco. I've worked with hundreds of startups to help them develop their ideas into profitable businesses.",
  title: 'Jane Doe',
  ogImage: 'jane-og.png',
  postsPerPage: 9,
  caseStudiesPerPage: 6,
}

export const SOCIALS: SocialObjects = [
  {
    name: 'mail',
    href: 'mailto:appcrafters.dev@gmail.com',
    label: 'Email me',
    ariaLabel: 'Send email',
    showInHero: true,
  },
  // {
  //   name: 'dribbble',
  //   href: '#',
  //   label: 'Dribbble',
  //   ariaLabel: 'Follow on Dribbble',
  //   showInHero: false,
  // },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/appcrafters.dev?igsh=MWVzNmIyM3ZtZHhndQ==',
    label: 'Instagram',
    ariaLabel: 'Follow on Instagram',
    showInHero: true,
  },
  // {
  //   name: 'x',
  //   href: '#',
  //   label: 'Twitter / X',
  //   ariaLabel: 'Follow on X',
  //   showInHero: false,
  // },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/company/appcrafters-dev/',
    label: 'LinkedIn',
    ariaLabel: 'Follow on LinkedIn',
    showInHero: true,
  },
  // {
  //   name: 'github',
  //   href: '#',
  //   label: 'Github',
  //   ariaLabel: 'Follow on Github',
  //   showInHero: false,
  // },
]

export const STACK: StackObjects = [
  {
    name: 'Javascript',
    experience: '8+ years of experience',
    logo: javascript,
  },
  {
    name: 'HTML5',
    logo: html5,
  },
  {
    name: 'CSS',
    logo: css,
  },
  {
    name: 'Tailwind',
    experience: '3 years of experience',
    logo: tailwind,
  },
  {
    name: 'Figma',
    logo: figma,
  },
  {
    name: 'Sketch',
    logo: sketch,
  },
  {
    name: 'Flutter',
    experience: '5+ years of experience',
    logo: flutter,
  },
  {
    name: 'Netlify',
    logo: netlify,
  },
  {
    name: 'Python',
    experience: '4 years of experience',
    logo: python,
  },
  {
    name: 'Postgresql',
    experience: '6 years of experience',
    logo: postgresql,
  },
  {
    name: 'Firebase',
    logo: firebase,
  },
  {
    name: 'C programming language',
    logo: c,
  },
  {
    name: 'Ruby',
    experience: '9 years of experience',
    logo: ruby,
  },
]
