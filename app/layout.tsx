import { Plus_Jakarta_Sans } from '@next/font/google'

import '../styles/globals.css'

const font = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={font.className}>{children}</body>
    </html>
  )
}
