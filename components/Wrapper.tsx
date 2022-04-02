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
      <header>
        <nav className="text-center ">
          <Link href="/" passHref>
            <a className="text-lg tracking-widest">trackr.</a>
          </Link>
        </nav>
      </header>
      <div className="mt-8 flex items-center gap-8">
        <Link href="/" passHref>
          <a aria-label="Go Back">
            <IconArrowLeft />
          </a>
        </Link>
        <span className="text-xl uppercase tracking-widest">{heading}</span>
      </div>
      <motion.div className="mt-8 flex items-center gap-16 pl-4" layout>
        <div className="relative">
          <Link href="/marvel/movie" passHref>
            <a
              className={`relative z-10 pl-3 font-light uppercase tracking-widest ${
                movieSelected ? 'text-white' : 'text-black'
              }`}
            >
              Movies
            </a>
          </Link>
          {movieSelected && (
            <motion.div
              className="absolute -top-3 -left-4 h-12 w-32 rounded-full bg-[#EABC85] shadow"
              layoutId="background"
            />
          )}
        </div>
        <div className="relative">
          <Link href="/marvel/tv" passHref>
            <a
              className={`relative z-10 font-light uppercase tracking-widest ${
                tvShowSelected ? 'text-white' : 'text-black'
              }`}
            >
              Tv Shows
            </a>
          </Link>
          {tvShowSelected && (
            <motion.div
              className="absolute -top-3 -left-4 h-12 w-32 rounded-full bg-[#EABC85] shadow"
              layoutId="background"
            />
          )}
        </div>
      </motion.div>
      <hr className="my-8 border-gray-300" />
      <main>{children}</main>
    </div>
  )
}

export default Wrapper
