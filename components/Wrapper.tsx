import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import IconArrowLeft from './IconArrowLeft'

const Wrapper: NextPage = ({ children }) => {
  const router = useRouter()
  const heading = router.pathname.split('/')[1]
  const movieSelected = router.pathname.split('/')[2] === 'movie'
  const tvShowSelected = router.pathname.split('/')[2] === 'tv'

  return (
    <div className="min-h-screen bg-[#EFEDE9] p-4 sm:px-8">
      <div className="mx-auto max-w-screen-lg">
        <header>
          <nav className="text-center ">
            <Link href="/" passHref>
              <a className="text-lg tracking-widest">trackr.</a>
            </Link>
          </nav>
        </header>
        <div className="mt-8 flex items-center gap-6">
          <Link href="/" passHref>
            <a aria-label="Go Back" className="rounded-xl bg-gray-100 p-2.5 shadow-sm sm:p-3">
              <IconArrowLeft />
            </a>
          </Link>
          <span className="text-2xl font-semibold capitalize tracking-wide sm:text-3xl">{heading}</span>
        </div>
        <motion.div className="mt-8 flex items-center gap-6" layout>
          <div className="relative">
            <Link href={`/${heading}/movie`} passHref>
              <a
                className={`relative z-10 rounded-full p-4 font-light uppercase tracking-widest ${
                  movieSelected ? 'text-white' : 'text-black'
                }`}
              >
                Movies
              </a>
            </Link>
            {movieSelected && (
              <motion.div
                className="absolute inset-0 -top-3 h-12 rounded-full bg-[#EABC85] shadow"
                layoutId="background"
              />
            )}
          </div>
          <div className="relative">
            <Link href={`/${heading}/tv`} passHref>
              <a
                className={`relative z-10 rounded-full p-4 font-light uppercase tracking-widest ${
                  tvShowSelected ? 'text-white' : 'text-black'
                }`}
              >
                Tv Shows
              </a>
            </Link>
            {tvShowSelected && (
              <motion.div
                className="absolute inset-0 -top-3 h-12 rounded-full bg-[#EABC85] shadow"
                layoutId="background"
              />
            )}
          </div>
        </motion.div>
        <hr className="my-8 border-gray-300" />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Wrapper
