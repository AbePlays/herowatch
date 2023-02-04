'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import IconArrowLeft from './IconArrowLeft'

type Props = {
  children: React.ReactNode
  heading: string
}

const TabOptions = [
  { id: 1, label: 'Movies', route: 'movie' },
  { id: 2, label: 'Tv Shows', route: 'tv' },
]

export default function Wrapper({ children, heading }: Props) {
  const itemsRef = React.useRef<HTMLAnchorElement[]>([])
  const [rect, setRect] = React.useState<{ width: number; left: number }>()
  const pathname = usePathname()
  const activeRoute = pathname?.split('/')[2]

  React.useLayoutEffect(() => {
    const activeIndex = TabOptions.findIndex((item) => item.route === activeRoute)
    if (activeIndex === -1) {
      throw new Error('Landed on an invalid route')
    }
    const highlightWidth = itemsRef.current?.[activeIndex]?.offsetWidth
    const left = itemsRef.current?.[activeIndex]?.offsetLeft

    setRect({ width: highlightWidth, left })
  }, [activeRoute])

  return (
    <>
      <div className="mt-8 flex items-center gap-6">
        <Link aria-label="Go Back" className="rounded-xl bg-gray-100 p-2.5 shadow-sm sm:p-3" href="/">
          <IconArrowLeft />
        </Link>
        <span className="text-2xl font-semibold capitalize tracking-wide sm:text-3xl">{heading}</span>
      </div>

      {/* Tabs */}
      <ul className="relative mt-8 flex items-center gap-6">
        {TabOptions.map((item, index) => {
          const isTabActive = item.route === activeRoute
          return (
            <li key={item.id}>
              <Link
                className={`relative z-10 rounded-full p-4 font-light uppercase tracking-widest transition-colors ${
                  isTabActive ? 'text-white' : 'text-black'
                }`}
                href={`/${heading}/${item.route}`}
                ref={(el) => {
                  if (el) {
                    itemsRef.current[index] = el
                  }
                }}
              >
                {item.label}
              </Link>
            </li>
          )
        })}

        {/* Highlight */}
        {rect && (
          <div
            aria-hidden="true"
            className={`absolute inset-0 -top-3 h-12 rounded-full bg-[#EABC85] shadow transition-[left] duration-300`}
            style={rect}
          />
        )}
      </ul>
      <hr className="my-8 border-gray-300" />
      <main>{children}</main>
    </>
  )
}
