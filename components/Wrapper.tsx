'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import IconArrowLeft from './IconArrowLeft'

type Props = {
  children: React.ReactNode
  heading: string
}

export default function Wrapper({ children, heading }: Props) {
  const pathname = usePathname()
  const movieSelected = pathname?.split('/')?.[2] === 'movie'
  const tvShowSelected = pathname?.split('/')?.[2] === 'tv'

  return (
    <>
      <div className="mt-8 flex items-center gap-6">
        <Link aria-label="Go Back" className="rounded-xl bg-gray-100 p-2.5 shadow-sm sm:p-3" href="/">
          <IconArrowLeft />
        </Link>
        <span className="text-2xl font-semibold capitalize tracking-wide sm:text-3xl">{heading}</span>
      </div>
      <div className="mt-8 flex items-center gap-6">
        <div className="relative">
          <Link
            className={`relative z-10 rounded-full p-4 font-light uppercase tracking-widest ${
              movieSelected ? 'text-white' : 'text-black'
            }`}
            href={`/${heading}/movie`}
          >
            Movies
          </Link>
          {movieSelected && <div className="absolute inset-0 -top-3 h-12 rounded-full bg-[#EABC85] shadow" />}
        </div>
        <div className="relative">
          <Link
            className={`relative z-10 rounded-full p-4 font-light uppercase tracking-widest ${
              tvShowSelected ? 'text-white' : 'text-black'
            }`}
            href={`/${heading}/tv`}
          >
            Tv Shows
          </Link>
          {tvShowSelected && <div className="absolute inset-0 -top-3 h-12 rounded-full bg-[#EABC85] shadow" />}
        </div>
      </div>
      <hr className="my-8 border-gray-300" />
      <main>{children}</main>
    </>
  )
}
