'use client'

import { useRouter, usePathname } from 'next/navigation'

export default function BackButton() {
  const path = usePathname()
  const router = useRouter()

  if (path === '/') return null

  return <button onClick={() => router.back()}>Back</button>
}
