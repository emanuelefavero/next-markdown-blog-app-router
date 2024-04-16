import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>
        Next.js Markdown Blog {'('}App Router{')'}
      </h1>

      <p>Thanks to MDX, we can create blog posts with Markdown</p>

      <h2>Category 1</h2>
      <ul>
        <li>
          <Link href='/post-1'>Post 1</Link>
        </li>
        <li>
          <Link href='/post-2'>Post 2</Link>
        </li>
      </ul>

      <h2>Category 2</h2>
      <ul>
        <li>
          <Link href='/post-3'>Post 3</Link>
        </li>
      </ul>
    </>
  )
}
