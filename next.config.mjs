// Import the default function from '@next/mdx'
import createMDX from '@next/mdx'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  // Optionally, add any other Next.js config below
}

// Export the configuration wrapped with MDX
export default withMDX(nextConfig)
