'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function HomeButton() {
  const path = usePathname()

  return (
    <Link
      href='/'
      aria-disabled={path === '/'}
      className={`${path === '/' && 'pointer-events-none text-white'}`}
    >
      Home
    </Link>
  )
}
