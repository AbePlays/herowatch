import { type Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'DC Marvel Project',
  description: 'Tracks Upcoming DC and Marvel Projects',
}

const font = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
