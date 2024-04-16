// Import the default function from '@next/mdx'
import createMDX from '@next/mdx'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  // Enable a static export
  // TIP: `output: 'export'` does the same as the deprecated `next export` command. It will generate static HTML files in the `out` directory when you run `npm run build`. You can use these files to deploy your static site. To test the static export in development, run `npx serve@latest out` after `npm run build`.
  output: 'export',
}

// Export the configuration wrapped with MDX
export default withMDX(nextConfig)
