# Jane - Astro

This is a personal portfolio template built using [Tailwind CSS](https://tailwindcss.com/), [Astro](https://astro.build/), and [Typescript](https://www.typescriptlang.org/).

This template is built with **Astro v3.5** and **Tailwind CSS v3**, leveraging the latest [View Transitions](https://docs.astro.build/en/guides/view-transitions/) and Image Optimizations. It incorporates many of Astro's native features, including [Content Collections](https://docs.astro.build/en/guides/content-collections/), powered by [MDX](https://mdxjs.com/) for seamless integration of blog posts and work case studies throughout the site. Additionally, for a dynamic and interactive user experience, the template integrates [Alpine.js](https://alpinejs.dev/).

## Getting Started

First, install the dependencies. Navigate to the project directory in your terminal and run:

```bash
npm install
# or
yarn install  # if you use yarn
pnpm install # if you use pnpm
```

This will install all required dependencies and place them in a folder called `node_modules` in the root directory.

Once the dependencies are installed, you can run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
```

If all goes well, Astro should now be serving the template on [http://localhost:4321](http://localhost:4321)!

## 🚀 Project Structure

Inside of the template, you'll see the following folders and files:

```text
/
└── 📁public              # Contains favicon & OG image
└── 📁src                 # Core source files
    └── 📁components      # Reusable UI components
    └── 📁content         # Content collections
        └── 📁blog        # Blog posts (mdx files)
        └── 📁work        # Case studies (mdx files)
        └── config.ts     # Collection schemas
    └── 📁icons           # SVG icons
    └── 📁images          # Images used across the project
    └── 📁pages           # Our website pages
    └── 📁styles          # Contains tailwind.css & prism.css for Prism styles
    └── 📁utils           # Utility and helper functions
    └── config.ts         # Defines general site and reusable data
    └── types.ts          # TypeScript types for our data/content
└── astro.config.mjs      # Main Astro configuration file
└── prettier.config.cjs   # Prettier code formatting configuration
└── tailwind.config.cjs   # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Tailwind CSS

This theme uses the latest version of Tailwind CSS: v3.3.

Tailwind CSS and its dependencies were installed using [Astro's official Tailwind integration](https://docs.astro.build/en/guides/integrations-guide/tailwind/). If you are not familiar with the Tailwind CSS framework, I would recommend checking out the [Tailwind documentation](https://tailwindcss.com/docs).

You can find the `tailwind.config.js` file at the root of the directory. The entry point CSS file is located at `src/styles/tailwind.css`. This file contains the `@tailwind` directives.

There is an additional `prism.css` stylesheet for `prism.js` codeblock syntax styles used in the blog posts.

We've tried to minimize any custom CSS and only rely on Tailwind's utility classes and a few additional classes defined within the `tailwind.config.js` file. This template additionally uses 3 official Tailwind CSS plugins (`@tailwindcss/forms`, `@tailwindcss/aspect-ratio`, and `@tailwindcss/typography`).

## Typescript

Jane comes with full Typescript support, offering robust typing and advanced language features. Astro's built-in [support for TypeScript](https://docs.astro.build/en/guides/typescript/) allows for writing typescript directly in Astro components, with benefits such as error prevention at runtime and enhanced code understanding through type definition of components and props.

### Typescript configuration

You can find the Typescript configuration at the root of the project: `tsconfig.json`. Our setup follows Astro's guidelines for TypeScript integration, using one of Astro's extendable `tsconfig.json` templates. We've chosen the 'strict' template for its balance between strictness and flexibility, and because it is the template recommended by Astro.

In the `tsconfig.json`, we also establish module path aliases, creating shortcuts for imports related to components, images, utility functions, and data, all pointing directly to the `/src` directory. This enables us to use succinct import statements like `import HomeHero from @components/HomeHero.astro`, streamlining file referencing and enhancing project readability.

### Types Definition

In `src/types.ts`, we define global data types for the site, facilitating consistency and ease of use across various components and modules. This ensures that the data structures used throughout the site are uniform, making the code more maintainable and reducing potential for errors.

### Enhanced Content Collections

TypeScript truly shines when combined with Astro's content collections, providing a robust and seamless experience in content management. By defining structured content schemas in `src/content/config.ts`, we establish uniform data structures for the site's blog posts and work case studies. These schemas ensure consistent frontmatter and entry data, contributing to the overall integrity and predictability of the content.

Astro automatically generates TypeScript interfaces for our blog posts and case studies. This means we have full support for content queries, including autocompletion and type-checking. This provides a more efficient, error-resistant development process, ensuring that all content adheres to the established schemas.

## Automatic RSS Feed and Sitemap Generation

### RSS Feed

By leveraging Astro's content collections and `@astrojs/rss`, our template simplifies the process of creating a rich, fully-featured RSS feed, enhancing your blog's accessibility and discoverability.

You can find the automatically generated RSS feed for blog posts, at `/rss.xml`. The feed generation logic is contained within `src/pages/rss.xml.js`. This setup adheres to Astro's guide for [RSS feed generation](https://docs.astro.build/en/guides/rss/).

### Sitemap

The template simplifies the creation of a sitemap, aiding search engines like Google in more efficiently crawling your site. We use `@astrojs/sitemap`, Astro's official integration, to automatically generate a sitemap during your project build, outlining all pages of your site.

The sitemap generation is configured in the `astro.config.mjs` file. Here, you need to specify the deployment/site URL using the site property. Our template uses the `SITE.website` variable defined in the `src/config.ts` global configuration file for this purpose. Remember to update the website property in `src/config.ts` with your actual production website URL when deploying your site.

```javascript
// src/config.ts
export const SITE: Site = {
  website: 'https://jane-astro.vercel.app', // replace this with your deployed domain
  // ... other site properties
}
```

## Pagination

This template takes advantage of Astro's built-in Pagination features to implement pagination for both the blog posts and case studies in the `/blog` and `/work` routes respectively.

### Pagination Configuration

You can control the number of items per page using the `SITE` variable defined in the `src/config.ts` file, where `postsPerPage` and `caseStudiesPerPage` dictate the number of items displayed per page for blog posts and case studies, respectively.

```typescript
// src/config.ts
export const SITE: Site = {
  // ... other site properties
  postsPerPage: 9,
  caseStudiesPerPage: 6,
}
```

### Pagination Component

The pagination component itself is defined in `src/components/collections/Pagination.astro`. This component is designed to appear only when there is more than one page of content, based on the number of items per page as specified in the `SITE` configuration.

### Dynamic Pagination Routes

For blog posts, the dynamic pagination pages are determined by `src/pages/blog/[...page].astro`, which handles the display of blog posts across multiple pages, including category-specific pages managed by `src/pages/blog/[category]/[...page].astro`. Similarly, case studies are paginated through `src/pages/work/[...page].astro` and `src/pages/work/[tag]/[...page].astro` for tag-specific pages.

Astro's pagination system generates common properties like previous/next page URLs and the total number of pages, streamlining the creation of paginated routes. The `[...page].astro` file syntax is used to dynamically generate routes for each page, allowing for efficient navigation through our blog post and case study data.

For a comprehensive understanding of Astro's pagination capabilities and how they're integrated into our template, refer to [Astro's documentation on Pagination](https://docs.astro.build/en/core-concepts/routing/#pagination).

## Fonts

This template uses the [Inter](https://fonts.google.com/specimen/Inter), [Lexend](https://fonts.google.com/specimen/Lexend), and the [Gochi Hand](https://fonts.google.com/specimen/Gochi+Hand) Google Font families. The template uses [Fontsource](https://docs.astro.build/en/guides/fonts/#using-fontsource) to install and use the fonts.

## Icons

The icons used for this theme are part of the [Hero Icons](https://heroicons.com/) set that is free to use and published under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

Some of the examples in Jane use [Nucleo App](https://nucleoapp.com/premium-icons) icons which we have acquired a license for. You are free to use the Nucleo icons included in this template on your projects, but if you are interested in using the rest of their premium icons you can buy a license on their [website](https://nucleoapp.com/).

This template uses [astro-icon](https://github.com/natemoo-re/astro-icon#readme) in order to make using these icons easier. It defines a straightforward Icon component for Astro that allows you to use custom SVG icons (sourced from the `src/icons` directory) or icons from common icon packs, powered by [Iconify](https://iconify.design/). We found that some icon packs (such as HeroIcons) are not up-to-date so we simply copied the icon SVGs that we use in the template to the `src/icons` directory.

## Images

All of the images used in the template are free to use and are either from [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/), or custom-made.

## Deployment

The easiest way to deploy your Astro site is either with [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). To learn more you can read Astro's official docs on [deploying with Vercel](https://docs.astro.build/en/guides/deploy/vercel/) or [deploying with Netlify](https://docs.astro.build/en/guides/deploy/netlify/)

## License

This site template is a commercial product and is licensed under the [Tailwind Awesome license](https://www.tailwindawesome.com/license).

## Learn More

To learn more about Astro, take a look at the following resources you can check their [official documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).

## Additional Help

If you need additional help setting up the template or have any questions, feel free to contact us at <rodrigo@tailwindawesome.com>.
