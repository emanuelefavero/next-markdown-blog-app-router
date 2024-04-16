import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BackButton from './_components/BackButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Markdown Blog',
  description: 'A Markdown Blog built with Next.js App Router',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <BackButton />
        </header>
        {children}
      </body>
    </html>
  )
}
