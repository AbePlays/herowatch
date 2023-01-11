import Link from 'next/link'
import { useRouter } from 'next/router'
import { m } from 'framer-motion'

import IconArrowLeft from './IconArrowLeft'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const heading = router.pathname.split('/')[1]
  const movieSelected = router.pathname.split('/')[2] === 'movie'
  const tvShowSelected = router.pathname.split('/')[2] === 'tv'

  return (
    <div className="min-h-screen bg-[#EFEDE9] p-4 sm:px-8">
      <div className="mx-auto max-w-screen-lg">
        <header>
          <nav className="text-center ">
            <Link href="/" className="text-lg tracking-widest">
              trackr.
            </Link>
          </nav>
        </header>
        <div className="mt-8 flex items-center gap-6">
          <Link aria-label="Go Back" className="rounded-xl bg-gray-100 p-2.5 shadow-sm sm:p-3" href="/">
            <IconArrowLeft />
          </Link>
          <span className="text-2xl font-semibold capitalize tracking-wide sm:text-3xl">{heading}</span>
        </div>
        <m.div className="mt-8 flex items-center gap-6" layout>
          <div className="relative">
            <Link
              className={`relative z-10 rounded-full p-4 font-light uppercase tracking-widest ${
                movieSelected ? 'text-white' : 'text-black'
              }`}
              href={`/${heading}/movie`}
            >
              Movies
            </Link>
            {movieSelected && (
              <m.div className="absolute inset-0 -top-3 h-12 rounded-full bg-[#EABC85] shadow" layoutId="background" />
            )}
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
            {tvShowSelected && (
              <m.div className="absolute inset-0 -top-3 h-12 rounded-full bg-[#EABC85] shadow" layoutId="background" />
            )}
          </div>
        </m.div>
        <hr className="my-8 border-gray-300" />
        <main>{children}</main>
      </div>
    </div>
  )
}
